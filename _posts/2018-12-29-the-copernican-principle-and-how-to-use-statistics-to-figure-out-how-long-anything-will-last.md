---
published: true
title: "The Copernican Principle And How To Use Statistics To Figure Out How Long Anything Will Last"
date: 2018-12-29
categories:
  - data science
  - statistics
  - society
---
![](https://miro.medium.com/max/2000/1*3BZ6rtrhXLnlt6I4rWyc8Q.jpeg?q=20)
*([Source](https://phys.org/news/2015-09-honey-moon-unique-star-trails.html?))*

## Statistics, the lifetime equation, and when data science will end

The pursuit of astronomy has been a gradual process of uncovering the insignificance of humanity. We started out in the [center of the universe](https://en.wikipedia.org/wiki/Geocentric_model?) with the cosmos literally revolving around us. Then we [were rudely relegated to one](https://en.wikipedia.org/wiki/Heliocentrism?) of [8](https://www.space.com/2791-pluto-demoted-longer-planet-highly-controversial-definition.html?) planets orbiting the sun, a sun which subsequently was revealed to be just [one of billions of stars](https://www.google.com/search?q=stars%20in%20our%20galaxy&oq=stars%20in%20our%20g&aqs=chrome.0.0j69i57j0l4.3921j1j4&sourceid=chrome&ie=UTF-8&) (and not [even a large one](https://www.schoolsobservatory.org/learn/astro/stars/class/starsize?)) in our galaxy.

This galaxy, the majestic [Milky Way](https://www.space.com/19915-milky-way-galaxy.html?), seemed pretty impressive until [Hubble discovered that all those fuzzy objects](https://amazing-space.stsci.edu/resources/explorations/groundup/lesson/scopes/mt_wilson/discovery.php?) in the sky are billions of _other_ galaxies, each of which has billions of stars ([potentially with their own intelligent life](http://www.hawking.org.uk/life-in-the-universe.html?)). The demotion has only continued in the 21st century, as mathematicians and physicists have concluded [the universe is one of an _infinity of universes_](https://www.space.com/18811-multiple-universes-5-theories.html?) collectively called the [multiverse](https://en.wikipedia.org/wiki/Multiverse?).

![](https://miro.medium.com/max/2000/1*fPk2g26loTCseTayxkhZiA.png?q=20)
*Go [here](https://www.eso.org/public/images/eso1242a/zoomable/?) to be blown away*

<!--more-->

On top of the relegation to a smaller and smaller part of the cosmos, now some thinkers [are claiming we live in a simulation](https://www.simulation-argument.com/simulation.html?), and soon will create our _own simulated worlds_. All of this is a long way to say _we_ _are not special_. The idea that the Earth, and by extension humanity, does not occupy a privileged place in the universe is known as the [Copernican Principle](https://en.wikipedia.org/wiki/Copernican_principle?).

While the Copernican Principle was first used with respect to our physical location — **x, y, and z coordinates** — in 1993, J Richard Gott applied the concept that we aren’t special observers to our universe’s _fourth dimension,_ **time**. In “Implications of the Copernican principle for our future prospects” ($200 [here](https://www.nature.com/articles/363315a0?) or free through the questionably legal SciHub [here](https://sci-hub.tw/10.1038/363315a0?)), Gott explained that if we assume we don’t occupy a _unique moment in history_, we can use a basic equation to predict the lifetime of any phenomenon.

* * *

## The Copernican Lifetime Equation

The equation, in its simple brilliance (derivation at the end of article) is:

![](https://miro.medium.com/max/2000/1*7TojDLx385ZN_WpIPaKWuQ.png?q=20)
![](https://miro.medium.com/max/2000/1*2LSrbL6zdx2_DSdLE6xYtw.png?q=20)
Where _t_current_ is the amount of time something has already been around, _t_future_ is the expected amount of time it will last from now, and _confidence interval_ expresses how certain we are in the estimate. This equation is based on a simple idea: we don’t exist at a unique moment in time and therefore, when we observe an event, we are most likely watching the middle and not the beginning or the conclusion.

![](https://miro.medium.com/max/2000/1*xg81RMq-tlvDyJN5uo9L5Q.png?q=20)
*You are most likely not at the beginning or end of an event but in the middle ([Source](https://www.washingtonpost.com/news/wonk/wp/2017/10/06/we-have-a-pretty-good-idea-of-when-humans-will-go-extinct/?utm_term=.4411e2585021&)).*

As with any equation, the best way to figure out how it works is to input some numbers. Let's apply this to something simple, say the lifetime of the human species. We’ll use a 95% confidence interval and [assume modern humans have been around for 200,000 years](https://en.wikipedia.org/wiki/Human?). Plugging in the numbers, we get:

![](https://miro.medium.com/max/2000/1*60qD8azA8x3sR8XLq6cjLg.png?q=20)
![](https://miro.medium.com/max/2000/1*x0iTBqLcDK3bdWeeIoBtjg.png?q=20)

The answer to the classic dinner-party question (okay, only the dinner parties I go to) of how long humans will be around is **5130 to 7.8 million years with 95% confidence.** This is in close agreement with [actual evidence](https://simple.wikipedia.org/wiki/Extinction?) that shows the mean duration of a mammal species is about 2 million years with the [Neanderthals making it 300,000 years and Homo erectus 1.6 million years](https://www.newyorker.com/magazine/1999/07/12/how-to-predict-everything?).

* * *

The neat part about this equation is it can be applied to anything while _relying only on statistics instead of trying to untangle a complex underlying web of causes._ How long a television show runs for, the lifetime of a technology, or the length of time a company exists are all subject to numerous factors that are impossible to tease apart. Rather than digging through all the causes, we can take advantage of the _temporal_ (a fancy word for time) Copernican Principle and arrive at a decent estimate for the lifetime of any phenomenon.

To apply the equation to something closer to home, data science, we first need to find the current lifetime of the field, which we’ll put at 6 years based on when the Harvard Business Review released the article [“Data Scientist: The Sexiest Job of the 21st Century”](https://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century?). Then, we use the equation to find we can expect, with 95% confidence, **data science will be around for at least another 8 weeks, and at most, 234 years.**

![](https://miro.medium.com/max/2000/1*Cbfwzt22yIxoK4hvrq1LtA.png?q=20)

If we want a narrower estimate, we reduce our confidence interval: at **50%, we get from 2 to 18 years.**

> This illustrates an important point in statistics: if we want to increase the precision, we have to sacrifice accuracy. A smaller confidence interval is less likely to be correct, but it gives us a narrower range for our answer.

If you want to play around with the numbers, here’s a [Jupyter Notebook](https://github.com/WillKoehrsen/Data-Analysis/blob/master/copernican/Copernican%20Time%20Principle.ipynb?).

* * *

## Being Right, Atomic Bombs, and Takeaways

You might object the answers from this equation are ridiculously wide, a point I’ll concede. However, the objective is not to get a single number — there are [almost no situations](https://en.wikipedia.org/wiki/The_Signal_and_the_Noise?), even when using the best algorithm, that we can find the one number guaranteed to be spot on — but to find a plausible range.

I like to think of the **Copernican Lifetime Equation** as a [Fermi estimate](https://en.wikipedia.org/wiki/Fermi_problem?), a back of the envelope style calculation named for the physicist Enrico Fermi. In 1945, with nothing more than some scraps of paper, [Fermi estimated the yield](http://www.lanl.gov/science/weapons_journal/wj_pubs/11nwj2-05.pdf?) of the Trinity atomic bomb test to within a factor of 2! Likewise, we can use the equation to get a _reasonable_ estimate for the lifetime of a phenomenon.

There are two important lessons, one technical, one philosophical, from using the Copernican Principle to find out how long something will be around:

1.  We can use statistics to quickly obtain objective estimates which are not subject to human factors. (Also, statistics can be enjoyable!)
2.  A good first approximation of how long something will last is how long it has already lasted

With regards to the first point, if you want to figure out how long a Broadway show will run, where do you even start gathering data? You could look at reviews, actors’ reputations, or even the dialogue in the script to determine the appeal and figure out how much longer the show will go on. Or, you could do as Gott did, apply his simple equation, and [correctly predict the runtimes of 42 out of 44](https://www.washingtonpost.com/news/wonk/wp/2017/10/06/we-have-a-pretty-good-idea-of-when-humans-will-go-extinct/?utm_term=.89aca2ab5bd8&) shows on Broadway.

> When we think about the individual data points, it’s easy to get lost in the details and mis-interpret some aspect of human behavior. Sometimes, we need to take a step back, abstract away all the details, and apply basic statistics instead of trying to figure out human psychology.

* * *

On the latter point, as Nassim Taleb [points out in his book _Antifragile_](https://en.wikipedia.org/wiki/Antifragile?), the easiest way to figure out how long a non-perishable item — such as an idea or a work of art — will be around is to look at its current lifetime. In other words, _the future lifetime of a technology is proportional to its past lifetime._

This is known as the [Lindy Effect](https://en.wikipedia.org/wiki/Lindy_effect?) and makes sense with a little thought: a concept that has been around for a long time — books as a medium for exchanging information — must have a reason for surviving so long, and we can expect it to persist far into the future. On the other hand, a new idea— Google Glass — is statistically unlikely to survive because of the vast number of new concepts arising every single day.

> Moreover, companies that have been around for 100 years — [Caterpillar](https://en.wikipedia.org/wiki/Caterpillar_Inc.?) — must be doing something right and we can expect them to be around longer than startups — [Theranos](https://en.wikipedia.org/wiki/Theranos?) — which have not demonstrated they fulfill a need.

For one more telling example of the Copernican Lifetime Equation, consider the brilliant tweet you sent an hour ago. Statistics tell us this will be relevant for between _90 more seconds to a little less than 2 days_. On the other hand,  by bored students _at least 26 years from now and up to 39,000 years in the future_. What’s more, this story won’t be experienced in virtual reality — [consumer virtual reality](https://en.wikipedia.org/wiki/Virtual_reality?#2000%E2%80%93present) having between 73 days and 311 more years — but on the most durable form of media, books, which have 29.5 to 45000 years of dominance left.

* * *

Some people may view the Copernican Principle — both temporal and spatial — as a tragedy, but I find it exciting. Much as we realized the stunning grandeur of the universe only after we discarded the geocentric model, once we let go of the myth that our time is special and that we exist at the pinnacle of humanity, the possibilities are vast. Yes, we may be insignificant on a cosmic scale _now_, but 5000 years _from now_ our ancestors — or possibly us — will expand throughout and even fundamentally alter the Milky Way.

As [David Deutsch points out in his book _The Fabric of Reality_](https://en.wikipedia.org/wiki/The_Fabric_of_Reality?), _anything not prohibited by the laws of physics will be achieved by humans given enough time._ Instead of worrying that the job you’re supposed to be doing now is meaningless, think of it as contributing to the great endeavor upon which humanity has embarked. We are currently subject to the Copernican Principle, but maybe humans really are different: after all, [we are starstuff](https://www.youtube.com/watch?v=ZrcggrTWKNI&) that has evolved the ability to contemplate our place in the universe.

* * *

## Sources:

1.  [Implications of the Copernican Principle for Our Future Prospects](https://www.nature.com/articles/363315a0?)
2.  [How to Predict Everything](https://www.newyorker.com/magazine/1999/07/12/how-to-predict-everything?)
3.  [We Have a Pretty Good Idea of When Humans Will Go Extinct](https://www.washingtonpost.com/news/wonk/wp/2017/10/06/we-have-a-pretty-good-idea-of-when-humans-will-go-extinct/?)
4.  [The Copernican Principle: How to Predict Anything](https://fs.blog/2012/06/how-to-predict-everything/?)

## Derivation

The derivation of the Copernican Lifetime Equation is as follows. The total lifetime of anything is the current lifetime plus the future lifetime:

![](https://miro.medium.com/max/2000/1*g1XzVT7IV_8ro3fTu3Z4xg.png?q=20)

If we don’t believe our temporal location is privileged, then our observation of a phenomenon occurs neither at the beginning nor the end:

![](https://miro.medium.com/max/2000/1*DagmgeraJaWdBdqbLGIbnw.png?q=20)

Make the following substitution for z:

![](https://miro.medium.com/max/2000/1*2LSrbL6zdx2_DSdLE6xYtw.png?q=20)

Insert the definition of the total lifetime to get:

![](https://miro.medium.com/max/2000/1*7GhFBSedkSmuUHgDIrReyQ.png?q=20)

Then solve for the future lifetime of any phenomenon:

![](https://miro.medium.com/max/2000/1*7TojDLx385ZN_WpIPaKWuQ.png?q=20)

With a confidence interval of 95%, we get the multiplicative factors 1/39 and 39; with a confidence interval of 50%, the factors are 1/3 and 3; for 99% confidence, our factors become 1/199 and 199.

You can play around with the equations in this [Jupyter Notebook](https://github.com/WillKoehrsen/Data-Analysis/blob/master/copernican/Copernican%20Time%20Principle.ipynb?). Also, take a look at the original [paper](https://sci-hub.tw/10.1038/363315a0?) by Gott for more details.

* * *

As always, I welcome constructive criticism and feedback. I can be reached on Twitter [@koehrsen_will](http://twitter.com/@koehrsen_will?).
