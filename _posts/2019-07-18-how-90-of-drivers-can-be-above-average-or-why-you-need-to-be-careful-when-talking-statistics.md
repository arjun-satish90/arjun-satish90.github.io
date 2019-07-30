---
published: true
title: "How 90% Of Drivers Can Be Above Average Or Why You Need To Be Careful When Talking Statistics"
date: 2019-07-18
categories:
  - data science
  - statistics
---
![](https://miro.medium.com/max/2000/1*9SkRgtP3zFvFpTCU4iZZ_g.png?q=20)
*[(Source)](https://io9.gizmodo.com/the-mysterious-law-that-governs-the-size-of-your-city-1479244159?)*

## Means, Medians, and Skewed Distributions in the Real World

Most people see the headline “90% of Drivers Consider Themselves Above Average” and think “wow, _other people_ are terrible at evaluating themselves objectively.” What you should think is “that doesn’t sound so implausible if we’re using the _mean_ for average in a heavily negative-skewed distribution.”

Although a [headline](https://www.edsurge.com/news/2018-05-24-most-professors-think-they-re-above-average-teachers-and-that-s-a-problem?) like this is often used to illustrate the [illusion of superiority,](https://en.wikipedia.org/wiki/Illusory_superiority?) (where people [overestimate their competence](https://www.apa.org/monitor/feb03/overestimate?)) it also provides a useful lesson in clarifying your assertions when you talk statistics about data. In this particular case, we need to differentiate between the [_mean_ and _median_](https://www.purplemath.com/modules/meanmode.htm?) of a set of values. Depending on the question we ask, it is possible for 9/10 drivers to be above average. Here’s the data to prove it:

![](https://miro.medium.com/max/2000/1*KOKm2X_klKNDXyl0qvTc2A.png?q=20)
![](https://miro.medium.com/max/2000/1*g8ATtDnfBaDKuacpAauy9Q.png?q=20)
*Driver Skill Dataset and Dot Plot with Mean and Median*

The distinction is whether we use _mean_ or _median_ for “average” driver skill. Using the mean, we add up all the values and divide by the number of values, giving us 8.03 for this dataset. Since 9 of the 10 drivers have a skill rating greater than this, 90% of the drivers could be considered above average!

The median, in contrast, is found by ordering the values from lowest to highest and selecting the value where half the data points are smaller and half are larger. Here it’s 8.65 with 5 drivers below and 5 above. By definition, 50% of drivers are below the median and 50% exceed the median. If the question is “do you consider yourself better than 50% of other drivers?” than [90+% of drivers cannot truthfully answer in the affirmative.](https://gigaom.com/2014/08/19/93-of-us-think-we-are-above-average/?)

(The median is a particular case of a [percentile](https://www.mathsisfun.com/data/percentiles.html?) (also called a quantile), a value at which the given % of numbers are smaller. The median is the 50th quantile: 50% of numbers in a dataset are smaller. We could also find the 90th quantile, where 90% of values are smaller or the 10th quantile, where 10% of values are smaller. Percentiles are an intuitive way to [describe a dataset](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.describe.html?).)

<!--more-->

* * *

## Why Does This Matter?

This might appear to be a contrived example or a technicality, but data where the mean and median are not in agreement [come up often in the real world](https://sciencestruck.com/types-of-skewed-distribution-with-real-life-examples?). The mean is equal to the median when values are symmetrically distributed. However, real-world datasets almost always have a measure of skew, either positive or negative:

![](https://miro.medium.com/max/2000/1*9451kH1-GPqdNyWdehmPeQ.jpeg?q=20)
*Positive, symmetric, and negative skews. [(Source)](https://www.google.com/url?sa=i&&cd=&cad=rja&uact=8&ved=2ahUKEwjF_OTDur7jAhVwmuAKHUbnD90Qjhx6BAgBEAM&url=https%3A%2F%2Fcodeburst.io%2F2-important-statistics-terms-you-need-to-know-in-data-science-skewness-and-kurtosis-388fef94eeaa&psig=AOvVaw1BPBjo4PiSITF4axKZ9hcR&ust=1563538846161292)*

In a positively skewed distribution, the mean is greater than the median. This occurs when a relatively few number of outliers on the upper end of the graph “skew” it rightward, while the majority of the values are clustered at lower values. A real-world situation is personal income, where the mean income is significantly greater than the median income. The following plot shows the US income distribution in 2017 as 100 percentiles in a histogram.

![](https://miro.medium.com/max/2000/1*AuiuF_8i-xX28ojpOjfWkw.png?q=20)
*Income distribution in the United States, a positively skewed distribution*

The exact numbers vary by source ([this data is from here](https://dqydj.com/united-states-income-brackets-percentiles/?)) but the overall pattern is clear: a few very high earners skew the graph towards the right (positive) raising the mean above the median. At a value of $55880, the mean is close to the 66th percentile. The interpretation is 66% of Americans make less than the average national income — when the average is taken to be the mean! This phenomenon [occurs in nearly every country](https://blog.datawrapper.de/weekly-chart-income/?).

* * *

An example of a negatively skewed distribution is age at death. In this dataset, there are, unfortunately, some deaths at a relatively young age, lowering the mean and skewing the graph leftward (negatively).

![](https://miro.medium.com/max/2000/1*jW9Zwvr5pPmVZcdQ72Gtiw.jpeg?q=20)
*Age at death in Australia, a negatively skewed distribution [(Source)](http://www.tussursilk.com/tag/skewed-distribution/?)*

In the case of a negative skew, the median is greater than the mean. The result is that more people can be above the “average” when the average is defined as mean. “Majority of people live longer than average” might be a strange headline, but if you choose your stats carefully, you can make it true.

Most datasets involving human behavior exhibit some kind of skew. Stock market returns, income, social media followers, battle deaths, and sizes of cities are all highly skewed distributions. In _Antifragile_, [Nassim Taleb](https://en.wikipedia.org/wiki/Nassim_Nicholas_Taleb?) describes this world of skewed outcomes [as extremistan](https://kmci.org/alllifeisproblemsolving/archives/black-swan-ideas-mediocristan-extremistan-and-randomness/?). We evolved in mediocristan, where all datasets are normally distributed, but our modern lives are now dominated by unequal distributions. Living in extremistan presents opportunities for incredible rewards, but these will only accrue to a very small number of people. It also means we have to be careful when talking about means and medians as the “average” representation of a dataset.

![](https://miro.medium.com/max/2000/1*HmMDWZ-X6JQOp7xQOWS7Nw.png?q=20)
*DIstribution of Followers ([source](https://www.google.com/url?sa=i&&cd=&cad=rja&uact=8&ved=2ahUKEwinz9jmgr_jAhWMneAKHYzOAkkQjhx6BAgBEAM&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FDistribution-of-the-number-of-followers-denoted-as-n-f-across-all-Weibo-users-We_fig2_316617734&psig=AOvVaw344DELPIhEN6dzawiErju_&ust=1563558251551513)) on social media, a positively skewed distribution.*

([Zip’s Law](https://io9.gizmodo.com/the-mysterious-law-that-governs-the-size-of-your-city-1479244159?) and other power laws also produce skewed distributions.)

* * *

# Conclusions

The point to remember is when you specify “average”, you need to clarify whether you are talking about the mean or the median because it makes a difference. The world is not symmetrically distributed, and, therefore, we should not expect the mean and median of a distribution to be the same.

Machine learning may get all the attention, but the really important parts of data science are those we use every day: basic statistics to help us understand the world. Being able to tell the difference between a mean and a median may seem mundane, but it’ll be a lot more relevant to your daily life than knowing how to build a neural network.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will.](http://twitter.com/@koehrsen_will?)
