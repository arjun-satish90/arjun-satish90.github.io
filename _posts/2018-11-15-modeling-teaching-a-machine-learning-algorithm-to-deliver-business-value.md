* * *

![](https://cdn-images-1.medium.com/max/2000/1*jcXeBFzKpV-GZ0auYf1n0A.png)

# Modeling: Teaching a Machine Learning Algorithm to Deliver Business Value

## How to train, tune, and validate a machine learning model

This is the fourth in a four-part series on how we approach machine learning at [Feature Labs](https://www.featurelabs.com). The complete set of articles can be found below:

1.  [Overview: A General-Purpose Framework for Machine Learning](https://medium.com/@williamkoehrsen/how-to-create-value-with-machine-learning-eb09585b332e)
2.  [Prediction Engineering: How to Set Up Your Machine Learning Problem](https://medium.com/@williamkoehrsen/prediction-engineering-how-to-set-up-your-machine-learning-problem-b3b8f622683b)
3.  [Feature Engineering: What Powers Machine Learning](https://towardsdatascience.com/feature-engineering-what-powers-machine-learning-93ab191bcc2d)
4.  Modeling: Teaching an Algorithm (this article)

These articles cover the concepts and a full implementation as applied to predicting customer churn. The project [Jupyter Notebooks are all available on GitHub](https://github.com/Featuretools/predicting-customer-churn/tree/master/churn). (Full disclosure: I work for [Feature Labs](https://www.featurelabs.com), a startup developing tooling, including [Featuretools](https://github.com/Featuretools/featuretools), for solving problems with machine learning. All of the work documented here was completed with open-source tools and data.)

* * *

### The Machine Learning Modeling Process

The outputs of [prediction](https://medium.com/@williamkoehrsen/prediction-engineering-how-to-set-up-your-machine-learning-problem-b3b8f622683b) and [feature engineering](https://towardsdatascience.com/feature-engineering-what-powers-machine-learning-93ab191bcc2d) are a set of _label times_, historical examples of what we want to predict, and _features_, predictor variables used to train a model to predict the label. The process of modeling means training a machine learning algorithm to predict the labels from the features, tuning it for the business need, and validating it on holdout data.

![](https://cdn-images-1.medium.com/max/2000/1*bFwr7NuvMWxhnFoi2fB2vQ.png)Inputs and outputs of the modeling process.

The output from modeling is a trained model that can be used for _inference_, making predictions on new data points.

> The objective of machine learning is not a model that does well on training data, but one that demonstrates it _satisfies the business need_ and can be deployed on live data.

Similar to feature engineering, modeling is _independent_ of the previous steps in the machine learning process and has _standardized inputs_ which means we can alter the prediction problem without needing to rewrite all our code. If the business requirements change, we can generate new label times, build corresponding features, and input them into the model.

* * *

### Implementation of Modeling for Customer Churn

In this series, we are using machine learning to solve the customer churn problem. There are several ways to formulate the task, but our definition is:

> Predict on the first of each month which customers will churn during the month. Use a lead time of one month and churn is 31 days with no subscription. With a lead time of 1 month, this means we make predictions 1 month in advance: on January 1, we make predictions of churn during the month of February.

* * *

Although machine learning algorithms may sound technically complex, implementing them in Python is simple thanks to standard machine learning libraries like [Scikit-Learn](http://sklearn.org). As a bit of practical advice, empirical results have shown that the [choice of machine learning model and hyperparameters matters](https://psb.stanford.edu/psb-online/proceedings/psb18/olson.pdf), but not [as much as feature engineering](https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf).

> Therefore, the rational decision is to put most of the effort into prediction and feature engineering, and insert a pre-built solution for machine learning.

In this project, I went with Scikit-Learn to rapidly implement a few models. To get the data ready for machine learning, we have to take some basic steps: missing value imputation, encoding of categorical variables, and optionally feature selection if the input dimension is too large (see [notebook for full details](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/5.%20Modeling.ipynb)). Then, we can create a model with standard modeling syntax:

<iframe width="700" height="250" src="/media/a752f57279bd6afdf8c92a95aa524e56?postId=ad0205ca4c86" data-media-id="a752f57279bd6afdf8c92a95aa524e56" allowfullscreen="" frameborder="0"></iframe>

#### Metrics and Baseline Results

Before applying machine learning, it’s best to establish a _naive baseline_ to determine if machine learning is actually helping. With a classification problem, this can be as simple as guessing the majority label in the training data for all examples in the hold-out testing data. For the customer churn data, guessing every test label is not a churn yields an **_accuracy_** _of 96.5%._

This high accuracy may sound impressive, but for an imbalanced classification problem — where one class is represented more than another — accuracy is not an adequate metric. Instead, we want to use _recall, precision,_ or the _F1 score._

Recall represents the percentage of actual churns in the data that our model identifies with the naive guess recording 3.5%. Precision measures the percentage of churns _predicted_ by our model that _actually_ were churns, with a naive score of 1.0%. The F1 score is the harmonic mean of these measures.

Since this is a classification problem, for a machine learning baseline I tried a _logistic regression_ which did not perform well. This indicates the problem is likely non-linear, so my second attempt used a Random Forest Classifier with better results. The [random forest](https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf) is quick to train, relatively interpretable, highly accurate and is usually a solid model choice.

The metrics for no machine learning, logistic regression, and the random forest with default hyperparameters are shown below:

![](https://cdn-images-1.medium.com/max/1600/1*WVFuKZjtHdMmDoXLTk4ixA.png)Metrics recorded by baseline models

Each model was evaluated using about 30% of the data for holdout testing based on a _time-series split_. (This is crucial when evaluating a model in a time-series problem because it prevents training data leakage and should provide a good estimate of the actual model performance on new data.)

* * *

### Aligning the Model with the Business Requirement

Even though the metrics for the ml models are better than with no machine learning, we want to optimize a model for a given metric(s) in line with the business need. In this example, we’ll focus on recall and precision. We will _tune_ the model to achieve a certain recall by adjusting the _threshold,_ the probability above which an observation is classified as positive — a churn.

* * *

#### Precision and Recall Tuning

There is a fundamental [tradeoff in machine learning between recall and precision](http://docs.statwing.com/the-confusion-matrix-and-the-precision-recall-tradeoff/), which means we can increase one only at the cost of decreasing the other. For example, if we want to find every instance of churn — a recall of 100% — then we would have to accept a low precision — many false positives. Conversely, if we limit the false positives by increasing the precision, then we will identify fewer of the actual churns lowering the recall.

The balance between these two is altered by adjusting the model’s threshold. We can visualize this in the model’s [_precision-recall curve_](https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-classification-in-python/).

![](https://cdn-images-1.medium.com/max/1600/0*0d9SWjGfTqeijFV-)Precision-recall curve tuned for 75% recall.

This shows the _precision versus the recall for different values of the threshold_. The default threshold in Scikit-Learn is 0.5, but depending on the business needs, we can adjust this to achieve desired performance.

For customer churn we’ll tune the threshold to achieve a recall of 75%. By inspecting the predicted probabilities (the actual values), we determine the threshold should be 0.39 to hit this mark. **At a threshold of 0.39, our recall is 75% and our precision is 8.31%.**

_Choosing the recall or precision lies in the business domain._ It requires determining which is more costly, _false positives_ — predicting a customer will churn when in fact they will not — or _false negatives_ — predicting a customer will not churn when in fact they will — and adjusting appropriately.

A recall of 75% was chosen as an example optimization but this can be changed. At this value, compared to the naive baseline, we have achieved a **20x improvement** in recall and an **8x improvement** in precision.

* * *

### Model Validation

Once we have selected the threshold for classifying a churn, we can plot the [confusion matrix](https://machinelearningmastery.com/confusion-matrix-machine-learning/) from the holdout testing set to examine the predictions.

![](https://cdn-images-1.medium.com/max/1600/0*aWLJRC8Tr932gJr4)Confusion Matrix for Tuned Random Forest

At this threshold, we identify more than half the churns (75%) although with a significant number of false positives (upper right). Depending on the relative cost of false negatives vs false positives, our model might not actually be an improvement!

> To make sure our model has solved the problem, we need to use the holdout results to calculate the return from implementing the model.

* * *

### Validating Business Value

Using the model’s metrics on the hold-out testing set as an estimate of performance on new data, we can calculate the value of deploying this model _before deploying it_. Using the historical data, we first calculate the _typical revenue lost to churn_ and then the _reduced amount of revenue lost_ to churn with a model that achieves 75% recall and 8% precision.

Making a few assumptions about customer conversions (see [notebook](https://github.com/Featuretools/predicting-customer-churn/blob/master/churn/5.%20Modeling.ipynb) for details) we arrive at the following conclusion:

**Machine learning increases the number of active monthly subscribers and recoups 13.5% of the monthly losses from customer churns.**

Considering a subscription cost, this represents $130,000 (USD) per month.

> With these numbers, we conclude that machine learning has solved the business need of increasing monthly subscribers and delivered a positive solution.

As a final piece of model interpretation, we can look at the most important features to get a sense of the variables most relevant to the problem. The 10 most important variables from the random forest model are shown below:

![](https://cdn-images-1.medium.com/max/2000/0*KEdWgKypUNEjwspJ)Most important features from random forest model.

The most important variables agree with our intuition for the problem. For instance, the most important feature is the _total spending in the month before the cutoff time_. Because we are using a lead time of 1 month, this represents the spending _two months prior to the month of prediction_. The more customers spent in this period, the less likely they were to churn. We also see top features like the _average time between transactions_ or _method of payment id_, which could be important to monitor for our business.

* * *

#### Making Predictions and Deployment

With our machine learning pipeline complete and the model validated, we are ready to make predictions of future customer churn. We don’t have live data for this project, but if we did, we could make predictions like the following:

![](https://cdn-images-1.medium.com/max/1600/1*oPFPMPmVW_7H1PkoIcitjw.png)Predictions for new data based on threshold.

These predictions and feature importances can go to the customer engagement team where they will do the hard work of retaining members.

In addition to making predictions each time we get new data, we’ll want to _continue to_ [_validate_](https://docs.aws.amazon.com/machine-learning/latest/dg/evaluating_models.html) _our solution once it has been deployed_. This means comparing model predictions to actual outcomes and looking at the data to check for [concept drift](https://en.wikipedia.org/wiki/Concept_drift). If performance decreases below the level of providing value, we can gather and train on more data, change the prediction problem, optimize the model settings, or adjust the tuned threshold.

* * *

#### Modeling Notes

_As with prediction and feature engineering, the modeling stage is adaptable to new prediction problems and uses common tools in data science._ Each step in the machine learning framework we use is segmented, meaning we are able to implement solutions to numerous problems without needing to rewrite all the code. Moreover, the [API](https://en.wikipedia.org/wiki/Application_programming_interface)s — [Pandas](http://pandas.pydata.org), [Featuretools](https://featuretools.com), and [Scikit-Learn](http://sklearn.org) — are user-friendly, have great documentation, and abstract away the tedious details.

* * *

### Conclusions for the Machine Learning Process

The future of machine learning lies not in _one-off solutions_ but in a [_general-purpose framework_](https://medium.com/@williamkoehrsen/how-to-create-value-with-machine-learning-eb09585b332e) allowing data scientists to rapidly develop solutions for all the problems they face. This scaffolding functions in much the same way as website templates: each time we build a website, we don’t start from scratch, we use an existing template and fill in the details.

> The same methodology should apply to solving problems with machine learning: instead of building a new solution for each problem, adapt an existing scaffolding and fill in the details with user-friendly tooling.

In this series of articles, we walked through the concepts and use of a general-purpose framework for solving real-world machine learning problems.

The process is summarized in three steps:

1.  **Prediction Engineering:** Define a business need, translate the need into a supervised machine learning problem, and create labeled examples
2.  **Feature Engineering:** Use label times and raw historical data to build predictor variables for each label
3.  **Modeling:** Train, tune for the business need, validate the value of solution, and make predictions with a machine learning algorithm

![](https://cdn-images-1.medium.com/max/2000/1*YG3gQZk9xUG-LySaXZGFjA.png)A general purpose framework for solving problems with machine learning.

While machine learning is not a sacred art available only to a select few, it has remained out of the reach of many organizations because of the lack of standardized processes. The objective of this framework is to make machine learning solutions easier to **develop and deploy,** which will allow more organizations to see the benefits of leveraging this powerful technology.

* * *

If building meaningful, high-performance predictive models is something you care about, then get in touch with us at [Feature Labs](https://www.featurelabs.com/contact/). While this project was completed with the open-source Featuretools, the [commercial product](https://www.featurelabs.com/product) offers additional tools and support for creating machine learning solutions.
