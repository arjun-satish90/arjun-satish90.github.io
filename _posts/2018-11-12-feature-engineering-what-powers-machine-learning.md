---
published: true
title: "Feature Engineering: What Powers Machine Learning"
date: 2018-11-12
categories:
  - Feature Labs
  - machine learning
  - feature engineering
---
* * *

![](https://cdn-images-1.medium.com/max/2000/1*K6ctE0RZme0cqMtknrxq8A.png)

## How to Extract Features from Raw Data for Machine Learning

This is the third in a four-part series on how we approach machine learning at Feature Labs. The complete set of articles is:

1.  [Overview: A General-Purpose Framework for Machine Learning](https://medium.com/@williamkoehrsen/how-to-create-value-with-machine-learning-eb09585b332e)
2.  [Prediction Engineering: How to Set Up Your Machine Learning Problem](https://medium.com/@williamkoehrsen/prediction-engineering-how-to-set-up-your-machine-learning-problem-b3b8f622683b)
3.  Feature Engineering (this article)
4.  [Modeling: Teaching an Algorithm to Make Predictions](https://medium.com/@williamkoehrsen/modeling-teaching-a-machine-learning-algorithm-to-deliver-business-value-ad0205ca4c86)

These articles cover the concepts and a full implementation as applied to predicting customer churn. The project [Jupyter Notebooks are all available on GitHub](https://github.com/Featuretools/predicting-customer-churn/tree/master/churn). (Full disclosure: I work for [Feature Labs](https://www.featurelabs.com/), a startup developing tooling, including [Featuretools](https://github.com/Featuretools/featuretools), for solving problems with machine learning. All of the work documented here was completed with open-source tools and data.)

* * *

### Feature Engineering

It’s often said that “[data is the fuel of machine learning](https://www.salon.com/2018/11/04/why-data-is-the-new-oil-what-we-mean-when-we-talk-about-deep-learning/).” This isn’t quite true: data is like the _crude oil_ of machine learning which means it has to be refined into _features _— predictor variables — to be useful for training a model. Without relevant features, you can’t train an accurate model, no matter how complex the machine learning algorithm. The process of extracting features from a raw dataset is called [_feature engineering_](https://en.wikipedia.org/wiki/Feature_engineering)_.

<!--more-->

#### The Feature Engineering Process

Feature engineering, the second step in the [machine learning pipeline](https://towardsdatascience.com/how-to-create-value-with-machine-learning-eb09585b332e), takes in the [label times from the first step](https://towardsdatascience.com/prediction-engineering-how-to-set-up-your-machine-learning-problem-b3b8f622683b)— prediction engineering — and a raw dataset that needs to be refined. Feature engineering means building features for each label while _filtering the data used for the feature based on the label’s cutoff time_ to make valid features. These features and labels are then passed to modeling where they will be used for training a machine learning algorithm.

![](https://cdn-images-1.medium.com/max/2000/0*W8UQXa0By4zNHChY)
*The process of feature engineering.*

While feature engineering requires label times, in [our general-purpose framework](https://towardsdatascience.com/how-to-create-value-with-machine-learning-eb09585b332e), it is _not hard-coded_ for specific labels corresponding to only one prediction problem. If we wrote our feature engineering code for a single problem — as feature engineering is traditionally approached — then we would have to redo this laborious step every time the parameters change.

Instead, we use APIs like [Featuretools](https://github.com/Featuretools/featuretools) that can build features for _any set of labels without requiring changes to the code._ This means for the customer churn dataset, we can solve multiple prediction problems — predicting churn every month, every other week, or with a lead time of two rather than one month — using the exact same feature engineering code.

> This fits with the principles of our machine learning approach: we **_segment_** each step of the pipeline while standardizing inputs and outputs. This independence means we can change the problem in prediction engineering without needing to alter the downstream feature engineering and machine learning code.

The key to making this step of the machine learning process repeatable across prediction problems is _automated feature engineering_.

* * *

### Automated Feature Engineering: Build Better Predictive Models Faster

Traditionally, [feature engineering is done by hand](https://www.kaggle.com/willkoehrsen/introduction-to-manual-feature-engineering), building features one at a time using domain knowledge. However, this manual process is _error-prone, tedious, must be started from scratch for each dataset_, and ultimately is _limited by constraints on human creativity_ and _time_. Furthermore, in time-dependent problems where we have to filter every feature based on a cutoff time, it’s hard to avoid errors that can [invalidate an entire machine learning solution](https://machinelearningmastery.com/data-leakage-machine-learning/).

[Automated feature engineering](https://towardsdatascience.com/automated-feature-engineering-in-python-99baf11cc219) overcomes these problems through a reusable approach to automatically building hundreds of relevant features from a relational dataset. Moreover, this method [filters the features for each label based on the cutoff time](https://docs.featuretools.com/automated_feature_engineering/handling_time.html), creating a rich set of valid features. In short, automated feature engineering enables data scientists to **build better predictive models in a fraction of the time.**

![](https://cdn-images-1.medium.com/max/2000/1*s68vgToQvQaHpFE7p95xfQ.png)
*Manual vs Automated Feature Engineering Pipelines.*

#### Motivation for Automated Feature Engineering

After solving a few problems with machine learning, it becomes clear that [many of the operations used to build features are repeated across datasets](https://www.featurelabs.com/blog/deep-feature-synthesis/). For instance, we often find the weekday of an event — be it a transaction or a flight— and then find the average transaction amount or flight delay by day of the week for each customer or airline. Once we realize that these operations _don’t depend on the underlying data_, why not **abstract** this process into a framework that can build features for any relational dataset?

This is the idea behind automated feature engineering. We can apply the same basic building blocks — called [feature primitives](https://docs.featuretools.com/automated_feature_engineering/primitives.html) — to different relational datasets to build predictor variables. As a concrete example, the “max” feature primitive applied to customer transactions can also be applied to flight delays. In the former case, this will find the _largest transaction for each customer_, and in the latter, the _longest flight delay for a given flight number_.

![](https://cdn-images-1.medium.com/max/2000/0*xNv_hc81-IeL3MyA)
*[Source: How Deep Feature Synthesis Works](https://www.featurelabs.com/blog/deep-feature-synthesis/)*

This is an embodiment of the [idea of abstraction](https://en.wikipedia.org/wiki/Abstraction_%28computer_science%29): remove the need to deal with the details — writing specific code for each dataset — by building higher level tools that take advantage of operations common to many problems.

> Ultimately, [automated feature engineering makes us more efficient](https://towardsdatascience.com/why-automated-feature-engineering-will-change-the-way-you-do-machine-learning-5c15bf188b96) as data scientists by removing the need to repeat tedious operations across problems.

* * *

### Implementation of Feature Engineering

Currently, the only open-source Python library for automated feature engineering using multiple tables is [Featuretools](https://github.com/Featuretools/featuretools), developed and maintained by [Feature Labs](https://www.featurelabs.com). For the customer churn problem, we can use Featuretools to quickly build features for the label times that we created in prediction engineering. (Full code available in this [Jupyter Notebook](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/3.%20Feature%20Engineering.ipynb)).

We have three tables of [data](https://www.kaggle.com/c/kkbox-churn-prediction-challenge/data): customer background info, transactions, and user listening logs. If we were using manual feature engineering, we’d brainstorm and build features by hand, such as _the average value of a customer’s transactions_, or her _total spending on weekends in the previous year_. For each feature, we’d first have to filter the data to _before the cutoff time_ for the label. In contrast, in our framework, we make use of Featuretools to automatically build hundreds of relevant features in a few lines of code.

We won’t go through the details of Featuretools, but the heart of the library is an algorithm called [Deep Feature Synthesis](https://www.featurelabs.com/blog/deep-feature-synthesis/) which stacks the feature engineering building blocks known as [primitives](https://docs.featuretools.com/automated_feature_engineering/primitives.html#) (simple operations like “max” or finding the “weekday” of a transaction) to build “deep features”. The library also automatically filters data for features based on the cutoff time.

For more on automated feature engineering in Featuretools see:

*   [Automated Feature Engineering in Python](https://towardsdatascience.com/automated-feature-engineering-in-python-99baf11cc219)
*   Featuretools [documentation](https://docs.featuretools.com/) and [GitHub](https://github.com/Featuretools/featuretools)

* * *

Featuretools requires some background code to [link together the tables through relationships](https://docs.featuretools.com/loading_data/using_entitysets.html), but then we can automatically make features for customer churn using the following code (see [notebook for complete details](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/3.%20Feature%20Engineering.ipynb)):

<script width="700" height="250" src="https://gist.github.com/WillKoehrsen/0197ac32c28fa045bb9c7de92c75cc46.js" allowfullscreen="" frameborder="0"></script>

_This one line of code gives us over 200 features for each label_ in `cutoff_times`. Each feature is a combination of feature primitives and is built with _only data from before the associated cutoff time._

![](https://cdn-images-1.medium.com/max/2000/1*xB0Y-0TrSCJcDq1YcrwSbA.png)
*Sample of features from Featuretools automated feature engineering.*

The features built by Featuretools are explainable in _natural language_ because they are built up from basic operations. For example, we see the feature `AVG_TIME_BETWEEN(transactions.transaction_date)`. This represents the average time between transactions for each customer. When we plot this colored by the label we see that customers who churned appear to have a slightly longer average time between transactions.

![](https://cdn-images-1.medium.com/max/1600/1*I0l4Pa2tyYTZHmNhoRm2TA.png)
*Distribution of time between transactions colored by the label.*

* * *

In addition to getting hundreds of valid, relevant features, developing an automated feature engineering pipeline in Featuretools means we can _use the same code for different prediction problems_ with our dataset. We just need to pass in the correct label times to the `cutoff_times` parameter and we’ll be able to build features for a different prediction problem.

> Automated feature engineering means we can solve multiple problems in the time it would normally take to complete just one. A change in parameters means tweaking a few lines of code instead of implementing an entirely new solution.

To solve a different problem, rather than rewrite the entire pipeline, we:

1.  Tweak the prediction engineering code to create new label times
2.  Input the label times to feature engineering and output features
3.  Use the features to train and a supervised machine learning model

(As a brief note: the feature engineering code can be run in parallel using either Dask or Spark with PySpark. For the latter approach, see [this notebook](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/4.%20Feature%20Engineering%20on%20Spark.ipynb) or [this article](https://medium.com/feature-labs-engineering/featuretools-on-spark-e5aa67eaf807) on the Feature Labs engineering blog.)

* * *

#### Next Steps

Just as the label times from prediction engineering flowed into feature engineering, the features serve as inputs to the next stage, modeling: training an algorithm to predict the label from the features. [In the final article in this series](https://medium.com/@williamkoehrsen/modeling-teaching-a-machine-learning-algorithm-to-deliver-business-value-ad0205ca4c86), we’ll look at how to train, tune, validate, and predict with a machine learning model to solve the customer churn problem.

As a preview, pictured is the tuned precision-recall curve from machine learning. (Full notebook [available on GitHub.](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/5.%20Modeling.ipynb))

![](https://cdn-images-1.medium.com/max/1600/1*7Fns1F6xvVlY8JyAlYamNw.png)
*Precision Recall Curve for Machine Learning*

* * *

### Conclusions

Feature engineering has tended to be a tedious aspect of solving problems with machine learning and a source of errors preventing solutions from being successfully implemented. By using automated feature engineering in a general-purpose machine learning framework we:

*   **Automatically build hundreds of features for any relational dataset**
*   **Create only valid features by filtering data on cutoff times**

Furthermore, the _feature engineering code is not hard-coded for the inputs from prediction engineering_ which means _we can use the same exact code to make features for multiple prediction problems_. Applying automated feature engineering in a structured framework we are able to turn feature engineering from a painful process into a quick, reusable procedure allowing us to solve many valuable machine learning problems.

* * *

If building meaningful, high-performance predictive models is something you care about, then get in touch with us at [Feature Labs](https://www.featurelabs.com/contact/). While this project was completed with the open-source Featuretools, the [commercial product](https://www.featurelabs.com/product) offers additional tools and support for creating machine learning solutions.
