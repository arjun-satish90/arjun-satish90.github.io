---
published: true
title: "Why Automated Feature Engineering Will Change the Way You Do Machine\_Learning"
categories:
  - feature engineering
  - machine learning
---
![](https://cdn-images-1.medium.com/max/2000/1*kFW26Zy7Fuze197LSOl4Iw.jpeg)

## Automated feature engineering will save you time, build better predictive models, create meaningful features, and prevent data leakage

There are few certainties in data science — libraries, tools, and algorithms constantly change as better methods are developed. However, one trend that is not going away is the move towards _increased levels of automation._

Recent years have seen progress in [automating model selection](https://epistasislab.github.io/tpot/api/) and [hyperparameter tuning](https://github.com/automl), but the [most important aspect](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf) of the machine learning pipeline, feature engineering, has largely been neglected. The most capable entry in this critical field is [Featuretools](https://docs.featuretools.com/#minute-quick-start), an open-source Python library. In this article, we’ll use this library to see how automated feature engineering will change the way you do machine learning for the better.

![](https://cdn-images-1.medium.com/max/1600/1*ER9NQ7QQ36WNgEoHSaDduQ.png)
*Featuretools is an open-source Python library for automated feature engineering.*

Automated feature engineering is a relatively new technique, but, after using it to solve a number of data science problems using real-world data sets, I’m convinced it should be a _standard_ part of any machine learning workflow. Here we’ll take a look at the results and conclusions from two of these projects with the full [code available as Jupyter Notebooks on GitHub](https://github.com/Featuretools/Automated-Manual-Comparison).

Each project highlights some of the benefits of automated feature engineering:

*   **Loan Repayment Prediction:** automated feature engineering can reduce machine learning development time by 10x compared to manual feature engineering while delivering better modeling performance. ([Notebooks](https://github.com/Featuretools/Automated-Manual-Comparison/tree/master/Loan%20Repayment))
*   **Retail Spending Prediction:** automated feature engineering creates meaningful features and prevents data leakage by internally handling time-series filters, enabling successful model deployment. ([Notebooks](https://github.com/Featuretools/Automated-Manual-Comparison/tree/master/Retail%20Spending))

Feel free to dig into the code and try out Featuretools! (Full disclosure: I work for [Feature Labs](https://www.featurelabs.com/), the company developing the library. These projects were completed with the free, open-source version of Featuretools).

<!--more-->

* * *

#### Feature Engineering: Manual vs. Automated

[Feature engineering](https://en.wikipedia.org/wiki/Feature_engineering) is the process of taking a dataset and constructing explanatory variables — features — that can be used to train a machine learning model for a prediction problem. Often, data is spread across multiple tables and must be gathered into a single table with rows containing the observations and features in the columns.

The traditional approach to feature engineering is to build features one at a time using domain knowledge, a tedious, time-consuming, and error-prone process known as manual feature engineering. The code for manual feature engineering is _problem-dependent_ and _must be re-written for each new dataset._

Automated feature engineering improves upon this standard workflow by automatically extracting _useful and meaningful_ features from a set of related data tables with a framework that can be applied _to any problem._ It not only cuts down on the time spent feature engineering, but creates interpretable features and prevents data leakage by filtering time-dependent data.

> Automated feature engineering is more efficient and repeatable than manual feature engineering allowing you to build better predictive models faster.

* * *

### Loan Repayment: Build Better Models Faster

The primary difficulty facing a data scientist approaching the Home Credit Loan problem (a [machine learning competition currently running on Kaggle](https://www.kaggle.com/c/home-credit-default-risk) where the objective is to predict if a loan will be repaid by a client) is the size and spread of the data. Take a look at the complete dataset and you are confronted with _58 million_ rows of data spread across seven tables. Machine learning requires a single table for training, so feature engineering means consolidating all the information about each client in one table.

![](https://cdn-images-1.medium.com/max/2000/1*aEY3yRu-N4YJNDE6Pi0LRA.png)
*Feature engineering requires capturing all information from a set of related tables into one table.*

My first attempt at the problem used traditional manual feature engineering: I spent a total of **10 hours** creating a set of features by hand. First I read [other data scientist’s work](https://www.kaggle.com/c/home-credit-default-risk/kernels), explored the data, and researched the problem area in order to acquire the necessary domain knowledge. Then I translated the knowledge into code, building one feature at a time. As an example of a single manual feature, I found the total number of late payments a client had on previous loans, an operation that required using 3 different tables.

The final manual engineered features performed quite well, achieving a 65% improvement over the baseline features (relative to the top leaderboard score), indicating the [importance of proper feature engineering](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf).

However, inefficient does not even begin to describe this process. For manual feature engineering, I ended up spending over 15 minutes per feature because I used the traditional approach of making a single feature at a time.

![](https://cdn-images-1.medium.com/max/2000/1*DoNn5kB0I1BTEjhO2D3yOA.png)
*The Manual Feature Engineering process.*

Besides being tedious and time-consuming, manual feature engineering is:

*   **Problem-specific:** all of the code I wrote over many hours cannot be applied to _any other problem_
*   **Error-prone:** each line of code is another opportunity to make a mistake

Furthermore, the final manual engineered features are limited both by **human creativity** and **patience**: there are only so many features we can think to build and only so much time we have to make them.

> The promise of automated feature engineering is to surpass these limitations by taking a set of related tables and automatically building hundreds of useful features using code that can be applied across all problems.

#### From Manual to Automated Feature Engineering

As implemented in Featuretools, automated feature engineering allows even a domain novice such as myself to create thousands of relevant features from a set of related data tables. All we need to know is the basic structure of our tables and the relationships between them which we track in a single data structure called an [entity set](https://docs.featuretools.com/generated/featuretools.EntitySet.html). Once we have an entity set, using a method called [Deep Feature Synthesis](https://www.featurelabs.com/blog/deep-feature-synthesis/) (DFS), we’re able to build thousands of features in _one function call_.

![](https://cdn-images-1.medium.com/max/2000/1*j378-FXFsLyb7vsNOhcQOA.png)
*The Automated Feature Engineering process using Featuretools.*

DFS works using functions called [“primitives”](https://docs.featuretools.com/automated_feature_engineering/primitives.html) to aggregate and transform our data. These primitives can be as simple as taking a mean or a max of a column, or they can be complex and based on subject expertise because [Featuretools allows us to define our own custom primitives](https://docs.featuretools.com/guides/advanced_custom_primitives.html).

Feature primitives include many operations we already would do manually by hand, but with Featuretools, instead of re-writing the code to apply these operations on different datasets, we can use the _same exact_ syntax across any relational database. Moreover, the power of DFS comes when we stack primitives on each other to create deep features. (For more on DFS, take a look at [this blog post](https://www.featurelabs.com/blog/deep-feature-synthesis/) by one of the inventors of the technique.)

> Deep Feature Synthesis is flexible — allowing it to be applied to any data science problem — and powerful — revealing insights in our data by creating deep features.

I’ll spare you the few lines of code needed for the set-up, but the action of DFS happens in a single line. Here we make _thousands of features_ for each client using all 7 tables in our dataset ( `ft` is the imported featuretools library) :

    # Deep feature synthesis
    feature_matrix, features = ft.dfs(entityset=es, 
                                      target_entity='clients',
                                      agg_primitives = agg_primitives,
                                      trans_primitives = trans_primitives)
                                    
<center>Deep Feature Synthesis Code</center>

Below are some of the **1820 features** we automatically get from Featuretools:

*   The maximum total amount paid on previous loans by a client. This is created using a `MAX` and a `SUM` primitive across 3 tables.
*   The percentile ranking of a client in terms of average previous credit card debt. This uses a `PERCENTILE` and `MEAN` primitive across 2 tables.
*   Whether or not a client turned in two documents during the application process. This uses a `AND` transform primitive and 1 table.

Each of these features is built using simple aggregations and hence is human-interpretable. Featuretools created many of the same features I did manually, but also thousands I never would have conceived — or had the time to implement. Not every single feature will be relevant to the problem, and some of the features are highly correlated, nonetheless, having _too many features is a better problem than having too few_!

After a little feature selection and model optimization, these features did slightly better in a predictive model compared to the manual features with an overall development time of **1 hour**, a 10x reduction compared to the manual process. Featuretools is much faster both because it requires less domain knowledge and because there are considerably fewer lines of code to write.

I’ll admit that there is a slight time cost to learning Featuretools but it’s an investment that will pay off. After taking an hour or so to learn Featuretools, you can apply it _to any machine learning_ problem.

The following graphs sum up my experience for the loan repayment problem:

Time | Features | Performance
:-:  | :-:      | :-:
![](https://cdn-images-1.medium.com/max/800/1*wRb-oxJyAg_pD--pH6Knlg.png)| ![](https://cdn-images-1.medium.com/max/800/1*6B-QTXQZgeuf_YWrCCxMpw.png)| ![](https://cdn-images-1.medium.com/max/800/1*nuRuzRMYJno7W8WckHT32A.png)

*   Development time: accounts for everything required to make the final feature engineering code: **10 hours manual vs 1 hour automated**
*   Number of features produced by the method: **30 features manual vs 1820 automated**
*   Improvement relative to baseline is the % gain over the baseline compared to the top public leaderboard score using a model trained on the features: **65% manual vs 66% automated**

> My takeaway is that automated feature engineering will not replace the data scientist, but rather by significantly increasing efficiency, it will free her to spend more time on other aspects of the machine learning pipeline.

Furthermore, the Featuretools code I wrote for this first project could be applied to any dataset while the manual engineering code would have to be thrown away and entirely rewritten for the next dataset!

* * *

### Retail Spending: Build Meaningful Features and Prevent Data Leakage

For the second dataset, a [record of online time-stamped customer transactions](https://archive.ics.uci.edu/ml/datasets/online+retail#), the prediction problem is to classify customers into two segments, those who will spend more than $500 in the next month and those who won’t. However, instead of using a single month for all the labels, each customer is a label _multiple times_. We can use their spending in May as a label, then in June, and so on.

![](https://cdn-images-1.medium.com/max/1600/1*wVzNbqJ5JHSqjf8x0uCzxw.png)Each customer is used as a training example multiple times

Using each customer multiple times as an observation brings up difficulties for creating training data: when making features for a customer for a given month, we can’t use any information from months in the future, _even though we have access to this data_. In a deployment, we’ll _never have future data_ and therefore can’t use it for training a model. Companies routinely struggle with this issue and often deploy a model that does much worse in the real world than in development because it was trained using invalid data.

Fortunately, ensuring that our data is valid in a time-series problem is [straightforward in Featuretools.](https://docs.featuretools.com/automated_feature_engineering/handling_time.html) In the Deep Feature Synthesis function we pass in a dataframe like that shown above, where the cutoff time represents the point past which we can’t use any data for the label, and Featuretools _automatically_ takes the time into account when building features.

The features for a customer in a given month are built using data filtered to before the month. Notice that the call to create our set of features is the same as that for the loan repayment problem with the addition of `cutoff_time.`

	# Deep feature synthesis
    feature_matrix, features = ft.dfs(entityset=es, 
                                      target_entity='customers',
                                      agg_primitives = agg_primitives,
                                      trans_primitives = trans_primitives,
                                      cutoff_time = cutoff_times)
<center>Deep Feature Synthesis with Cutoff Times Code</center>

The result of running Deep Feature Synthesis is a table of features, one for each customer _for each month_. We can use these features to train a model with our labels and then make predictions for any month. Moreover, we can rest assured that the features in our model do not use future information, which would result in an unfair advantage and yield misleading training scores.

With the automated features, I was able to build a machine learning model that achieved 0.90 ROC AUC compared to an informed baseline (guessing the same level of spending as the previous month) of 0.69 when predicting customer spending categories for one month.

In addition to delivering impressive predictive performance, the Featuretools implementation gave me something equally valuable: interpretable features. Take a look at the 15 most important features from a random forest model:

![](https://cdn-images-1.medium.com/max/2000/1*4FLqyRQrCKK4fZ-ISNhAyg.png)
*15 most important Featuretools features from a random forest model.*

The feature importances tell us that the most important predictors of how much the customer will spend in the next month is how much they have spent previously `SUM(purchases.total)` , and the number of purchases, `SUM(purchases.quantity).`These are features that we could have built by hand, but then we would have to worry about leaking data and creating a model that does much better in development than in deployment.

If the tool already exists for creating meaningful features without any need to worry about the validity of our features, then why do the implementation by hand? Furthermore, the automated features are completely clear in the context of the problem and can inform our real-world reasoning.

> Automated feature engineering identified the most important signals, achieving the primary goal of data science: reveal insights hidden in mountains of data.

* * *

Even after spending significantly more time on manual feature engineering than I did with Featuretools, I was not able to develop a set of features with close to the same performance. The graph below shows the ROC curves for classifying one month of future customer sales using a model trained on the two datasets. A curve to the left and top indicates better predictions:

![](https://cdn-images-1.medium.com/max/2000/1*hwh1sOK9_GcKRYA4pg9vEA.png)
*ROC curves comparing automated and manual feature engineering results. A curve to the left and top indicates better performance.*

I’m not even completely sure if the manual features were made using valid data, but with the Featuretools implementation, I didn’t have to worry about data leakage in time-dependent problems. Maybe this inability to manually engineer a useful set of valid features speaks to my failings as a data scientist, but if the tool exists to safely do this for us, why not use it?

> We use automatic safety systems in our day-to-day life and automated feature engineering in Featuretools is the secure method to build meaningful machine learning features in a time-series problem while delivering superior predictive performance.

* * *

### Conclusions

I came away from these projects convinced that automated feature engineering should be an _integral part of the machine learning workflow_. The technology is not perfect yet still delivers significant gains in efficiency.

The main conclusions are that automated feature engineering:

*   **Reduced implementation time** by up to 10x
*   Achieved modeling **performance at the same level** **or better**
*   Delivered **interpretable features** with real-world significance
*   **Prevented improper data usage** that would invalidate a model
*   **Fit into existing workflows** and machine learning models

> “Work smarter, not harder” may be a cliche, but sometimes there is truth to platitudes: if there is a way to do the same job with the same performance for a smaller time investment, then clearly it’s a method worth learning.

[Featuretools](https://www.featuretools.com/) will always be free to use and open-source (contributions are welcome), and there are several examples — [here’s an article I’ve written](https://towardsdatascience.com/automated-feature-engineering-in-python-99baf11cc219) — to get you started in 10 minutes. Your job as a data scientist is safe, but it can be made significantly easier with automated feature engineering.

* * *

If building meaningful, high-performance predictive models is something you care about, then get in touch with us at [Feature Labs](https://www.featurelabs.com/contact/). While this project was completed with the open-source Featuretools, the [commercial product](https://www.featurelabs.com/product) offers additional tools and support for creating machine learning solutions.

***** 

As always, I welcome feedback and constructive criticism. I can be reached on Twitter or through my personal website [willk.online](https://willk.online).
