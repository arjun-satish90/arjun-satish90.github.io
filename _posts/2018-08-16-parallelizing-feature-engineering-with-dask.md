---
published: false
title: Untitled
---
![](https://cdn-images-1.medium.com/max/2000/1*ble-iLK9NDmCeBha0wuSfg.jpeg)
*(Source)[https://www.pexels.com/photo/timelapse-photography-of-road-with-white-and-red-lights-169976/]

## How to scale Featuretools using parallel processing

When a computation is prohibitively slow, the most important question to ask is: “What is the bottleneck?” Once you know the answer, the logical next step is to figure out how to get around that bottleneck.

Often, as we’ll see, the bottleneck is that we aren’t taking full advantage of our hardware resources, for example, running a calculation on only one core when our computer has eight. Simply getting a bigger machine — in terms of RAM or cores — will not solve the problem if our code isn’t written to use all our resources. The solution therefore is to rewrite the code to utilize whatever hardware we do have as efficiently as possible.

In this article, we’ll see how to refactor our automated feature engineering code to run in parallel on all our laptop’s cores, in the process reducing computation time by over 8x. We’ll make use of two open-source libraries — [Featuretools](https://www.featuretools.com/) for [automated feature engineering](https://medium.com/@williamkoehrsen/why-automated-feature-engineering-will-change-the-way-you-do-machine-learning-5c15bf188b96) and [Dask for parallel processing](https://dask.pydata.org/) — and solve a problem with a real-world dataset.

Featuretools | Dask
:-:|:-:
![](https://cdn-images-1.medium.com/max/1600/1*ER9NQ7QQ36WNgEoHSaDduQ.png)| ![](https://cdn-images-1.medium.com/max/800/1*KUDZFIVF_CPO3IC4cvM2Vg.png)

<center>We’ll combine two important technologies: automated feature engineering in Featuretools and parallel computation in Dask.</center>

Our exact solution is specific for this problem, but the general approach we develop can be utilized to scale your own computations to larger datasets.

> Although here we’ll stick to using one computer and **_multiple cores_**, in the future, we’ll use this same method to run computations on **_multiple machines_.**

The complete code implementation is available in a [Jupyter Notebook](https://github.com/Featuretools/Automated-Manual-Comparison/blob/master/Loan%20Repayment/notebooks/Featuretools%20on%20Dask.ipynb) on GitHub. If you aren’t yet familiar with Featuretools, check out [the documentation](https://github.com/Featuretools/featuretools) or [this article](https://towardsdatascience.com/automated-feature-engineering-in-python-99baf11cc219). Here we’ll focus mainly on using Featuretools with Dask and skip over some of the automated feature engineering details.

* * *

### The Problem: Too Much Data, Not Enough Time

The primary issue when applying automated feature engineering with Featuretools for the Home Credit Default Risk problem (a [machine learning competition currently running on Kaggle](https://www.kaggle.com/c/home-credit-default-risk) where the objective is to predict whether or not a client will repay a loan) is that we have a lot of data which results in a very long feature calculation time. Using [Deep Feature Synthesis](https://www.featurelabs.com/blog/deep-feature-synthesis/), we are able to automatically generate 1820 features from _7 data tables and 58 million rows_ of client information, but a call to this function with only one core takes _25 hours_ even on an EC2 instance with 64 GB of RAM!

Given that our EC2 instance — and even our laptop — has 8 cores, to speed up the calculation we don’t need more RAM, we need to make use of those cores. Featuretools does allow for parallel processing by setting the `n_jobs` parameter in a [call to Deep Feature Synthesis](https://docs.featuretools.com/automated_feature_engineering/afe.html). However, currently the function must send the entire `[EntitySet](https://docs.featuretools.com/loading_data/using_entitysets.html)` to all workers — cores — on the machine. With a large `EntitySet`, this can result in problems if the memory for each worker is exhausted. We are currently working on better parallelization at Feature Labs, but for now we solve our problem with Dask.

#### Solution: Create Lots of Small Problems

The approach is to break one large problem up into many smaller ones and then use Dask to run multiple small problems at a time — each one on a different core. The important point here is that we make each problem — task — **independent** of the others so they can run simulataneously. Because we are making features for each client in the dataset, each task is to make a feature matrix for a subset of clients.

![](https://cdn-images-1.medium.com/max/2000/1*7sAUlWHjGbayP6UzMF6-YQ.png)
*When one problem is too hard, make lots of little problems.*

Our approach is outlined below:

1.  Make a large problem into many small problems by partitioning data
2.  Write functions to make a feature matrix from each partition of data
3.  Use Dask to run Step 2 in parallel on all our cores

At the end, we’ll have a number of smaller feature matrices that we can then join together into a final feature matrix. This same method — breaking one large problem into numerous smaller ones that are run in parallel — can be scaled to any size dataset and implemented in other libraries for distribution computing such as [Spark](https://spark.apache.org/) using [PySpark](http://spark.apache.org/docs/2.2.0/api/python/pyspark.html).

> Whatever resources we have, we want to use them as efficiently as possible, and we can take this same framework to scale to larger datasets.

#### Partitioning Data: Divide and Conquer

Our first step is to create small partitions of the original dataset, each one containing information from all seven tables for a subset of the clients. Each partition can then be used to **independently** calculate a feature matrix for a group of clients.

This operation is done by taking a list of all clients, breaking it into 104 sub-lists, and then iterating through these sub-lists, each time subsetting the data to only include clients from the sub-list and saving the resulting data to disk. The basic pseudo code of this process is:

<script src="https://gist.github.com/WillKoehrsen/f4177739841867982ef73320388b084e.js" charset="utf-8"></script>
<center>Pseudo Code for Making Partitions</center>

104 partitions was selected based on trial and error and 3 general guidelines:

1.  We want at least as many partitions as workers (cores) and the number should be a multiple of number of the workers
2.  Each partition must be small enough to fit in memory of a single worker
3.  More partitions means less variation in time to complete each task

(As an additional point of optimization, we convert the pandas `object` data types to `category` where applicable to reduce memory usage. This gets our entire dataset from 4 GB to about 2 GB. I recommend reading the [Pandas documentation](https://pandas.pydata.org/pandas-docs/stable/categorical.html) for `category` data types so you are using them effectively.

Saving all 104 partitions to disk took about 30 minutes, but this is a process that only must be done once.

![](https://cdn-images-1.medium.com/max/1600/1*pz8juBIZFwobZx9Sjbgc3A.png)
*Each partition contains all the data needed to make a feature matrix for a subset of clients.*

#### Entity Sets from Partitions

An Entity Set in Featuretools is a useful data structure because it holds multiple tables and the relationships between them. To create an `EntitySet` from a partition, we write a function that reads a partition from disk and then generates the `EntitySet` with the tables and the relations linking them.

The pseudo code for this step is:

<script src="https://gist.github.com/WillKoehrsen/a86e3e7e367506114a503b7db4dd0639.js" charset="utf-8"></script>
<center>Pseudo Code for Making EntitySet from a Partition</center>

Notice that this function _returns_ the `EntitySet` rather than saving it as we did with the partitions of data. Saving the _raw data_ is a better option for this problem because we might want to modify the `EntitySets` — say by adding interesting values or domain knowledge features — while the raw data is never altered. The `EntitySets` are generated on the fly and then passed to the next stage: calculating the feature matrix.

#### Feature Matrix from an Entity Set

The function `feature_matrix_from_entityset` does exactly what the name suggests: takes in the EntitySet created previously and generates a feature matrix with thousands of features using Deep Feature Synthesis. The feature matrix is then saved to disk. To ensure we make the same exact features for each partition, we generate the feature definitions once and then use the Featuretools function `calculate_feature_matrix`.

Here’s the entire function (we pass in a dictionary with the `EntitySet` and the partition number so we can save the feature matrix with a unique name):

<script src="https://gist.github.com/WillKoehrsen/c9d3fc6b0713358632673d418a661a13.js" charset="utf-8"></script>
<center> Code for creating a feature matrix from an EntitySet and saving it to disk.</center>

The `[chunk_size](https://docs.featuretools.com/guides/performance.html#adjust-chunk-size-when-calculating-feature-matrix)` is the only tricky part of this call: this is used to break the feature matrix calculation into smaller parts, but since we already partitioned the data, this is no longer necessary. As long as the entire EntitySet can fit in memory, then I found it’s more time efficient to calculate all of the rows at once by setting the `chunk_size` equal to the number of observations.

We now have all the individual parts we need to go from a data partition on disk to a feature matrix. These steps comprise the bulk of the work and getting Dask to run the tasks in parallel is surprisingly simple.

* * *

### Dask: Unleash Your Machine(s)

[Dask](https://dask.pydata.org/) is a parallel computing library that allows us to run many computations at the same time, either using processes/threads on one machine (local), or many separate computers (cluster). For a single machine, Dask allows us to run computations in parallel using either threads or processes.

Processes do not share memory and run on a single core and are better for compute-intensive tasks that do not need to communicate. Threads share memory, but in Python, due to the Global Interpreter Lock (GIL), two threads cannot operate at the same time in the same program and only some operations can be run in parallel using threads. (For more on threads/processes see [this excellent article](https://medium.com/@bfortuner/python-multithreading-vs-multiprocessing-73072ce5600b))

Since calculating a feature matrix is compute-intensive and can be done independently for each partition, we want to use **processes**. The tasks do not need to share memory because each feature matrix does not depend on the others. In computer science terms, by partitioning the data, we have made our problem [embarrassingly parallel](http://www.cs.iusb.edu/~danav/teach/b424/b424_23_embpar.html) because there is no need for communication between the workers.

If we start Dask using processes — as in the following code — we get 8 workers, one for each core, with each worker allotted 2 GB of memory (16 GB total / 8 workers, this will vary depending on your laptop).

    from dask.distributed import Client
    # Use all 8 cores
    client = Client(processes = True)

To check that everything worked out, we can navigate to localhost:8787 where Dask has set up a Bokeh dashboard for us. On the Workers tab, we see 8 workers each with 2 GB of memory:

![](https://cdn-images-1.medium.com/max/1600/1*mT84K5oWE21W3C1XLiuFBQ.png)
*Workers created by Dask with processes = True (run on a MacBook with 8 cores and 16 GB of RAM).*

At the moment, all 8 workers are idle because we haven’t given them anything to do. The next step is to create a “Dask bag” which is basically a list of tasks for Dask to allocate to workers. We make the “bag” using the `db.from_sequence` method and the list of partition paths.

    import dask.bag as db
    # Create list of partitions
    paths = ['../input/partitions/p%d' %  i for i in range(1, 105)]
    # Create dask bag
    b = db.from_sequence(paths)

Then, we `map` computation tasks onto the bag. To `map` means to take a function and a list of inputs and apply the function to each element in the list. Since we first need to make an`EntitySet` from each partition, we map the associated function to the “bag”:

    # Map entityset function
    b = b.map(entityset_from_partition)

Next we doing another mapping, this time to make the feature matrixes:


    # Map feature matrix function
    b = b.map(feature_matrix_from_entityset, 
              feature_names = feature_defs)

This code will take the output of the first `map` — the `EntitySet` — and pass it to the second `map.` These steps don’t actually run the computations, but rather make a list of tasks that Dask will then allocate to workers. To run the tasks and make the feature matrices we call:

    # Run the tasks
    b.compute()

Dask automatically allocates tasks to workers based on the task graph (a [Directed Acyclic Graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)) constructed from the mappings. We can view the task graph and status on the Bokeh dashboard as the computation occurs.

![](https://cdn-images-1.medium.com/max/1600/1*bzzlUUg64Fh0MaLgHBHiHg.png)
*Dask task graph midway through the computation process.*

The set of blocks on the left represent the `entity_set_from_partition` function calls and the blocks on the right are `feature_matrix_from_entityset.` From this graph, we can there is a dependency between the two functions but **not** between feature matrix calculations for each partition.

There are a number of other visualizations on the Bokeh dashboard including a task stream (left below) and a profile of operations (right below):

Task Stream | Profile 
:-: | :-:
![](https://cdn-images-1.medium.com/max/1200/1*xPCycSirWu3Ce-OlwxN0HA.png) | ![](https://cdn-images-1.medium.com/max/1200/1*yh3z4ZlG1a3D-ggwTwoC0w.png)

From the task stream, we can see that all eight workers are in use at once with a total of 208 tasks to complete. The profile tells us that the longest operation is calculating the feature matrix for each partition.

On my MacBook, it took 6200 seconds (1.75 hours) to build and save all 104 feature matrices. That’s quite an improvement, all from rewriting our code to use our available hardware as efficiently as possible.

> Instead of getting a larger computer, we rewrite our code to make the most efficient use of the resources we have. Then, when we do get a bigger computer, we’ll be able to use the same code to minimize computation time.

#### Building One Feature Matrix

Once we have the individual feature matrices, we can directly use them for modeling if we are using an algorithm that allows [on-line — also called incremental — learning](https://blog.bigml.com/2013/03/12/machine-learning-from-streaming-data-two-problems-two-solutions-two-concerns-and-two-lessons/). Another option is to create one feature matrix which can be done in pure Python using Pandas:

<script src="https://gist.github.com/WillKoehrsen/af4a39e1b32ba404fcaa6f3fae55118d.js" charset="utf-8"></script>
<center>Code to join together feature matrices.</center>

The single feature matrix has 350,000 rows and 1,820 columns, the same shape as when I first made it using a single core.

![](https://cdn-images-1.medium.com/max/1600/1*wnBQsXIhW27kFZn4ig6Hvg.png)
*Subset of complete feature matrix.*

* * *

### Conclusions

Rather than thinking of how to get more computational power, we should think about how to use the hardware we do have as efficiently as possible. In this article, we walked through how we can parallelize our code using Dask which lets us use a laptop to complete a calculation **8 times faster than on a single core.**

The solution we engineered makes use of a few key concepts:

1.  **Break up the problem into smaller, independent chunks**
2.  **Write functions to process one chunk at a time**
3.  **Delegate each chunk to a worker and compute in parallel**

Now we can not only take advantage of the speed and modeling performance of automated feature engineering with Featuretools, but we can use Dask to carry out our computations in parallel and get results quicker. Moreover, we can use the same methods to scale to larger datasets, leaving us well-situated for whatever machine learning problems come our way.

* * *

If building meaningful, high-performance predictive models is something you care about, then get in touch with us at [Feature Labs](https://www.featurelabs.com/contact/). While this project was completed with the open-source Featuretools, the [commercial product](https://www.featurelabs.com/product) offers additional tools and support for creating machine learning solutions.

***

As always, I welcome feedback and constructive criticism. I can be reached on Twitter or through my personal website [willk.online](https://willk.online)