---
published: true
title: "Thoughts On The Two Cultures Of Statistical Modeling"
date: 2019-07-17
categories:
  - statictics
  - modeling
  - thoughts
---
![](https://miro.medium.com/max/2000/1*eQ6K5MUVFiDg_bSN6xn1Ng.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/background-beautiful-blossom-calm-waters-268533/?)*

## Accuracy beats interpretability and other takeaways from “Statistical Modeling: The Two Cultures” by Leo Breiman

In the paper: [“Statistical Modeling: The Two Cultures”](http://www2.math.uu.se/~thulin/mm/breiman.pdf?), [Leo Breiman](https://scholar.google.com/citations?user=mXSv_1UAAAAJ&hl=en&) — developer of the [random forest](https://www.stat.berkeley.edu/~breiman/randomforest2001.pdf?) as well as [bagging](https://www.stat.berkeley.edu/~breiman/bagging.pdf?) and [boosted](https://pdfs.semanticscholar.org/814c/f172298d11db0ac9b839440ed8f3db93e438.pdf?) ensembles — describes two contrasting approaches to modeling in statistics:

1.  **Data Modeling:** choose a simple (linear) model based on intuition about the data-generating mechanism. Emphasis is on model interpretability and validation, if done at all, is done through goodness-of-fit.
2.  **Algorithmic Modeling:** choose the model with the highest predictive validation accuracy with no consideration for model explainability.

At the time of writing in 2001, Breiman estimated 98% of statisticians were in the data modeling group while 2% (himself included) were in the algorithmic modeling culture. The paper is written as a call to arms for statisticians to stop relying solely on data modeling — which leads to “misleading conclusions” and “irrelevant theory” — and embrace algorithmic modeling to solve novel real-world problems arising from massive data sets. Breiman was an academic, working as a statistician at Berkely for 21 years, but he had previously worked for 13 years as a freelance consultant giving him a well-formed perspective on how statistics can be useful in industry.

<!--more-->

Breiman was frustrated because he knew data models were not up to solving new challenges from large-scale data collection and he felt academic statistics was becoming irrelevant by refusing to adopt new tools: complex algorithms with high predictive performance but low explainability. While machine learning and statistics have changed in the 18 years since the paper (I don’t know if the 98/2 split still holds), several interesting points brought up are still relevant to practicing machine learning today particularly for those making the transition from academia to industry. Among the takeaways are:

1.  **Models with different features often yield similar predictive accuracy.**
2.  **There is a trade-off in machine learning between model interpretability and performance.**
3.  **More features can improve the performance of complex algorithmic models.**
4.  **Science evolves from simple models to complex models as we gather more information about the world.**

The overall lesson from the paper is in line with what I’ve learned applying machine learning in industry (at [Cortex Building Intelligence](https://cortexintel.com/?)): **focus first on model accuracy, and only after building a high-performance model think about explaining it.** A highly-complex, accurate model that can’t be fully explained is more valuable than a simple, linear model with no predictive accuracy that we completely understand.

Following are some of my thoughts on Breiman’s paper. Keep in mind, these are based on much less experience — 1 year in an academic setting (2018) and just over 1 year in industry (2018-present) — than Breiman was writing with. I’d recommend [reading the article](http://www2.math.uu.se/~thulin/mm/breiman.pdf?) (and the criticism it includes) to form your own opinions. Feel free to add comments or experiences about the paper or associated topics in machine learning to this article. Although machine learning may seem to be moving incredibly quickly, _there is still valuable information to learn from older papers and books_, especially those written by a figure such as Breiman, who played a pivotal role in shaping the field.

* * *

# The Two Approaches to Statistical Modeling

Before we can discuss what makes a good model, we have to understand the 2 goals of [modeling](https://www.ibm.com/support/knowledgecenter/en/SS3RA7_17.0.0/clementine/nodes_statisticalmodels.html?):

1.  **Prediction:** estimate the outcome (target) from a new set of independent variables (features)
2.  **Information:** learn something about nature (the data-generating) process

The exact balance of these two objectives is situationally dependent: if you’re trying to predict stocks, you might only care if the model is accurate. In a medical setting, learning about the causes of a disease may be the main focus of building a model. Breiman makes the case that the algorithmic approach actually has the upper hand over the data modeling approach for both goals.

## Data Modeling

A researcher using a data modeling approach (Breiman considers data models to be linear regression for regression and discriminant analysis or logistic regression for classification) first constructs a plausible mechanism for how the data is generated. That is, the researcher thinks up a linear equation relating the independent variables (features) to the dependent variables (target) from intuition, experience, or domain knowledge.

The coefficients in the model (feature weights) are found by fitting it to the dataset. The resulting linear equation represents the actual data-generating mechanism — the black box through which nature produces the dependent and independent variable values. The coefficients are used as a measure of variable importance, showing the effect of a feature on the response.

Validation, if it occurs at all, in data modeling is done by goodness-of-fit measures such as R² or residual analysis — both measured on the training dataset. Little thought is given to predictive accuracy. Instead, the emphasis is on how well the model explains the phenomenon under study. If the p-values on the coefficients are low enough, then they are “significant” and the model “becomes truth” in Breiman’s words with any conclusions made from the model infallible. The whole process is guided by intuition and subjective decisions: instead of letting the data speak, the researchers impose their own personal theories through choices such as which features to use and which data points to throw out as outliers.

Breiman quotes a textbook by Mosteller and Tukey to summarize his disappointment with data modeling: “The whole area of guided regression is fraught with intellectual, statistical, computational, and subject matter difficulties.” In other words, data modeling with simple linear models and intuition is not an objective way to learn from data. Yet, this is the approach taken by 98% of academic statisticians according to Breiman! It’s no wonder he was frustrated with his own field.

## Algorithmic Modeling

The algorithmic modeling approach revolves around one concern: what is the performance of a model on the validation data? For choosing a model, there is no consideration for whether the model represents the underlying mechanism generating the data, only on whether the model can make reliable estimates on new (or hold-out) observations. Breiman credits the rise of the algorithmic culture to the invention of new algorithms such as the random forest (his own work), support vector machine, and neural nets. These are all models that — at least at the time — were not well-understood theoretically, but yielded extraordinary predictive accuracy, particularly on large datasets.

A central idea in the algorithmic community is that nature is a black-box, and our models are also a [black box](https://datascience.stackexchange.com/questions/22335/why-are-machine-learning-models-called-black-boxes?), although one that can give us predictions on new observations. There is little use trying to explain a model that is not accurate, so concentrate primarily on building the model with the greatest performance before focusing on learning anything about nature from it. An accurate model, no matter how complex, is more useful for both prediction (clearly) and for information gathering, because a simple, interpretable model with low accuracy is not capturing anything useful about the problem.

The algorithmic culture did not grow out of academic statistics, but rather from “young computer scientists, physicists, and engineers plus a few aging statisticians.” In other words, people who weren’t afraid to adopt or even invent new techniques for solving novel problems. These were the practitioners rather than the theorists, and they were using neural nets and random forests to solve problems across domains from medicine to genomics to stock markets to astronomy.

From his time as a consultant, Breiman saw the value of algorithmic modeling, adopting the best tool to solve the problem. He came to see computers as an invaluable tool because of their ability to apply complex techniques to large quantities of data. Upon returning to academia, he was disappointed by the reliance on data models and the lack of emphasis on predictive accuracy. Even if your primary goal is to extract information about nature through modeling, the first priority should be accuracy. A complex, accurate model can teach us about the problem domain because it must have captured some part of the relationship between features and target. Additionally, the algorithmic modeling community has made several interesting discoveries simply through solving problems.

* * *

## 1\. The Multiplicity of Models: many models with different sets of features have nearly the same predictive accuracy

The first few models I built on the job, I was troubled by a recurring pattern. I was trying to select the “best” features by measuring validation scores, but, every time I would try a different subset, the overall validation score would stay nearly the same. This was puzzling but occurred repeatedly: varying the features and even trying different values for hyperparameters yielded similar performance. Breiman says that this is nothing to be worried about: for most problems, when using complex models, there are many features and hyperparameters that give roughly the same performance. In other words, the idea of a single best model is a fiction so we shouldn’t worry about finding it.

While this shouldn’t be a concern for algorithmic models, it raises unsettling questions for anyone relying on data models. Because simple linear models cannot deal well with many features, they require extensive feature selection, usually by a combination of intuition and formal methods. The mapping from features to targets created by choosing the features and calculating coefficients through fitting is assumed to represent ground truth, the data-generating process. However, if there are actually many sets of features that will give the same performance, then how can just one be the ultimate source of truth? In reality, there are many equally good models, so choosing only one is not accurately representing the problem.

What causes the multiplicity of models? My own experience from building models tells me it’s due to correlated features (two variables are positively correlated when they increase or decrease together). Although linear regression assumes input variables are independent, in real-world datasets, almost all features have some degree of correlation, often quite high. Thus, one feature can substitute for another in a model with no drop in accuracy. Building a single data model and calling it the source of truth misses all the other models that would perform just as well. Algorithmic modelers shouldn’t worry about selecting features: just give them all to your random forest and let it figure out which ones matter. After training, recognize that the fit model is only one possible representation of the mapping from features to targets.

* * *

## 2\. The Machine Learning Trade-off: simplicity and accuracy

This is one area where the paper (again from 2001) shows its age. Breiman makes the common claim that the more complex machine learning models are completely unexplainable (particularly random forests and neural networks). When choosing a model, he says that we always have to trade interpretability for increased accuracy. However, the past few years have seen major strides in explaining complex models, particularly [SHAP values](https://github.com/slundberg/shap/tree/master/shap?) and [Local Interpretable Model-Agnostic Explanations (LIME)](https://github.com/marcotcr/lime?). These operate on the general principle of building a complex model, then explaining a small part of it (local) using a simpler model such as linear regression.

(For a class on interpretable machine learning, see [Machine Learning Explainability from Kaggle](https://www.kaggle.com/learn/machine-learning-explainability?)).

These model-interpretation techniques can work with any model, from random forests to neural networks and provide reasonable interpretations of individual model predictions. At Cortex, we use SHAP values to explain our estimates for the ideal time for buildings to start their HVAC (heating or air conditioning). We have seen high adoption of our recommendations, in part from these easy to understand explanations.

Breiman’s concerns about lack of explainability were valid, but, just as new algorithms were invented to handle larger datasets, new techniques were developed to peer into complex black-box machine learning models. It was a matter of the algorithms being developed much faster than interpretations. This makes sense — we needed to make sure the algorithms were accurate before trying to explain them. There is little purpose in explaining the predictions of an inaccurate model. Now that model interpretation techniques have caught up with the algorithms, we can have both reasoning behind predictions and high predictive accuracy.

While we are on the point of explanation, we should mention that humans are terrible at explaining their decisions. We do give reasons for individual choices, but there is no way these encompass the full combination of environment, genetics, situation, emotions, neurotransmitters, etc. that actually influence decisions. When we ask someone why they were late to work and they tell us “because I took a different subway route”, we accept that and usually stop the questioning there. We fail to dig into the reasoning or ask detailed follow-ups, which would lead to more follow-ups. We would need to know someone’s entire life history to explain fully even one choice they made, so clearly we don’t get complete explanations from humans.

I’ve found that people want any explanation, no matter how flimsy, rather than no explanation. Even if it’s a [tautology](https://en.wikipedia.org/wiki/Tautology_(language)?) (boys will be boys) or [circular reasoning](https://en.wikipedia.org/wiki/Circular_reasoning?) (I made many spelling mistakes because my spelling is poor) people will accept any sort of justification. In contrast to human reasons, the SHAP values output by a machine learning model are more comprehensive, showing the exact weight assigned to each variable associated with a single prediction. At this point, I would prefer the numbers from these model explanation techniques than the misleading justifications given by humans.

Instead of worrying about model explainability, perhaps we should be dealing with the much more difficult problem of figuring out human decision making! We have made more progress in interpreting machine learning output than in figuring out the complex web of influences behind an individual’s particular actions. (I’m being a little light-hearted. I think [model interpretation](https://christophm.github.io/interpretable-ml-book/?) is one of the most promising areas in machine learning and am excited about new tools for explaining machine learning to non-technical audiences. My main point is we’ve come a long way towards explaining models since the paper.)

* * *

**3\. With algorithmic models, more features can benefit performance**

In graduate data science modeling classes, my professors spent a large amount of time on feature selection using techniques like the [variance inflation factor](https://www.statisticshowto.datasciencecentral.com/variance-inflation-factor/?) or [mutual information](https://en.wikipedia.org/wiki/Mutual_information?). In the lab, I saw plenty of feature selection, almost always guided by intuition rather than standardized procedures. The reason might have been sound: linear models tend to not deal with many features well because they don’t have enough capacity to model all the information from the features — but the methods used were often subjective resulting in models more human-driven than data-driven.

By comparison, algorithmic models can gain from more features. Breiman points out that more variables mean more information and an effective model should be able to pick out the signal from the noise. ML methods like the random forest can provide accurate predictions with many features, even when the number of variables exceeds the number of data points, as often occurs in genomic datasets. Rather than expending time trying to intuit the important features to leave in, we can give algorithmic models all the features and let it figure out the ones most relevant to the task. Furthermore, we might actually want to create _additional features_, engineering them from the existing variables, to help the model extract even more information.

Intuition has no place in algoritmic modeling culture unlike in data models where it might inform the features that go into the model. If we really want to learn from the data, then we have to trust in the data instead of our subjective opinions. Algorithmic modeling does not require us to perform any arbitrary feature selection: instead, we leave in all the features, or even add more, and get better performance with less effort.

* * *

## 4\. Science Proceeds from Simple to Complex

The final main point actually comes in Breiman’s response to criticism (see below), but it’s a crucial one. As our knowledge of the world advances, we need ever more complicated models for prediction and learning information.

Early models of the universe placed Earth at the center then shifted to the Sun at the center before settling on our current view, where the Milky Way is only one of billions of galaxies in an enormous (possibly infinite) universe. [At each step, the model became more complicated](http://www.thestargarden.co.uk/Heliocentric-models-of-the-Solar-System.html?) as we collected more information that did not fit existing models. Newton’s Laws of Gravitation worked pretty well for hundreds of years until further observations revealed their limitations. Now, we need Einstein’s Theories of Relativity (both special and general) to ensure that our satellites don’t fall out of the sky and so our GPS system remains accurate.

As other fields have developed more complex models to deal with new difficulties (the [model of the atom](https://www.compoundchem.com/2016/10/13/atomicmodels/?) is another example), statistics should abandon old, linear models when they have outlived their usefulness. Data models worked well for a small subset of problems, but the challenges we face in data science are now much larger. The techniques used to solve them should correspondingly expand. If the rest of science is moving towards greater [complexity](https://en.wikipedia.org/wiki/Complexity?), why should we assume statistics can continue to operate with the simplest of models? There are a lot of exciting problems developing and solving them requires using whatever tool is most appropriate, or even inventing [new techniques](https://en.wikipedia.org/wiki/Artificial_neural_network?) for novel obstacles.

* * *

# Criticisms

In the best scientific tradition, Breiman includes a substantial amount of criticism from 4 statisticians as an addendum to the paper and then responds to the feedback. It’s worth reading through the criticism and observing the back and forth (civil) arguments. Science advances through open discussion because no single person has all the right answers. It’s through an iterative process of proposing an idea, subjecting it to criticism, improving the idea in response, gathering more data, and opening the floor to more discussion that science has [achieved great success](https://www.isbglasgow.com/10-greatest-scientific-discoveries-and-inventions-of-21st-century/?). Following is some of the pushback.

## 1\. Simple models are still useful

This is a point Breiman willingly concedes: in some situations, a linear model might be appropriate. For example, if we were modeling distance as a function of rate, then this is a linear relationship: distance = rate * time. However, few phenomena in nature follow such a nice mechanism (even the example above almost never holds in the real world.) Linear models can work in the case of very small datasets with very few features, but quickly become obsolete when working on newer problems in areas such as astronomy, climate change, stock market forecasting, natural language processing, etc. where the datasets are large and contain thousands or more variables.

The algorithmic culture is not about abandoning data models, it’s using the most appropriate model in any situation. If a linear model records the highest predictive accuracy on a dataset, then it’s selected. Breiman’s point is more along the lines that we should not assume ahead of time which is the correct model. Algorithmic modeling is an all-the-above approach to modeling.

## 2\. Overfitting to the validation data

Overfitting is a fundamental issue in machine learning: parameters are always learned on some dataset, which is not indicative of all data for the problem. By choosing a model with the best validation score, we might be inadvertently choosing a model that generalizes poorly to future data. This is not a problem unique to algorithmic models (although it may be easier to overfit with a more complex model since it has more free parameters to train).

The solution is not to go backwards to simpler models, but to use more robust validation. I prefer cross-validation, using multiple training/testing subsets so the performance is not biased by one random selection. The model may still be overfitting (this should be called the Kaggle effect because it occurs with literally every competition) but a robust validation setup should give a decent indication of performance on new data. It’s also critical to monitor the ongoing performance of the model in production. Periodically checking that the model accuracy has not degraded will allow you to catch model or data drift. Once this occurs, you need to build a new model, gather additional data, or start over on the problem. Overfitting is a serious problem, but it can be tackled with the right approach.

## 3\. Feature Importance

Much of Breiman’s arguments about extracting information from a complex model relies on the idea of feature importance. This is not defined in the actual paper, but it is addressed in Breiman’s response to the criticism. His definition rests on accuracy. _The importance of a feature is measured by the question: does including the feature in the model improve performance?_

Traditionally, variable importance was determined from the coefficients of a linear model. However, we’ve already seen that multiple features can yield the same performance, so using the learned weights as a measure of importance does not capture any single ground truth.

The area of variable importance is still not solved. There are problems when variables are collinear (highly correlated) because the feature importance might be split between the features. There is not yet a satisfactory method to determine which variables are the most important, but an accuracy-based approach is less subjective than a weights-based approach. SHAP values also provide a per-prediction measure of variable importance, letting us see the exact impact of each feature value from an observation on the output. Predictive feature importance may not be the “true” relevance of a feature in nature, but it can give us relative comparisons between variables.

## 4\. Goal of Modeling

Some of the statisticians take aim at the idea that the goal of modeling is prediction, arguing for placing greater emphasis on information gathering. My response is a model that has no predictive accuracy cannot provide any useful information about the problem. It might provide model weights, but if they don’t lead to accurate predictions, why would we try to learn anything from them? Instead, we should focus on accuracy first — so we know our model has learned something useful — then try to figure out how the model operates. A model must be accurate to give us useful information!

There is little point in trying to understand a linear model that cannot outperform a simple no-machine learning baseline. Aim for accuracy, then spend as much time as your domain requires on interpreting the model. It is much better to have an accurate model with no explanation than a model that produces nonsense but presents a clear explanation.

* * *

# Conclusions

This paper would have been useful for me moving from an academic data science environment to industry. Initially, I spent a lot of time trying to understand the theory behind models or solve problems through intuition rather than aiming for accuracy and letting the data decide the model. Eventually, I learned the most important point of this paper through experience: focus on accuracy first and then explanation. A model must have high predictive performance before it’s worth using for knowledge extraction.

What this means in practice (particularly for those in industry) is simple: concentrate on setting up a robust validation scheme and find the model that performs the best. Don’t spend too much time worrying about the theory behind the model until you know it works. Furthermore, experience has shown that many models can produce the same accuracy with different sets of features, additional features can improve the performance of complex algorithms, and there is a balance between model interpretability and accuracy, although new techniques have largely closed the gap.

We all want explanations when we see a prediction or decision. However, we must admit when our knowledge and brains limit us: we simply cannot process the amount of data now facing us and we have to rely on machines to do most of the reasoning for us. Machine learning is a tool used to solve problems with data and we should use the best tools possible. Statistics is an old field, but that does not mean it has to remain stuck in the past: by adopting the latest algorithms, statisticians, even those in academia, can solve challenging new problems arising in modeling.

* * *

As always, I welcome any feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will](http://twitter.com/@koehrsen_will?).
