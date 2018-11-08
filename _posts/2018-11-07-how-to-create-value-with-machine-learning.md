* * *

![](https://cdn-images-1.medium.com/max/2000/1*3U7P2LcWYLC8xdZ42VFQYw.png)

# How to Create Value with Machine Learning

## A General-Purpose Framework for Defining and Solving Meaningful Problems in 3 Steps

Imagine the following scenario: your boss asks you to build a machine learning model to predict every month which customers of your subscription service will churn during the month with churn defined as no active membership for more than 31 days. You painstakingly make labels by finding historical examples of churn, brainstorm and engineer features by hand, then train and manually tune a machine learning model to make predictions.

Pleased with the metrics on the holdout testing set, you return to your boss with the results, only to be told now you must develop a _different_ solution: one that makes predictions every two weeks with churn defined as 14 days of inactivity. Dismayed, you realize none of your previous work can be reused because it was designed for a single prediction problem.

You wrote a labeling function for a narrow definition of churn and the downstream steps in the pipeline — feature engineering and modeling — were also dependent on the initial parameters and will have to be redone. Due to hard-coding a specific set of values, you’ll have to build an entirely _new pipeline_ to address for what is only a small _change in problem definition_.

* * *

#### Structuring the Machine Learning Process

This situation is indicative of how solving problems with machine learning is currently approached. The process is _ad-hoc_ and requires a _custom solution_ for each parameter set even when using the same data. The result is companies miss out on the full benefits of machine learning because they are limited to solving a small number of problems with a time-intensive approach.

> A lack of **_standardized methodology_** means there is no scaffolding for solving problems with machine learning that can be quickly adapted and deployed as parameters to a problem change.

How can we improve this process? Making machine learning more accessible will require a general-purpose framework for setting up and solving problems. This framework should _accommodate existing tools_, be rapidly _adaptable to changing parameters_, _applicable across different industries_, and provide _enough structure_ to give data scientists a clear path for laying out and working through meaningful problems with machine learning.

At [Feature Labs](https://www.featurelabs.com), we’ve put a lot of thought into this issue and developed what we think is a better way to solve useful problems with machine learning. In the next three parts of this series, I’ll lay out how we approach framing and building machine learning solutions in a structured, repeatable manner built around the steps of _prediction engineering_, _feature engineering_, and _modeling_.

We’ll walk through the approach as applied in full to one use case — predicting customer churn — and see how we can adapt the solution if the parameters of the problem change. Moreover, we’ll be able to utilize existing tools — [Pandas](http://pandas.pydata.org/), [Scikit-Learn](http://scikit-learn.org/), [Featuretools](https://www.featuretools.com/) — commonly used for machine learning.

The general machine learning framework is outlined below:

1.  **Prediction Engineering:** State the business need, translate into a machine learning problem, and generate labeled examples from a dataset
2.  **Feature Engineering:** Extract predictor variables — features — from the raw data for each of the labels
3.  **Modeling:** Train a machine learning model on the features, tune for the business need, and validate predictions before deploying to new data

![](https://cdn-images-1.medium.com/max/2000/0*2URnrRp5Gp-oAwJD)_A general-purpose framework for defining and solving meaningful problems with machine learning_

We’ll walk through the basics of each step as well as how to implement them in code. The complete project is available as [Jupyter Notebooks on GitHub](https://github.com/Featuretools/predicting-customer-churn). (Full disclosure: I work for Feature Labs, a startup developing tooling, including [Featuretools](https://github.com/Featuretools/featuretools), for solving problems with machine learning. All of the work documented here was completed with open-source tools and data.)

Although this project discusses only one application, the same process can be applied across industries to build useful machine learning solutions. The end deliverable is a framework you can use to solve problems with machine learning in any field, and a specific solution that could be directly applied to your own customer churn dataset.

* * *

### Business Motivation: Make Sure You Solve the Right Problem

The most sophisticated machine learning pipeline will have no impact unless it creates value for a company. Therefore, the first step in framing a machine learning task is understanding the business requirement so you can determine the right problem to solve. Throughout this series, we’ll work through the common problem of addressing _customer churn_.

For subscription-based business models, predicting which customers will churn — stop paying for a service for a specified period of time — is crucial. Accurately predicting if and when customers will churn lets businesses engage with those who are at risk for unsubscribing or offer them reduced rates as an incentive to maintain a subscription. An effective churn prediction model allows a company to be _proactive_ in growing the customer base.

For the customer churn problem the business need is:

> increase the number of paying subscribers by reducing customer churn rates.

Traditional methods of reducing customer churn require forecasting which customers would churn with [survival-analysis techniques](https://towardsdatascience.com/survival-analysis-in-python-a-model-for-customer-churn-e737c5242822), but, given the abundance of historical customer behavior data, this presents an [ideal application of supervised machine learning](https://www.sciencedirect.com/science/article/pii/S1569190X15000386).

> We can address the business problem with machine learning by building a supervised algorithm that learns from past data to predict customer churn.

Stating the business goal and expressing it in terms of a machine learning-solvable task is the critical first step in the pipeline. Once we know what we want to have the model predict, we can move on to using the available data to develop and solve a supervised machine learning problem.

### Next Steps

Over the next three articles, we’ll apply the prediction engineering, feature engineering, and modeling framework to solve the customer churn problem on a [dataset](https://www.kaggle.com/c/kkbox-churn-prediction-challenge/data) from [KKBOX](https://www.kkbox.com/intl/index.php?area=intl), Asia’s largest subscription music streaming service.

Look for the following posts (or check out the [GitHub repository](https://github.com/Featuretools/predicting-customer-churn)):

1.  [Prediction Engineering: How to Set Up Your Machine Learning Problem](https://medium.com/@williamkoehrsen/prediction-engineering-how-to-set-up-your-machine-learning-problem-b3b8f622683b)
2.  Feature Engineering: What Powers Machine Learning (coming soon)
3.  Modeling: Training an Algorithm to Make Predictions (coming soon)

We’ll see how to fill in the details with existing data science tools and how to change the prediction problem without rewriting the complete pipeline. By the end, we’ll have an effective model for predicting churn that is tuned to satisfy the business requirement.

![](https://cdn-images-1.medium.com/max/1600/1*7Fns1F6xvVlY8JyAlYamNw.png)Precision-recall curve for model tuned to business need.

Through these articles, we’ll see an approach to machine learning that lets us rapidly build solutions for multiple prediction problems. The next time your boss changes the problem parameters, you’ll be able to have a new solution up and running with only a few lines of changes to the code.

* * *

If building meaningful, high-performance predictive models is something you care about, then get in touch with us at [Feature Labs](https://www.featurelabs.com/contact/). While this project was completed with the [open-source Featuretools](https://github.com/Featuretools), the [commercial product](https://www.featurelabs.com/product) offers additional tools and support for creating machine learning solutions.
