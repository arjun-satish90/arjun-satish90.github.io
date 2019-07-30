---
published: true
title: "Set Your Jupyter Notebook Up Right With This Extension"
date: 2019-03-01
categories:
  - Jupyter
  - data science
  - notebook
---
![](https://miro.medium.com/max/2000/1*JHz-azJQJURgya_Fc5QElA.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/aerial-photography-of-sea-1902647/?)*

## A handy Jupyter Notebook extension to help you create more effective notebooks

In the great talk “I Don’t Like Notebooks” ([video](https://www.youtube.com/watch?v=7jiPeIFXb6U&) and [slides](https://docs.google.com/presentation/d/1n2RlMdmv1p25Xy5thJUhkKGvjtV-dkAIsUXP-AL4ffI/edit?#slide=id.g362da58057_0_1)), Joel Grus lays out numerous criticisms of Jupyter Notebooks, perhaps the most popular environment for doing data science. I found the talk instructive — when everyone thinks something is great, you need people who are willing to criticize it so we don’t become complacent. However, I think the problem isn’t the notebook itself, but how it’s used: like any other tool, the Jupyter Notebook can be (and is) frequently abused.

Thus, I would like to amend Grus’ title and state “I Don’t Like _Messy, Untitled, Out-of-Order Notebooks With No Explanations or Comments_.” The Jupyter Notebook was designed for [literate programming](https://en.wikipedia.org/wiki/Literate_programming?) — mixing code, text, results, figures, and **explanations** together into one seamless document. From what I’ve seen, this notion is often completely ignored resulting in awful notebooks flooding repositories on GitHub:

![](https://miro.medium.com/max/2000/1*GCvSTDYdSkiotG1SGdP9gw.png?q=20)
*Don’t let notebooks like this get onto GitHub.*

The problems are clear:

*   **No title**
*   **No explanations of what the code should do or how it works**
*   **Cells run out of order**
*   **Errors in cell output**

The Jupyter Notebook can be an incredibly useful device for learning, teaching, exploration, and communication ([here is a good example](https://github.com/WillKoehrsen/Data-Analysis/blob/master/bayesian_log_reg/Bayesian-Logistic-Regression.ipynb?)). However, notebooks like the above fail on all these counts and it’s nearly impossible to debug someone else’s work or even figure out what they are trying to do when these problems appear. At the very least, anyone should be able to name a notebook something helpful, write a brief introduction, explanation, and conclusion, run the cells in order, and make sure there are no errors before posting the notebook to GitHub.

<!--more-->

* * *

## Solution: The Setup Jupyter Notebook Extension

Rather than just complaining about the problem ([it’s easy to be a critic but a lot harder to do something positive](http://www.theodore-roosevelt.com/trsorbonnespeech.html?)) I decided to see what could be done with Jupyter Notebook extensions. The result is an extension that on opening a new notebook automatically:

*   Creates a template to encourage documentation
*   Inserts commonly used library imports and settings
*   Prompts you repeatedly to change the notebook name from “Untitled”

![](https://miro.medium.com/max/2000/1*M2UL1m3hp7yJetOauNMPZQ.gif?q=20)
*The extension running when a new notebook is opened*

The benefits of this extension are that it changes the defaults. By default, the Jupyter Notebook has no markdown cells, is unnamed, and has no imports. We know that [humans are notoriously bad at changing default settings](https://en.wikipedia.org/wiki/Nudge_(book)?) so why not make the defaults encourage better practices? Think of the Setup extension [as a nudge](https://en.wikipedia.org/wiki/Nudge_theory?) — one that gently pushes you to write better notebooks.

To use this extension:

1.  Install [Jupyter Notebook extensions](/jupyter-notebook-extensions-517fa69d2231?) (which you should be using anyway)
2.  G[o to GitHub and download the](https://github.com/WillKoehrsen/Data-Analysis/tree/master/setup?) `[setup](https://github.com/WillKoehrsen/Data-Analysis/tree/master/setup?)` [folder](https://github.com/WillKoehrsen/Data-Analysis/tree/master/setup?) (it has 3 files)
3.  Run `pip show jupyter_contrib_nbextensions` to find where notebook extensions are installed. On my Windows machine (with anaconda) they are at

`C:\users\willk\anaconda3\lib\site-packages\jupyter_contrib_nbextensions`

and on my mac (without anaconda) they are at:

`/usr/local/lib/python3.6/site-packages/jupyter_contrib_nbextensions`

4\. Place the `setup` folder in `nbextensions/` under the above path:

![](https://miro.medium.com/max/2000/1*8GsulQLRbAAlAUCT0cx0bg.png?q=20)
*5\. Run `jupyter contrib nbextensions install` to install the new extension*

6\. Run a Jupyter Notebook and enable`Setup` on the `nbextensions` tab (if you don’t see this tab, open a notebook and go to `edit > nbextensions config)`

![](https://miro.medium.com/max/2000/1*Z9z7lRWeTPE0B7bzWS8pww.png?q=20)
*Enable the Setup extension on the nbextensions tab*

Now open a new notebook and you’re good to go! You can change the default template in `main.js` (see my [article on writing a Jupyter Notebook extension](https://medium.com/@williamkoehrsen/how-to-write-a-jupyter-notebook-extension-a63f9578a38c?) for more details on how to write your own). The default template and imports are relatively plain, but you can customize them to whatever you want.

![](https://miro.medium.com/max/2000/1*ZLmtwLuO6VyDJX763XLbJg.png?q=20)
*Default template and imports*

If you open an old notebook, you won’t get the default template, but you will be prompted to change the name from `Untitled` every time you run a cell:

![](https://miro.medium.com/max/2000/1*yF1DQxtAmhrJFdJrYHNUFw.gif?q=20)
*The Setup extension will continue prompting until the notebook name is changed from Untitled.*

Sometimes, a little bit of persistence is what you need to change your ways.

## Parting Thoughts

From now on, let’s strive to create better notebooks. It doesn’t take much extra effort and it pays off greatly as others (and your future self) will be able to learn from your notebooks or use the results to make better decisions. Here are a few simple rules for writing effective notebooks:

*   Name your notebooks. Simple but helpful when you have dozens of files.
*   Add clear yet concise explanations of what your code does, how it works, what are the most important results, and what conclusions were drawn. I use a standard template for notebooks to encourage the habit.
*   Run all your cells in order before sharing a notebook and make sure there are no errors.

The Setup extension will not solve all notebook-related problems, but hopefully, the small nudges will encourage you to adopt better habits. It takes a while to build up best practices, but, once you have them down, they tend to stick. With a little bit of extra effort, we can make sure that the next talk someone gives about notebooks is: “I like effective Jupyter Notebooks.”

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will.](http://twitter.com/@koehrsen_will?)
