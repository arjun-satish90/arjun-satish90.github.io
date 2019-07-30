---
published: true
title: "A Data Science Public Service Announcement"
date: 2019-02-21
categories:
  - data science
  - society
---

![](https://miro.medium.com/max/2000/1*crx46xo25gpDZnuhQeHsuw.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/aerial-photography-of-mountains-near-body-of-water-1028536/?)*


## Open source data science tools need your help. Fortunately, it’s easier to contribute now than ever before — here’s how to help


The best things in life are free: friends, `pandas`, family, `numpy` , sleep, `jupyter notebooks`, laughing, and `python`. On a serious note, it’s pretty incredible that the best tools for data science are available at no cost and are created not by a company with unlimited resources, but by a community of individuals, most of whom work on these projects for no pay. You can shell out [$860/year for Matlab](https://www.mathworks.com/pricing-licensing.html?intendeduse=comm&s_tid=htb_learn_gtwy_cta1&) (plus extra for more libraries) or you can download Python and any library for free, getting better software and great customer support (in the form of Stack Overflow and GitHub issues) without paying a cent.

The [free and open source software (FOSS)](https://en.wikipedia.org/wiki/Free_and_open-source_software?#Open_source) movement — where you are free to use, share, copy, and improve upon software in any way — has profoundly improved the digital tools used by companies and individuals while lowering the entry barriers to many fields (data science included ) to near zero. For those of us who grew up in the past few decades, this is the only model we know: of course software is free! However, the open-source tools we have come to depend on every day now face serious sustainability problems.

In this article, we’ll look at the issues facing FOSS and, better yet, the many steps you can take (some in as few as 30 seconds) to ensure your favorite data science tools remain free and better than the paid alternatives. Although there is a real problem, there are also numerous solutions available to all of us. (This article relies on information from [“Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure”](https://www.fordfoundation.org/about/library/reports-and-studies/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure?) as well as the [NumFocus website](https://numfocus.org/?).)

<!--more-->

* * *

## Why Open-Source Data Science Tools Need Help

Consider the amazing tool that is the Pandas library. As of February 20, 2019, Pandas has been downloaded over 80 million times from PyPi ([details on analyzing PyPi downloads here](https://packaging.python.org/guides/analyzing-pypi-package-downloads/?)). According to [libraries.io](https://libraries.io/?), at [least 25,000 GitHub repositories depend on](https://libraries.io/pypi/pandas?) Pandas and at least 100 different packages require the library. Nearly 1.8% of all questions on Stack Overflow are about Pandas (_5x the number of questions about the entire Matlab language_).

![](https://miro.medium.com/max/2000/1*dhqKjSr7ZhEY7YuWxU47iQ.png?q=20)
*Analysis of Stack Overflow Tags. You can do your own exploration [here.](https://insights.stackoverflow.com/trends?tags=pandas%2Cmatlab%2Cnumpy%2Cmatplotlib%2Cplotly%2Cipython&)*

The work of developing and maintaining Pandas is accomplished by a relatively small group. Since the [project’s start by Wes McKinney in 2009](https://www.datacamp.com/community/podcast/data-science-tool-building?), the [Pandas repository](https://github.com/pandas-dev/pandas?) has had only 1,400 contributors who have written a total of 294,000 lines of code [according to openhub.net.](https://www.openhub.net/p/py-pandas?) This represents an astounding 78 developer years of effort, worth at least $7.8 million. Despite the value of their labor, almost every single one of those contributors worked entirely for free, driven by a desire to built great data science tooling.

However, for Pandas to be maintained and updated, it needs more than part-time contributors. According to [NumFocus](https://numfocus.org/?) (more on this organization later), [Pandas requires 10 full-time paid developers to meet its goals](https://numfocus.org/wp-content/uploads/2018/07/NumFOCUS-Corporate-Sponsorship-Brochure.pdf?), including working towards a version 1.0 release. Currently, this library, used by tens of millions of people and thousands of companies, has 1 core developer paid at 20% time, 1 paid at 10% time, and 8 paid at 0% time.

![](https://miro.medium.com/max/2000/1*HCx01Xs2GsCq4Sw3emr6YA.png?q=20)
*From NumFocus (Some of these stats are a little old).*

Similar issues exist in other open-source data science libraries: matplotlib needs 14 full-time paid developers — it currently has 2 at 10% paid time — and numpy needs 12 — it has 2 at 100% (thanks to a grant). This lack of paid developer time hurts open-source libraries: despite wide reliance in industry, Pandas is not yet at a 1.0 release (considered a stable version) and will only get there at a rate proportional to the level of funding it receives.

* * *

The challenge of maintaining and improving a shared resource such as open-source software is expressed in the [“Tragedy of the Commons”](https://en.wikipedia.org/wiki/Tragedy_of_the_commons?): many people take advantage of no-cost tools, but few contribute back to them. Without proper support, the end result of the tragedy of the commons is a depletion of the resource and its eventual loss. Open-source software — and not just in data science — is increasingly running into sustainability issues as ever more individuals adopt these tools without giving back.

Expanded adoption is great — no one is arguing for closing off FOSS tools — but it means the ratio of producers to consumers continues to fall to unsustainable levels. At the start of the open-source era, many of the users also helped to build the tools, but now, thanks to the incredible adoption of personal computers, many more people have access to this software, putting a strain on the tools that literally form our digital infrastructure.

![](https://miro.medium.com/max/2000/1*S7ytd9qd5841hWS_skYlYg.png?q=20)
*A quote from Noah Kantrowitz, Python developer and member of the PSF.*

Over the past few years, we’ve started to see the crumbling of the open-source software that makes up our digital infrastructure (see the [Roads and Bridges report](https://www.fordfoundation.org/about/library/reports-and-studies/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure?)). OpenSSL, a set of encryption tools used by 2/3 of all web servers, for years was supported by one full-time developer. The fact that 70% of the web relied on the work of one person didn’t motivate anyone or any companies to donate until 2014, [when the “heartbleed” vulnerability](http://heartbleed.com/?) was found, focusing attention on the project and leading to much-needed donations. Currently, OpenSSL has enough funding for 4 full-time employees for 3 years. Without another major issue though, the continuation of this funding is uncertain.

As another example, [bash, a Unix shell and command language](http://bash/%20-%20GNU%20Project%20-%20Free%20Software%20Foundation%20https://www.gnu.org/software/bash/?) installed on 70% of internet connected devices, (including every Linux and MacOS machine) has been maintained since 1992 by a single person, Chet Ramey, who works at Case Western Reserve University. Again, this didn’t seem to bother anyone until the [“shellshock” vulnerability](https://en.wikipedia.org/wiki/Shellshock_(software_bug)?) was discovered in bash in 2014, prompting much-needed media attention.

Fortunately, as of this writing, we haven’t yet seen the equivalent issues in open-source data science tooling. Nonetheless, the time to act isn’t after a disaster has occurred, but as early as possible to head it off and prevent damage. If we want to avoid a true Tragedy of the Commons, then we need to take action to put our beloved tools on stable footing. It’s time to shift from mere consumers of open-source tools to supporters and/or producers!

* * *

# The Solution(s)

Anytime you present a problem, you should be legally obligated to also present a solution, ideally one that readers can immediately take. In the case of supporting open-source data science tools, there are plenty of options for you to help, no matter your technical expertise or financial status. Here, we’ll go through three:

1.  Reporting issues
2.  Solving issues and writing documentation
3.  Making a small donation through organizations like NumFocus (this takes [literally 30 seconds here](https://www.flipcause.com/secure/cause_pdetails/MjM2OA==?)).

The first, and perhaps the easiest way to help, is reporting issues so project developers know what to fix. [Linus’s Law](https://en.wikipedia.org/wiki/Linus%27s_Law?) says that “given enough eyeballs, all [bugs](https://en.wikipedia.org/wiki/Software_bug?) are shallow” meaning that if a project has enough users, all the issues will eventually be found. Reporting issues is valuable, but it needs to be done in an effective manner. Make sure your issue has not already been solved (do a search for similar problems first), provide the exact code needed to reproduce the issue, and provide follow-up information as requested. Also, treat project developers with respect: open-source contributors have no obligation to fix all your problems so be nice and give them as much help as you can.

If you are a little unsure about asking, here are some [tips for submitting issues on GitHub](https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612?), and here’s how to ask a [good question on Stack Overflow](https://stackoverflow.com/help/how-to-ask?). In addition to improving open-source libraries, both of these skills (submitting issues/asking questions) will help you personally as a data scientist because if you use a library long enough, you’ll eventually run into an issue no one else has had before. When you encounter new problems, you’ll have to know how to ask questions or how to solve them yourself.

This point brings us to the second way to contribute: solving outstanding issues and needs of open-source libraries. GitHub is a wonderful platform for collaboration and it makes finding places you can contribute easy. All you need to do is go to your favorite library’s repository, select issues, and look for wherever you feel comfortable contributing.

This doesn’t even require a high level of technical expertise. There are over 2800 open issues for pandas on GitHub, [227 of which are tagged “good first issue”.](https://github.com/pandas-dev/pandas/issues?q=is%3Aopen%20is%3Aissue%20label%3A%22good%20first%20issue%22&) Many of these issues have to do with documentation, which means you don’t need to write code! These contributions are a great place to get your feet wet working on open source and also build help you build a profile to show employers you’re committed to data science (please try not to just make token contributions for your profile — make a commitment to a project).

> The ethos of open source is that each issue should be viewed as an opportunity: if you see a problem, there is nothing stopping you from making a contribution that improves the library for yourself and for millions of other people.

* * *

If neither of those options appeals to you, or you want to help out even more, you can provide financial support to open-source projects. Now, you may say my donation can never make a difference, but with the criminally small amounts most of these projects get, ([$3000 for Pandas in 2017, $1300 for Numpy](https://numfocus.org/wp-content/uploads/2018/03/numfocus-annual-report-2017-WEB.pdf?)) even a minor donation can go a large way. Moreover, a lot of small donations from many individuals add up: if everyone reading my articles in a typical month gave just $1 month to open source, that would be over half a million dollars to support our data science tools!

When it comes to giving donations, sometimes there can be too many options, so I’ll give you just one focused on data science, NumFocus. The stated goal of this charity is “provide a stable, independent, and professional home for projects in the open source scientific data stack.” NumFocus gives support to open-source projects such as `numpy`, `pandas`, `matplotlib`, `project jupyter`, `ipython`, `pymc3` , `pytables`, [and many others.](https://numfocus.org/sponsored-projects?_sft_project_category=python-interface&) Donating to NumFocus is simple: click the image and within 30 seconds you’ll be a sustaining member.

[ Click here to make a difference!](https://www.flipcause.com/secure/cause_pdetails/MjM2OA==)

Personally, I donate $2 a month to NumFocus. It’s a tiny amount — in the universal measure of value, less than one cup of coffee a month — but I enjoy knowing I’m doing a small part to help the libraries I love. Becoming a sustaining member is also great because I don’t even have to remember to donate — I just sign up once, and automatically make my donation, each month getting a thank you email from NumFocus.

In case data science isn’t your field, or you want to contribute to other projects, here are a few organizations that support open-source:

*   [Python Software Foundation](https://www.python.org/psf?)
*   [Apache Software Foundation](https://www.apache.org/?)
*   [Software Freedom Conservancy](https://sfconservancy.org/?)

(You can see a [larger list here](https://en.wikipedia.org/wiki/List_of_free_and_open-source_software_organizations?).) Again, I think it’s important to not get overwhelmed, so just pick one or two, automate your support, and then you don’t even have to think about it.

> The best automation lets us make the world better without any conscious effort!

If you want to go further, ask your company to become a sustaining member of open-source as well. If my experience is any indication, then your company will be glad to invest in these tools if you rely on them in your work. A few weeks ago, I ran into a strange bug in Pandas which I posted about on [Stack Overflow](https://stackoverflow.com/questions/54755354/strange-behavior-with-pandas-median/54803467?#54803467) and [then GitHub](https://github.com/pandas-dev/pandas/issues/25375?), where it joined 2800 other open issues for Pandas. Shortly after, I received a comment directing me to [the likely source of the issue, line 7400 in an 8000 line file](https://github.com/pandas-dev/pandas/blob/b2c751985ebd09b72d917d08dc06193dc0922018/pandas/core/frame.py?#L7423) forming the basis of dataframes in pandas and was told that a pull request would be welcome.

Unfortunately, my technical skills and knowledge of pandas are nowhere near the level at which I want to go messing with the internals of the library. So, feeling like I needed to do something to help, I turned to the CTO of my company ([Cortex Building Intel](https://get.cortexintel.com/?)) and asked if the company would be willing to contribute monthly to NumFocus. Fortunately, our CTO realizes the value of supporting the technology we use every day and was happy to help out.

I share this story not because I’m a paragon, but because it shows there are multiple ways to support open-source. When I was out of my technical league, I turned to another way to make a difference. I’m not naive enough to think my action alone will alleviate the issue, but if enough people act, we can improve the sustainability of these tools.

Although it’s a little simplistic to think throwing money at problems will solve them, more paid developer time does help. Pandas has a list of goals to reach before version 1.0 is released and the only way these will get done in a timely manner is with funds to support paid developers.

![](https://miro.medium.com/max/2000/1*zf9rnHW5TgoCdqokgnlWmw.png?q=20)
*[Pandas road map (if they get more donations!)](https://pandas.pydata.org/donate.html?)*

To make it more effective, put your message this way: supporting open-source tools is investing in the future of your company. Free and open-source technology has allowed many start-ups to get off the ground and now forms the technical core of numerous companies and even entire parts of the web. Donations now will ensure open-source continues to level the technical field, strengthen our infrastructure, and provide us with the best data science tools.

## Final Thoughts

Supporting open-source is about more than just having effective, free tools, it’s about being part of a larger community. The most powerful solution to the tragedy of the commons is fostering a sense of community. Make people feel like they belong to a shared group and they will work to ensure the resources are maintained for all members. When you start to make contributions, you feel a stronger sense of community ([something severely lacking in our world](https://samharris.org/podcasts/142-addiction-depression-meaningful-life/?)) and know you are helping yourself and others.

Also, if you do make a contribution of any type, you have my complete permission to boast about it on all your social media channels. There are some activities — donating blood, volunteering at a food bank — which are so inherently good for the world that I never get tired of seeing posts about them. When you donate to open source, shout it from the top of your personal mountain. If you donate more than me (yes this is a challenge), then let me know it and I’ll be glad to hear it. If someone calls you annoying, just shrug them off: you are making the world a better place and they are not. The open-source data science community will only keep growing, so let’s work to provide a sustainable foundation for the tools we all use.

As a reminder, here’s the game plan:

*   Submit quality issues and do your best to help out those solving them.
*   Go to your favorite open-source library, pick an issue (there should be some marked “good first issue”) and try to solve it
*   If you are able, make a sustaining donation to NumFocus or other open-source organization.
*   If your company relies on open-source tools, talk to someone about sustaining company support for open-source software
*   Post about your donations wherever you want.
*   Convince others to do the same through conversations and writing.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will.](http://twitter.com/@koehrsen_will?)
