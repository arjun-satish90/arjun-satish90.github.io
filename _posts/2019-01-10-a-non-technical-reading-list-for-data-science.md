---
published: true
title: "A Non Technical Reading List For Data Science"
date: 2019-01-10
categories:
  - reading
  - thoughts
  - data science
---

![](https://miro.medium.com/max/2000/1*JGftxRVnyFdPsknuVsCuzw.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/top-view-photo-of-boat-near-airplane-1575833/?)*


## Books that will make you a better data scientist without delving into the technical details

Contrary to what some of data scientists may like to believe, we can never reduce the world to mere numbers and algorithms. When it comes down to it, decisions are made by humans, and being an effective data scientist means understanding both _people_ and data.

Consider the following real-life example:

[When OPower, a software company, wanted to get people to use less energy](https://news.nationalgeographic.com/news/2010/07/100715-energy-smart-meter-competition/?), they provided customers with plenty of stats about their electricity usage and cost. However, the data alone were not enough to get people to change. In addition, OPower needed to take advantage of behavioral science, namely, [studies showing people were driven to reduce energy when they received smiley emoticons on their bills](https://sparq.stanford.edu/solutions/emoticons-reduce-energy-use?) showing how they compare to their neighbors!

The simple intervention of putting a 😃 on people’s electricity bills when they used less than their neighbors, and a 😦 face when they could do better ended up reducing electricity consumption 2–3%, in the process saving millions of dollars and preventing emissions of millions of pounds of CO2 🏆! To a data scientist, this may be a shock — you mean people don’t respond to pure data !— but this was no surprise to the chief science officer of [OPower](https://www.oracle.com/corporate/acquisitions/opower/?), [Robert Cialdini,](https://hbr.org/2013/07/the-uses-and-abuses-of-influence?) a former psychology professor who wrote a book about the human behavior. The takeaway is you can have any data you want but you still need an understanding of how humans work to effect real change.

![](https://miro.medium.com/max/2000/1*obcVCc-jpU6KWfswPXmdLQ.png?q=20)
*The most effective visualization isn’t a bar chart, it’s a smiley face.*

In our daily work and formal education as data scientists, it’s difficult to get a glimpse into the workings of humans or to take a step back and think about the social implications of our work. Therefore, it’s critical to read not only [technical articles](http://arxiv.org/?) and [textbooks](http://shop.oreilly.com/product/0636920052289.do?) but also to branch out into works that look at how people make choices and how data can be used to improve these choices.

In this article, I’ll highlight 6 books that are non-technical — in the sense that they don’t delve into the math and algorithms — but critical reads for data scientists. These books are necessary for anyone who wants to accomplish the objective of data science: enable better real-world decisions through data.

The 6 books are listed here with brief reviews and takeaways following:

1.  **_The Signal and the Noise: Why So Many Predictions Fail — but Some Don’t_** by Nate Silver
2.  **_Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy_** by Cathy O’Neill
3.  **(Tie) _Algorithms to Live By: The Computer Science of Human Decisions_** by Brian Christian and Tom Griffiths and **_How Not to be Wrong: The Power of Mathematical Thinking_** by Jordan Ellenberg
4.  **_Thinking, Fast and Slow_** by Daniel Kahneman
5.  **(Dark horse) _The Black Swan: The Impact of the Highly Improbable_ by** Nassim Nicholas Taleb

<!--more-->

* * *

## Takeaways and Reviews

1.  [**_The Signal and the Noise: Why So Many Predictions Fail — But Some Don’t_**](https://www.penguinrandomhouse.com/books/305826/the-signal-and-the-noise-by-nate-silver/9780143125082/?) **by Nate Silver**

![](https://miro.medium.com/max/2000/0*4c1QC5FC1MtNcD-A.jpg?q=20)

Predictions about the future — in areas like elections, economics, national politics, and tech advances — [are often hilariously wrong](https://www.inc.com/jessica-stillman/12-hilariously-wrong-tech-predictions.html?). These forecasts are less humorful when they have actual real-world consequences, and [in this work](https://fourminutebooks.com/the-signal-and-the-noise-summary/?), Silver explains why people tend to be terrible at making predictions and examines the few who have managed to break the trend in a number of different fields. It turns out there is no one magic rule for being right about the future, just a handle of basic rules practiced by great predictors.

Anyone can benefit from the simple advice offered throughout the book:

*   **Think like a fox (not a hedgehog)**: have lots of small ideas (the fox) instead of one big idea (the hedgehog). If you have only a single idea, you will tend to seek out confirming evidence and ignore anything that contradicts your views (the [confirmation bias](https://fs.blog/2017/05/confirmation-bias/?)). If you have lots of little ideas, you will be more concerned with what’s right rather than what supports your current beliefs and you can abandon any of the ideas when the evidence no longer supports them. These two different ways of thinking also explain why people who are more confident in their predictions (like TV pundits) tend to be wrong more of the time.
*   **Make lots of predictions and get rapid feedback:** we are much better at making estimates for frequently occurring events, primarily because of the feedback and improvement cycle. Every day a weather forecast is wrong, that information goes into the model and makes the forecast for tomorrow better (one reason why weather forecasts have improved substantially over the decades). We are worst at making choices in situations we experience rarely, and in these cases, using as much data as possible is key
*   **Draw on as many diverse sources as possible:** each provider of data has their own biases but by aggregating different estimates you can average out the mistakes — a point well made by Silver’s [FiveThirtyEight](https://fivethirtyeight.com/?) website. This wisdom of the crowd approach means using sources that disagree with your views and not relying solely on “experts” in a field.
*   **Always include uncertainty intervals and don’t be afraid to update your views when the evidence changes:** the single biggest mistake people make when forecasting is providing one number. Although one answer may be what the public wants to hear, the world is never strictly black or white but instead exists in shades of gray which we have a responsibility to represent in our predictions. Expressing uncertainty may seem cowardly — [saying Hilary has a 70% chance of winning means no matter the outcome, you will be right](https://math.stackexchange.com/questions/1911110/what-is-nassim-talebs-criticism-of-538s-election-model?) — but it’s more realistic than a single yes/no. Moreover, people assume it’s a weakness to change one’s opinion, but updating your beliefs when the facts on the ground change is actually an important strength, in data science and forming a worldview.

> We can never be completely right in our predictions about the world, but that should not stop us trying to be less wrong by relying on well-proved principles for making superior forecasts.

Two great additional books in this same category are s.com/book/show/23995360-superforecasting?)and [_Expert Political Judgement_](https://press.princeton.edu/titles/11152.html?) both by Philip Tetlock.

* * *

**2\.** [**_Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy_**](https://weaponsofmathdestructionbook.com/?) **by Cathy O’Neill**

![](https://miro.medium.com/max/2000/0*JK6Vj1NAQw9l22Na.jpg?q=20)
_Weapons of Math Destruction_ should be mandatory reading for students pursuing a degree in stats, machine learning, or data science, and for anyone who will have to make the decision to deploy a model. A “weapon of math destruction” is any algorithm that is **opaque** — can’t be easily explained; works on a mass **scale** — affects millions or even billions of people, and has the potential to cause serious **damage** — such as undermining democratic elections or keeping whole swathes of our population imprisoned.

The central premise is these weapons of math destruction have the ability to create feedback loops that spread inequality and because we can’t see inside these algorithms, we’ll have no idea how to correct them. It’s only after we look back and observe the immense damage — such as in the 2016 election or 2008 financial crises (both caused by algorithms harnessed for negative ends) — the harm our blind trust in these models can cause.

* * *

Furthermore, our models are only as good as the data that are put in, and when that data is biased, then the predictions from the model will be as well. Consider a [model for sentencing](https://www.wired.com/2017/04/courts-using-ai-sentence-criminals-must-stop-now/?) offenders that takes into account a person’s time of first encounter with law enforcement. Due to [unjust policing strategies such as stop and frisk](https://features.propublica.org/walking-while-black/jacksonville-pedestrian-violations-racial-profiling/?), a black man is likely to have a run-in with the police at a much younger age than a white man even accounting for other factors. This will result in the model recommending a longer prison sentence for blacks, during which these individuals will be losing out on economic opportunities and becoming ostracized from society. Those individuals are then more likely to re-offend, leading to a vicious cycle of imprisonment all started because of data generated by an unjust policy and then fed into a [black box](https://www.technologyreview.com/s/604087/the-dark-secret-at-the-heart-of-ai/?).

O’Neil’s book, released in early 2016, is needed now more than ever before. The end of 2016 saw the devastation wreaked on the American democratic process by Russian actors who took advantage of Facebook’s algorithms to spread propaganda. Far from being an academic exercise, these actions had real-world consequences, raising into question the legitimacy of elections in the United States. [Far-right advertisements continue to plague Facebook](https://www.trustedreviews.com/news/facebooks-far-right-problem-just-wont-go-away-3642114?), driven by an algorithm that (most likely, we don’t really know) considers engagement as the top priority.

Algorithms are only going to play a larger role in our daily lives moving forward. Already, where we go to school, what we read, whether we are approved for a loan, if we get a job, and what we buy are all decided to a significant extent by algorithms we have no control over and cannot query for an explanation. O’Neil’s book may seem pessimistic about machine learning models, but I like to think of it more as a necessary criticism: with so much unbridled enthusiasm surrounding machine learning, we need people who are willing to take a step back and ask: are these tools really improving peoples’ lives and how should we as a society adopt them?

Machine learning algorithms are just tools, and as with any tools, they can be used for good and bad. Fortunately, we are still at an early stage which means we can shape the use of models to ensure they work towards making objective decisions and creating the best outcomes for the greatest number of people. The choices we make now in this regard will shape the future of data science in the decades to come, and it’s best to go into these debates well-informed.

> Data science may be a young field but is already having an immense impact for both good and bad in millions of individual’s lives. As pioneers on this new frontier, those of us working now have an obligation to ensure our algorithms don’t turn into weapons of math destruction.

**3\. (Tie)** [**_Algorithms to Live By: The Computer Science of Human Decisions_**](http://algorithmstoliveby.com/?) **by Brian Christian and Tom Griffiths and** [**_How Not to be Wrong: The Power of Mathematical Thinking_**](https://www.penguinrandomhouse.com/books/312349/how-not-to-be-wrong-by-jordan-ellenberg/9780143127536/?)**by Jordan Ellenberg**

![](https://miro.medium.com/max/2000/0*n_fgS9s6kgmYU2gM.jpg?q=20)
![](https://miro.medium.com/max/2000/0*jRUIgRATvJSrYzhC.jpg?q=20)


Computer science and statistics (and every other field of study) suffer from one problem when they are taught in school: they are boring in the abstract. It’s only when they are applied to real-world problems that they become interesting enough to make us want to understand. Both of these books do an incredible job of transforming dry subjects into entertaining and informative narratives about how to use algorithms, stats, and maths in our daily lives.

For example, in _Algorithms to Live By_, the authors show how we can use the idea of the explore vs exploit tradeoff and optimal stopping to [find out how long we should spend searching for a spouse](https://www.huffingtonpost.com/thought-matters/algorithms-to-live-by_b_9772622.html?) (or new employee, restaurant for dinner, etc.). Likewise, we can use sorting algorithms to organize our belongings most efficiently for retrieving what you need quickly. You thought you knew these ideas, and you may even be able to write them in code, but you’ve probably never applied them to optimize your life.

* * *

The main idea of _How Not to be Wrong_ is similar as Ellenburg takes us through stories showing both the use and misuse of statistical concepts like linear regression, inference, Bayesian inference, and probability. Applying the laws of probability show us that playing the lottery is always a losing proposition, — except in the rare cases where the payoff is actually positive (as was [discovered by a group of MIT students](https://www.maa.org/meetings/calendar-events/how-to-get-rich-playing-the-lottery?)). Ellenburg does not shy away from showing us equations, but he applies them to real-world situations.

The central quote of Ellenburg’s book is mathematical thinking is “the extension of common sense by other means.” In many situations, primarily in the distant past, our intuitions serve us well, but, now in the modern world, there are many cases where our initial response is completely false (see the next book). In these circumstances, we need to rely not on instincts but can instead use probability and statistics in order to arrive at the best decision.

Both books are at the exact right level of rigor — mixing in a few equations with plenty of stories — and they are both enjoyable to read. Throughout these books, I found plenty of data science concepts I had never quite grasped in a classroom finally clicking and over and over again I experienced the joy of an “aha” moment. _Math, statistics, and computer science are only useful to the extent they can affect your life for the better, and both of these books demonstrate all the uses of these subjects you’ve never stopped to consider._

**4\.** [**_Thinking, Fast and Slow_**](https://us.macmillan.com/books/9780374533557?)**by Daniel Kahneman**

![](https://miro.medium.com/max/2000/0*lmDGJduaKsCwcy07.jpg?q=20)
If you haven’t realized it yet, then here’s a useful lesson: humans are irrational and we routinely make terrible decisions in all aspects of life. However, there is reason for hope: once we understand why we don’t act optimally, we can start to alter our behavior for better outcomes. This is the central premise of Kahneman’s masterwork documenting decades of experimental findings.

[Kahneman](https://en.wikipedia.org/wiki/Daniel_Kahneman?) (the 2002 Nobel Prize winner in Economics) along with his research partner Amos Tversky (in addition to others such as Richard Thaler), created the highly influential [field of behaviorial economics](https://en.wikipedia.org/wiki/Behavioral_economics?) which treats people _not as rational utility maximizers, but as the irrational decision-makers_ we actually are. This has created a [real shift in thinking](https://hbr.org/2017/10/the-rise-of-behavioral-economics-and-its-influence-on-organizations?) and design choices not only in economics, but in areas of life as diverse as medicine, sports, business practices, energy savings, and retirement funding. We can also apply many of the findings to data science, such as how to present study results.

In this rigorous yet highly enjoyable work, Kahneman outlines all the ways in which we don’t act logically including [the anchoring, availability, and substitution heuristics (rules of thumb)](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow?#Heuristics_and_biases) or our tendency towards [loss aversion](https://www.scientificamerican.com/article/what-is-loss-aversion/?) and falling prey to the sunk cost fallacy. He also outlines what is perhaps the most important takeaway: that we [have two different systems of thought](https://www.scientificamerican.com/article/kahneman-excerpt-thinking-fast-and-slow/?).

*   **System 1 Fast and Intuitive:** This mode was designed by evolution to make rapid decisions without considering the evidence. While this served us well in our hunter-gatherer past, it often gets us into trouble in our information-rich world when we don’t take time to look at the data.
*   **System 2 Slow and Rational:** We need to use this mode in situations with many options and different sources of evidence to consider. It takes effort to employ System 2, but that effort is well-rewarded in the form of better decisions and consequently outcomes.

Using System 1 is natural, and we have to overcome millions of years of evolution to employ System 2\. Even though it’s difficult, in our data-rich world, we need to spend time honing our System 2 thinking. Sure, we may sometimes run into problems with overthinking, but underthinking — using System 1 instead of System 2 — is a far more serious problem.

> This book is crucial for understanding how people make decisions and what we as data scientists can do to help people make better choices.

This book also has conclusions that apply outside of data science like [the idea of two selves](https://www.brainpickings.org/2011/10/26/thinking-fast-and-slow-daniel-kahneman/?): experiencing and remembering. The experiencing self is the moment-to-moment feelings we have during an event but is much less important than the remembering self which is our perception of the event afterwards. The remembering self rates an experience according to the Peak-End rule which has profound implications for medicine, life satisfaction, and forcing ourselves to do unpleasant tasks. We will remember events for far longer than we experience them, so it’s crucial that during an experience, we try to maximize the future satisfaction of our remembering self.

If you want to understand actual human psychology, not the idealized version presented in traditional classrooms, then this book is the best place to start.

**5\. (Dark horse):** [**_The Black Swan: The Impact of the Highly Improbable_**](http://www.randomhouse.com/highschool/catalog/display.pperl?isbn=9780812973815&)**by Nassim Nicholas Taleb**

![](https://miro.medium.com/max/2000/0*zQKi7yzKIRHHE7vE.jpg?q=20)
There is only one place for Taleb to occupy on a list, and it’s that of an outsider. [Taleb](https://en.wikipedia.org/wiki/Nassim_Nicholas_Taleb?#Finance_view), a former quantitative trader who made substantial sums during market downturns in 2000 and 2007, has made himself into a vocal scholar-researcher achieving worldwide _acclaim and criticism_ for his works. Primarily, Taleb is occupied with one idea: the failure of contemporary ways of thinking especially in times of great uncertainty. In _The Black Swan,_ Taleb puts forth the concept that we are blind to the randomness that rules human activities, and, as a result, are devastated when things do not turn out as expected. Originally published in 2007, _The Black Swan_ has become more relevant since the unexpected events of 2008 and 2016 which completely upended traditional models.

Of course, the question that immediately comes up based on the central premise, is: well don’t improbable events by definition not happen very often and so we shouldn’t be worried about them? The critical point is that while each improbable event _by itself is unlikely to happen_, taken together, there is a near certainty that _many unexpected events will occur_ in your lifetime, or even in a single year. The chance of an economic crash occurring in any one year is miniscule, but the probabilities add up until an economic downturn every decade somewhere in the world is a near possibility.

We should not only expect world-changing events to happen with high frequency, but we should not listen to experts who are constrained by what has occurred in the past. As anyone who invests in the stock market should know, past performance is no predictor of future performance, a lesson we’d be wise to consider in our data science models (which use past data). Also, our world is not normally distributed, but instead fat-tailed, with a few extreme events — the Great Recession — or a few wealthy individuals — Bill Gates — overshadowing all the others. When extreme events occur, no one is prepared because they far exceed the magnitude of any previous ones.

_The Black Swan_ is important for data scientists because it shows that any models based only on past performance will often be wrong with disastrous consequences. All machine learning models are built only with past data which means we don’t want to trust them too much. Models (Taleb’s included) are flawed approximations of reality, and we should make sure we have systems in place to deal with their inevitable failures.

As a note,  because it offers a non-mainstream thought system.

(This book is the second in Taleb’s five-part _Incerto_ laying out his complete philosophy. _The Black Swan_ discusses the concept of highly improbable events, while the fourth book in the _Incerto_, _Antifragile: Things That Gain from Disorder_ discusses ways in which you can make yourself not just robust to disruption, but set yourself up to be better off because of it. I think _The Black Swan_ is the most relevant of the bunch for data science).

* * *

# Conclusions

After a long day of staring at a computer screen, I can think of no better way to end the day than with a book (print, ebook, or audiobook it doesn’t matter). Data science requires constantly expanding the tools in your toolkit, and, even when we want something to relax and take our minds off work, that doesn’t mean we can’t be learning.

These books are all engrossing reads that also teach us lessons about [data science](http://towardsdatascience.com/?) and life. The 6 works described here will provide a helpful supplement to more technical works by demonstrating what actually drives humans. Understanding how people think in reality — as opposed to idealized models — is just as critical as statistics for enabling better data-driven decisions.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will](http://twitter.com/@koehrsen_will?).
