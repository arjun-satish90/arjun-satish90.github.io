---
published: true
title: "Jupyter Notebook Extensions"
date: 2018-12-07
categories:
  - Jupyter
  - programming
---

![](https://miro.medium.com/max/2000/1*Zq4nOF3WIpKDyfuJdLEs0A.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/view-of-high-rise-buildings-during-day-time-302769/)*

## How to get more productivity in the notebook environment

The Jupyter Notebook is a great teaching, exploring, and literate [programming environment](https://en.wikipedia.org/wiki/Literate_programming), but out-of-the-box notebooks are notoriously lacking in features. Fortunately, there are a [number of ways](/jupyter-notebook-hints-1f26b08429ad), including [Jupyter Notebook extensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions), to improve this invaluable tool.

# Extremely Concise Version

Run the following in a command prompt:

```
pip install jupyter_contrib_nbextensions && jupyter contrib nbextension install
```

Start up a Jupyter Notebook and navigate to the new Nbextensions tab:

![](https://miro.medium.com/max/2000/1*hRhdOuS-4NxEyd4Yqlzwxg.png?q=20)
*Jupyter Notebook Extensions Tab*

<!--more-->

Enable the extensions you want and enjoy the productivity benefits.

(If you [don’t see a tab](https://github.com/Jupyter-contrib/jupyter_nbextensions_configurator/issues/72), open a notebook and click Edit > nbextensions config)

The enabled extensions can be seen in the toolbar in a notebook:

![](https://miro.medium.com/max/2000/1*nYwLWhyzjGBCojyd0yOqnw.png?q=20)

# Slightly Longer Version

If that isn’t satisfying enough for you, below are some details about Jupyter notebook extensions. I’ve also included my top 5 to get you started.

## What are notebook extensions?

[Jupyter Notebook extensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions) are simple add-ons that extend the basic functionality of the notebook environment. Written in JavaScript, they do things like [autoformat your code](https://github.com/ipython-contrib/jupyter_contrib_nbextensions/tree/master/src/jupyter_contrib_nbextensions/nbextensions/code_prettify) or [send a browser notification](https://github.com/ipython-contrib/jupyter_contrib_nbextensions/tree/master/src/jupyter_contrib_nbextensions/nbextensions/notify) when a cell has completed. Extensions currently only work in Jupyter Notebooks (not Jupyter Lab).

Why use these extensions? Jupyter Notebooks are great tools for teaching, learning, prototyping, exploring, and trying out new methods (or even in [production at Netflix](https://medium.com/netflix-techblog/notebook-innovation-591ee3221233)). However, vanilla notebooks are limited in features which can make working in them frustrating. While Jupyter Notebook extensions don’t completely solve the problem, they do add a few benefits that will make your work easier.

# Which to Use

Following are the 5 Jupyter Notebook extensions I use most often:

## 1\. Table of Contents: easier navigation

Once you start getting dozens of cells in one Jupyter Notebook, it can be difficult to keep track of them all. The Table of Contents solves that problem by adding a linked TOC that can be positioned anywhere on the page:

![](https://miro.medium.com/max/2000/1*vIwLqpuEExsQLxLHuZv93w.png?q=20)
*Table of Contents*

You can also use the extension to add a linked table of contents at the top of the notebook. This even shows which cell is selected and which is running:

![](https://miro.medium.com/max/2000/1*8vZSs46qsPKcSv2ph_30Ew.png?q=20)
*Table of Contents in Notebook*

## 2\. Autopep8: neat code in one click

We should all write [pep8 compliant code](https://www.python.org/dev/peps/pep-0008/), but sometimes you get caught up in an analysis and it’s hard to stick to best practices. When you’re done writing that amazing plot, this extension allows you to simply click the gavel and automatically format your messy code.

![](https://miro.medium.com/max/2000/1*elTgjATiDoy-n7QqwsxlaA.gif?q=20)
*Autopep8 your code.*

Like the best add-ons, this one accomplishes a time-consuming and tedious task with a simple click, enabling you to focus on thinking through problems.

## 3\. Variable inspector: keep track of your workspace

The variable inspector shows the names of all variables you’ve created in the notebook, along with their type, size, shape, and value.

![](https://miro.medium.com/max/2000/1*x0Et0QKJtZxYJXTkYE8b_Q.png?q=20)
*Variable inspector*

This tool is invaluable for data scientists migrating from RStudio or if you don’t want to have to keep printing `df.shape` or can’t recall the `type` of `x`.

## 4\. ExecuteTime: show when and how long cells ran

I often find myself trying to figure out how long a cell took to run or when I last ran a notebook that has been open for days. ExecuteTime takes care of both of those by showing when a cell finished and how long it took.

![](https://miro.medium.com/max/2000/1*kJOWLXmkaBY1Rh7cfkGUFw.png?q=20)
*ExecuteTime extension output*

There are better thedocs.io/en/stable/interactive/magics.html#magic-timeit) `thedocs.io/en/stable/interactive/magics.html#magic-timeit)` thedocs.io/en/stable/interactive/magics.html#magic-timeit)) but this is easy to implement and covers all cells in the notebook.

## 5\. Hide Code input: hide the work show the results

Although some of us like to see the hard work that goes into an analysis, some people just like to see the results. The Hide input all extension allows you to instantly hide all the code in the notebook while keeping outputs.

![](https://miro.medium.com/max/2000/1*p3Z13Od2954EmZ996c9B-A.gif?q=20)
*Hide all code*

The next time someone says they just want to see the results, you have a single click solution. (Although you should always examine the code).

These are just the extensions I find myself using the most often and you’re not limited to five. Check out the whole list by installing the extensions and opening a notebook (the notebook shown thedocs.io/en/latest/internals.html).)

* * *

# Conclusions

Install the Jupyter Notebook extensions, spend some time figuring out which ones are useful to you, and improve your productivity. While none of these are life-changing, they all add just enough benefit to be worthwhile, cumulatively saving you hours of valuable development time.

Although you’ll probably want to put some time into [learning an IDE](https://realpython.com/python-ides-code-editors-guide/) if you are writing production code (I’m liking [VS Code](https://code.visualstudio.com/docs/languages/python)), Jupyter Notebooks are still an integral part of a data science workflow. If you are going to be using this environment, you might as well get the most from your tools.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will](http://twitter.com/@koehrsen_will) or through my personal website [willk.online](https://willk.online/).
