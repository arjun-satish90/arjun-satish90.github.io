---
published: true
title: "Unintended Consequences And Goodharts Law"
date: 2018-02-24
categories:
  - statistics
  - learning
---

![](https://miro.medium.com/max/2000/0*FiLILoR04sj-kcUS.?q=20)

## The importance of using the right metrics

In order to increase revenue, the manager of a customer service call center starts a new policy: rather than being paid an hourly wage, every employee is compensated solely based on the number of calls they make. After the first week, the experiment seems like a resounding success: the call center is processing twice the number of calls per day! The manager, who never bothers to listen to his employees’ conversations as long as their numbers are good, is quite pleased. However, when the boss stops by, she insists on going out to the floor and when she does so, both she and the manager are shocked by what they hear: the employees pick up the phone, issue a series of one word answers, and slam the phone down without waiting for a good-bye. No wonder the number of completed calls has doubled! Without intending to, by judging performance only by the volume of calls, the manager has incentivized employees to value speed over courtesy. Unknowingly, he has fallen for the phenomenon known as Goodhart’s Law.

[Goodhart’s Law](https://en.wikipedia.org/wiki/Goodhart%27s_law?) is expressed simply as: “When a measure becomes a target, it ceases to be a good measure.” In other words, when we set one specific goal, people will tend to optimize for that objective regardless of the consequences. This leads to problems when other equally important aspects of a situation are neglected. Our call center manager thought that increasing the number of calls processed was a good objective, and his employees dutifully strove to increase their numbers. However by choosing only one metric to measure success, he motivated employees to sacrifice courtesy in the name of quantity. People respond to incentives, and our natural inclination is to maximize the standards by which we are judged.

![](https://miro.medium.com/max/2000/0*u1dfHFPj2LZ41cAL.jpg?q=20)
*Goodhart’s Law Explained ([Source](http://www.sketchplanations.com/post/167369765942/goodharts-law-when-a-measure-becomes-a-target?))*

<!--more-->

Once we are aware of Goodhart’s Law, we can its effect in many areas of our lives. In school, we are given one objective: maximize our grade. This focus on one number can be detrimental to actual learning. High school seemed like one long series of memorizing content for a test, then promptly forgetting it all so I could stuff my brain full of info for the next one, without any consideration of whether I really knew the concepts. This strategy worked quite well given how success was measured in school, but I doubt it is the best approach for a great education. Another area in which we see the detrimental effects of Goodhart’s Law is in the academic world where there is an emphasis on publishing as indicated by the phrase [“publish or perish.”](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3999612/?) Publishing is often dependent on achieving a positive result in a study, which leads to the technique known as [“p-hacking”](http://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002106&) where researchers [manipulate or subset experimental results](https://projects.fivethirtyeight.com/p-hacking/?) to achieve statistical significance. Both memorizing rather than learning content and p-hacking are unintended consequences that arise when a single number is used to gauge success.

From a data science perspective, the application of Goodhart’s Law is that it reminds of us of the need for proper metrics. When we design a machine learning model or make changes to the interface of a website, we need a way to determine if our solution is effective. Often, we will use one statistic, such as mean-squared error for regression or F1 score for classification problems. If we realize there may be detrimental consequences of using only a single measure, we might think again about how we classify success. Much as the call center manager would be better off judging employee performance based on a combination of the number of calls handled and customer satisfaction, we can create better models by taking into account several factors. Instead of assessing a machine learning method only by accuracy, we might also consider interpretability so we create understandable models.

Although most people want to hear a single number to summarize an analysis, in most situations we are better off reporting multiple measures (with uncertainty intervals). There are times when a single well-designed metric can encourage the behavior we want, such as in [increasing savings rates for retirement](https://www.journals.uchicago.edu/doi/pdfplus/10.1086/380085?), but, it is important to keep in mind that people will try to maximize whatever measurement we choose. If we end up achieving a single goal at the expense of other, equally important factors, then our solution might not help the situation. One of the first steps in solving a problem — data science or otherwise — is determining the right measure to gauge success. When we want to objectively find the best solution, we should recall the concept of Goodhart’s Law and realize that rather than using a single number, the best assessment is usually a set of measurements. By choosing multiple metrics, we can design a solution without the unintended consequences that occur when optimizing for a narrow objective.

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will](http://twitter.com/koehrsen_will?).
