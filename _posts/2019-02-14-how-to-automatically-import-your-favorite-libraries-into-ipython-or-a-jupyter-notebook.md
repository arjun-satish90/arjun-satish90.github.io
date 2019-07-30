---
published: true
title: "How To Automatically Import Your Favorite Libraries Into Ipython Or A Jupyter Notebook"
date: 2019-02-14
categories:
  - Jupyter
  - data science
  - automation
---
![](https://miro.medium.com/max/2000/1*ksJRrucXsh9xer-3Rg94Lw.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/ocean-water-wave-photo-1295138/?)*

## No more typing “import pandas as pd” 10 times a day

If you often use interactive IPython sessions or Jupyter Notebooks and you’re getting tired of importing the same libraries over and over, try this:

1.  Navigate to `~/.ipython/profile_default`
2.  Create a folder called `startup` if it’s not already there
3.  Add a new Python file called `start.py`
4.  Put your favorite imports in this file
5.  Launch IPython or a Jupyter Notebook and your favorite libraries will be automatically loaded every time!

Here are the steps in visual form. First, the location of `start.py`:

![](https://miro.medium.com/max/2000/1*mCOwMZe1DGX-JK8rNZjZaQ.png?q=20)
*Full path of Python script is ~/.ipython/profile_default/startup/start.py*

Here is the contents of my `start.py`:

<script src="https://gist.github.com/WillKoehrsen/e9f584287af4451bcd2029f75392b34e.js"></script>

Now, when I launch an IPython session, I see this:

![](https://miro.medium.com/max/2000/1*4ZFOcm9dpVghaLogOa-d-A.png?q=20)

<!--more-->

*We can confirm that the libraries have been loaded by inspecting `globals()` :*

```

globals()['pd']

<module 'pandas' from '/usr/local/lib/python3.6/site-packages/pandas/__init__.py'>

globals()['np']
<module 'numpy' from '/usr/local/lib/python3.6/site-packages/numpy/__init__.py'>

```

We’re all good to use our interactive session now without having to type the commands to load these libraries! This also works in Jupyter Notebook.

## Notes

*   The file can be named anything ( `start.py` is easy to remember) and you can have multiple files in `startup/`. They are executed in [lexicographical order](https://stackoverflow.com/questions/45950646/what-is-lexicographical-order?) when IPython is launched.
*   If you’re running this in a Jupyter Notebook, you won’t get a cell with the imports so when you share the notebook, make sure to copy over the `start.py` contents into the first cell. This will let people know what libraries you are using. (As an alternative, you can use the `default_cell` [Jupyter Notebook extension I wrote.](/how-to-write-a-jupyter-notebook-extension-a63f9578a38c?))
*   If you work on multiple computers, you’ll have to repeat the steps. Make sure to use the same `start.py` script so you get the same imports!
*   Thanks to this [Stack Overflow answer](https://stackoverflow.com/a/11124846/5755357?) and the [official docs](https://ipython.readthedocs.io/en/stable/interactive/tutorial.html?#startup-files)

* * *

This is certainly not [life-changing (unlike writing about data science)](/what-i-learned-from-writing-a-data-science-article-every-week-for-a-year-201c0357e0ce?) but it saves you a few seconds every time you start IPython. It’s also useful as a demonstration of how you can customize your work environment to be as efficient as possible. There are many other tips you can find by reading documentation (such as for [IPython magic commands](https://ipython.readthedocs.io/en/stable/interactive/magics.html?)), experimenting on your own, or even following helpful Twitter accounts. If you find yourself frustrated with an inefficiency like typing `import pandas as pd` ten times a day, don’t just accept it, find a better way to work.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will](http://twitter.com/@koehrsen_will?).
