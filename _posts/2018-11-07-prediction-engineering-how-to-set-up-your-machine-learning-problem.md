* * *

![](https://cdn-images-1.medium.com/max/2000/1*P_UAY9ZJHZMF7S1sq_0t8w.png)

# Prediction Engineering: How to Set Up Your Machine Learning Problem

## An explanation and implementation of the first step in solving problems with machine learning

This is the second in a four-part series on how we approach machine learning at [Feature Labs](https://www.featurelabs.com). The other articles can be found below:

1.  [Overview: A General-Purpose Framework for Machine Learning](https://medium.com/@williamkoehrsen/how-to-create-value-with-machine-learning-eb09585b332e)
2.  Feature Engineering: What Powers Machine Learning (coming soon)
3.  Modeling: Teaching an Algorithm to Make Predictions (coming soon)

These articles will cover the concepts and a full implementation as applied to predicting customer churn. The project [Jupyter Notebooks are all available on GitHub](https://github.com/Featuretools/predicting-customer-churn/tree/master/churn). (Full disclosure: I work for Feature Labs, a startup developing tooling, including [Featuretools](https://github.com/Featuretools/featuretools), for solving problems with machine learning. All of the work documented here was completed with open-source tools and data.)

* * *

When working with real-world data on a machine learning task, _we define the problem,_ which means _we have to develop our own labels —_historical examples of what we want to predict — to train a supervised model. The idea of making our own labels may initially seem foreign to data scientists (myself included) who got started on Kaggle competitions or textbook datasets where the answers are already included.

The concept behind prediction engineering — making labels to train a supervised machine learning model — is not new. However, it currently is not a standardized process and is done by data scientists on an _as-needed basis_. This means that for each new problem — even with the same dataset — a new script must be developed to accomplish this task resulting in solutions that cannot be adapted to different prediction problems.

A better solution is to write functions that are flexible to changing business parameters, allowing us to quickly generate labels for many problems. This is one area where data science can learn [from software engineering](https://www.cs.utexas.edu/~mitra/csSummer2014/cs312/lectures/bestPractices.html): solutions should be reusable and accept changing inputs. In this article, we’ll see how to implement a reusable approach to the first step in solving problems with machine learning — prediction engineering.

* * *

#### The Process of Prediction Engineering

Prediction engineering requires guidance both from the business viewpoint to figure out the right problem to solve as well as from the data scientist to determine how to translate the business need into a machine learning problem. The inputs to prediction engineering are the _parameters_ which define the prediction problem for the business requirement , and the _historical dataset_ for finding examples of what we want to predict.

![](https://cdn-images-1.medium.com/max/2000/0*2o7xf1t3PJKuvwbu)Process of prediction engineering.

The output of prediction engineering is a _label times_ table: a set of labels with negative and positive examples made from past data along with an associated _cutoff time_ indicating when we have to stop using data to make features for that label (more on this shortly).

For our use case we’ll work through in this series — customer churn — we defined the business problem as increasing monthly active subscribers by reducing rates of churn. The machine learning problem is building a model to predict which customers will churn using historical data. The first step in this task is making a set of labels of past examples of customer churn.

The parameters for what constitutes a churn and how often we want to make predictions will vary depending on the business need, but in this example, let’s say we want to make predictions on the first of each month for which customers will churn one month out from the time of prediction. Churn will be defined as going more than 31 days without an active membership.

> It’s important to remember this is only one definition of churn corresponding to one business problem. When we write functions to make labels, they should take in parameters so they can be quickly changed to different prediction problems.

Our goal for prediction engineering is a label times table as follows:

![](https://cdn-images-1.medium.com/max/1600/0*QbjuCcl5F5AD0a40)Example of label times table

The labels correspond to whether a customer churned or not based on historical data. Each customer is used as a training example multiple times because they have multiple months of data. Even if we didn’t use customers many times, because this is a _time-dependent_ problem, we have to correctly implement the concept of _cutoff times._

#### Cutoff Times: How to Ensure Your Features are Valid

The labels are not complete without the _cutoff time_ which represents _when we have to stop using data to make features for a label_. Since we are making predictions about customer churn on the first of each month, we _can’t use any data after the first_ to make features for that label. Our cutoff times are therefore all on the first of the month as shown in the label times table above.

All the features for each label must use data from before this time to prevent the [problem of data leakage](https://machinelearningmastery.com/data-leakage-machine-learning/). Cutoff times are a crucial part of building successful solutions to time-series problems that many companies do not account for. Using invalid data to make features leads to models that do well in development but fail in deployment.

Imagine we did not limit our features to data that occurred before the first of the month for each label. Our model would figure out that customers who had a paid transaction _during the month could not have churned in that month_ and would thus record high metrics. However, when it came time to deploy the model and make predictions for a future month, _we do not have access to the future transactions_ and our model would perform poorly. It’s like a student who does great on homework because she has the answer key but then is lost on the test without the same information.

* * *

#### Dataset for Customer Churn

Now that we have the concepts, let’s work go through the details. [KKBOX](https://www.kkbox.com/) is Asia’s leading music streaming service offering both a free and a pay-per-month subscription option to over 10 million members. KKBOX has made available a [dataset](https://www.kaggle.com/c/kkbox-music-recommendation-challenge/data) for predicting customer churn. There are 3 data tables coming in at just over 30 GB that are represented by the schema below:

![](https://cdn-images-1.medium.com/max/1600/1*30DPomKK-OusQqrZ6d_d4g.png)Relational diagram of [data](https://www.kaggle.com/c/kkbox-music-recommendation-challenge/data).

The three tables consist of:

*   customers: Background information such as age and city ( msno is the customer id):

![](https://cdn-images-1.medium.com/max/1600/0*NEMHLorkAHXsWF9M)

*   transactions: Transaction data for each payment for each customer:

![](https://cdn-images-1.medium.com/max/1600/0*s7d_Jy9K5q-wf6mu)

*   activity logs: Logs of customer listening behavior:

![](https://cdn-images-1.medium.com/max/1600/0*ONGyVXrlMv68mUB7)

This is a typical dataset for a subscription business and is an example of structured, [relational data](https://en.wikipedia.org/wiki/Relational_database): observations in the rows, features in the columns, and tables tied together by primary and foreign keys: the customer id.

* * *

### Finding Historical Labels

The key to making prediction engineering adaptable to different problems is to follow a repeatable process for extracting training labels from a dataset. At a high-level this is outlined as follows:

1.  Define positive and negative labels in terms of key business parameters
2.  Search through past data for positive and negative examples
3.  Make a table of cutoff times and associate each cutoff time with a label

For customer churn, the parameters are the

*   _prediction date_ (cutoff time): the point at which we make a prediction and when we stop using data to make features for the label
*   _number of days_ without a subscription before a user is considered a churn
*   _lead time_: the number of days or months in the future we want to predict
*   _prediction window_: the period of time we want to make predictions for

The following diagram shows each of these concepts while filling in the details with the problem definition we’ll work through.

![](https://cdn-images-1.medium.com/max/2000/1*_1L27dwJfDmIy9BcW3WjSg.png)Parameters defining the customer churn prediction problem.

In this case, the customer has churned during the month of January as they went without a subscription for more than 30 days. Because our lead time is one month and the prediction window is also one month, the label of churn is associated with the cutoff time of December 1\. For this problem, we are thus teaching our model to predict customer churn _one month in advance_ to give the customer satisfaction team sufficient time to engage with customers.

* * *

For a given dataset, there are **numerous prediction problems** we can make from it. We might want to predict churn at different dates or frequencies, such as every two weeks, with a lead time of two months, or define churn as a shorter duration without an active membership. Moreover, there are other problems unrelated to churn we could solve with this dataset: predict how many songs a customer will listen to in the next month; predict the rate of growth of the customer base; or, segment customers into different groups based on listening habits to tailor a more personal experience.

When we develop the functions for creating labels, we make our inputs parameters so we can quickly make _multiple sets of labels from the dataset_.

> If we develop a pipeline that has parameters instead of hard-coded values, we can rapidly adopt it to different problems. When we want to change the definition of a churn, all we need to do is alter the parameter input to our pipeline and re-run it.

#### Labeling Implementation

To make labels, we develop 2 functions (full code in [the notebook](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/2.%20Prediction%20Engineering.ipynb)):

<pre name="8460" id="8460" class="graf graf--pre graf-after--p">label_customer(customer_transactions, prediction_date = "first of month", days_to_churn = 31, lead_time = "1 month", prediction_window = "1 month")

</pre>

<pre name="03f3" id="03f3" class="graf graf--pre graf-after--pre">make_labels(all_transactions, prediction_date = "first of month", days_to_churn = 31, lead_time = "1 month", prediction_window = "1 month")</pre>

The `label_customer` function takes in a customer’s transactions and the specified parameters and returns a label times table. This table has a set of prediction times — the cutoff times — and the label during the prediction window for each cutoff time corresponding to a single customer.

As an example, our labels for a customer look like the following:

![](https://cdn-images-1.medium.com/max/1600/0*pc8fb1ucXB3fHeUx)Label times for one customer.

The `make_labels` function then takes in the transactions for all customers along with the parameters and returns a table with the cutoff times and the label for every customer.

When implemented correctly, the end outcome of prediction engineering is a function which can create label times for multiple prediction problems by changing input parameters. These labels times — a cutoff time and associated label — are the input to the next stage in which we make features for each label. The next article will document this step, but for those who want a head-start, the [Jupyter Notebook](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/3.%20Feature%20Engineering.ipynb) is already available!

* * *

### Conclusion

We haven’t invented the process of prediction engineering, just given it a name and defined a reusable approach for this first part in the pipeline.

The process of prediction engineering is captured in three steps:

1.  Identify a business need that can be solved with available data
2.  Translate the business need into a supervised machine learning problem
3.  Create label times from historical data

Getting prediction engineering right is crucial and requires input from both the business and data science sides of a business. By writing the code for prediction engineering to accept different parameters, we can rapidly change the prediction problem if the needs of our company change.

More generally, our approach to solving problems with machine learning segments the different parts of the pipeline while standardizing each input and output. The end result, as we’ll see, is we can quickly change the prediction problem in the prediction engineering stage without needing to rewrite the subsequent steps. In this article, we’ve developed the first step in a framework that can be used to solve many problems with machine learning.

* * *

If building meaningful, high-performance predictive models is something you care about, then get in touch with us at [Feature Labs](https://www.featurelabs.com/contact/). While this project was completed with the open-source Featuretools, the [commercial product](https://www.featurelabs.com/product) offers additional tools and support for creating machine learning solutions.
