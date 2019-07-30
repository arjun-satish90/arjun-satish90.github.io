---
published: true
title: "The Next Level Of Data Visualization In Python"
date: 2019-01-08
categories:
  - visualization
  - python
  - data analysis
---
![](https://miro.medium.com/max/2000/1*AwEPBK2mt55RQKhGYqMHUw.jpeg?q=20)
*[(Source)](https://www.pexels.com/photo/adventure-climb-clouds-daylight-371400/?)*

## How to make great-looking, fully-interactive plots with a single line of Python

The sunk-cost fallacy is one of many y spent — sunk — so much time in the pursuit. The sunk-cost fallacy applies to staying in bad jobs longer than we should, slaving away at a project even when it’s clear it won’t work, and yes, continuing to use a tedious, outdated plotting library — matplotlib — when more efficient, interactive, and better-looking alternatives exist.

Over the past few months, I’ve realized the only reason I use `matplotlib` is the hundreds of hours I’ve sunk into learning the [convoluted syntax](https://matplotlib.org/api/api_overview.html?). This complication leads to hours of frustration on StackOverflow figuring out how to [format dates](https://stackoverflow.com/questions/14946371/editing-the-date-formatting-of-x-axis-tick-labels-in-matplotlib?) or [add a second y-axis](https://stackoverflow.com/questions/14762181/adding-a-y-axis-label-to-secondary-y-axis-in-matplotlib?). Fortunately, this is a great time for Python plotting, and after exploring [the options](https://www.fusioncharts.com/blog/best-python-data-visualization-libraries/?), a clear winner — in terms of ease-of-use, documentation, and functionality — is the [plotly Python library.](https://plot.ly/python/?) In this article, we’ll dive right into `plotly`, learning how to make better plots in less time — often with one line of code.

All of the code for this article is [available on GitHub](https://github.com/WillKoehrsen/Data-Analysis/blob/master/plotly/Plotly%20Whirlwind%20Introduction.ipynb?). The charts are all interactive and can be viewed on [NBViewer here](https://nbviewer.jupyter.org/github/WillKoehrsen/Data-Analysis/blob/master/plotly/Plotly%20Whirlwind%20Introduction.ipynb?).

![](https://miro.medium.com/max/2000/1*D10-b01-wu-Unv-2WThIsQ.png?q=20)
*Example of plotly figures ([source](https://plot.ly/python/mixed-subplots/?))*

<!--more-->

## Plotly Brief Overview

The `[plotly](https://plot.ly/python/?)` [](https://plot.ly/python/?) Python package is an open-source library built on `[plotly.js](https://plot.ly/javascript/?)` [which](https://plot.ly/javascript/?) in turn is built on `[d3.js](https://d3js.org/?)`[.](https://d3js.org/?) We’ll be using a wrapper on plotly called `[cufflinks](https://github.com/santosjorge/cufflinks?)` designed to work with Pandas dataframes. So, our entire stack is cufflinks > plotly > plotly.js > d3.js which means we get the efficiency of coding in Python with the incredible [interactive graphics capabilities of d3.](https://github.com/d3/d3/wiki/Gallery?)

([Plotly itself](https://plot.ly/?) is a graphics company with several products and open-source tools. The Python library is free to use, and we can make unlimited charts in offline mode plus up to 25 charts in online mode to [share with the world](http://help.plot.ly/how-sharing-works-in-plotly/?).)

All the work in this article was done in a Jupyter Notebook with plotly + cufflinks running in offline mode. After installing plotly and cufflinks with `pip install cufflinks plotly` import the following to run in Jupyter:

```
# Standard plotly imports
import plotly.plotly as py
import plotly.graph_objs as go

from plotly.offline import iplot, init_notebook_mode

# Using plotly + cufflinks in offline mode
import cufflinks
cufflinks.go_offline(connected=True)
init_notebook_mode(connected=True)
```

* * *

# Single Variable Distributions: Histograms and Boxplots

Single variable — univariate — plots are a standard way to start an analysis and the histogram is a go-to plot (er/why-we-love-the-cdf-and-do-not-like-histograms-that-much.html?)) for graphing a distribution. Here, using my Medium article statistics (you can see [how to get your own stats here](/analyzing-medium-story-stats-with-python-24c6491a8ff0?) or use [mine here](https://github.com/WillKoehrsen/Data-Analysis/tree/master/medium?)) let’s make an interactive histogram of the number of claps for articles ( `df` is a standard Pandas dataframe):

```
df['claps'].iplot(kind='hist', xTitle='claps',
                  yTitle='count', title='Claps Distribution')
```

![](https://miro.medium.com/max/2000/1*K6LaqTMhc46R8QQuEIczxw.gif?q=20)
*Interactive histogram made with plotly+cufflinks*

For those used to `matplotlib`, all we have to do is add one more letter ( `iplot` instead of `plot`) and we get a much better-looking and interactive chart! We can click on the data to get more details, zoom into sections of the plot, and as we’ll see later, select different categories to highlight.

If we want to plot overlaid histograms, that’s just as simple:

```
df[['time_started', 'time_published']].iplot(
    kind='hist',
    histnorm='percent',
    barmode='overlay',
    xTitle='Time of Day',
    yTitle='(%) of Articles',
    title='Time Started and Time Published')
```

![](https://miro.medium.com/max/2000/1*8mWiMINu1zgn3irxptzEig.png?q=20)

With a little bit of `pandas` manipulation, we can do a barplot:

```
# Resample to monthly frequency and plot
df2 = df[['view','reads','published_date']].\
         set_index('published_date').\
         resample('M').mean()

df2.iplot(kind='bar', xTitle='Date', yTitle='Average',
    title='Monthly Average Views and Reads')
```

![](https://miro.medium.com/max/2000/1*B6v0i6KNUjL5ifaH1ijlAg.png?q=20)

As we saw, we can combine the [power of pandas](https://pandas.pydata.org/pandas-docs/stable/10min.html?) with plotly + cufflinks. For a boxplot of the fans per story by publication, we use a `pivot` and then plot:

```
df.pivot(columns='publication', values='fans').iplot(
        kind='box',
        yTitle='fans',
        title='Fans Distribution by Publication')
```

![](https://miro.medium.com/max/2000/1*-8CsIE7F5G6sJLMv1ADJOQ.gif?q=20)


The benefits of interactivity are that we can explore and subset the data as we like. There’s a lot of information in a boxplot, and without the ability to see the numbers, we’ll miss most of it!

* * *

# Scatterplots

The scatterplot is the heart of most analyses. It allows us to see the evolution of a variable over time or the relationship between two (or more) variables.

## Time-Series

A considerable portion of real-world data has a time element. Luckily, plotly + cufflinks was designed with time-series visualizations in mind. Let’s make a dataframe of my TDS articles and look at how the trends have changed.

```
 Create a dataframe of Towards Data Science Articles
tds = df[df['publication'] == 'Towards Data Science'].\
         set_index('published_date')

# Plot read time as a time series
tds[['claps', 'fans', 'title']].iplot(
    y='claps', mode='lines+markers', secondary_y = 'fans',
    secondary_y_title='Fans', xTitle='Date', yTitle='Claps',
    text='title', title='Fans and Claps over Time')
```

![](https://miro.medium.com/max/2000/1*wIvogMrLisCfBjB9Yq0krw.gif?q=20)
*Here we are doing quite a few different things all in one line:*

*   Getting a nicely formatted time-series x-axis automatically
*   Adding a secondary y-axis because our variables have different ranges
*   Adding in the title of the articles as hover information

For more information, we can also add in text annotations quite easily:

```
tds_monthly_totals.iplot(
    mode='lines+markers+text',
    text=text,
    y='word_count',
    opacity=0.8,
    xTitle='Date',
    yTitle='Word Count',
    title='Total Word Count by Month')
```

![](https://miro.medium.com/max/2000/1*Nq4AdwAcB-GCjf-LUMUTLg.png?q=20)
*Scatterplot with annotations*

For a two-variable scatter plot colored by a third categorical variable we use:

```
df.iplot(
    x='read_time',
    y='read_ratio',
    # Specify the category
    categories='publication',
    xTitle='Read Time',
    yTitle='Reading Percent',
    title='Reading Percent vs Read Ratio by Publication')
```

![](https://miro.medium.com/max/2000/1*3HF7uBmfLsETJvRNSy4i7Q.png?q=20)


Let’s get a little more sophisticated by using a log axis — specified as a plotly layout — (see the [Plotly documentation](https://plot.ly/python/reference/?) for the layout specifics) and sizing the bubbles by a numeric variable:

```
tds.iplot(
    x='word_count',
    y='reads',
    size='read_ratio',
    text=text,
    mode='markers',
    # Log xaxis
    layout=dict(
        xaxis=dict(type='log', title='Word Count'),
        yaxis=dict(title='Reads'),
        title='Reads vs Log Word Count Sized by Read Ratio'))
```

![](https://miro.medium.com/max/2000/1*jyy7yVdGrVU7DuE6Z9sRhw.png?q=20)


With a little more work ([see notebook for details](https://nbviewer.jupyter.org/github/WillKoehrsen/Data-Analysis/blob/master/plotly/Plotly%20Whirlwind%20Introduction.ipynb?#)), we can even put four variables ([this is not advised](https://serialmentor.com/dataviz/aesthetic-mapping.html?)) on one graph!

![](https://miro.medium.com/max/2000/1*53LomjR1tGSySn7Aevtd6g.png?q=20)

As before, we can combine pandas with plotly+cufflinks for useful plots

```
df.pivot_table(
    values='views', index='published_date',
    columns='publication').cumsum().iplot(
        mode='markers+lines',
        size=8,
        symbol=[1, 2, 3, 4, 5],
        layout=dict(
            xaxis=dict(title='Date'),
            yaxis=dict(type='log', title='Total Views'),
            title='Total Views over Time by Publication'))
```

![](https://miro.medium.com/max/2000/1*Sge36RGR1LEDzyvVq98nNg.png?q=20)
See the notebook [or the documentation](https://plot.ly/python/?) for more examples of added functionality. We can add in text annotations, reference lines, and best-fit lines to our plots with a single line of code, and still with all the interaction.

* * *

# Advanced Plots

Now we’ll get into a few plots that you probably won’t use all that often, but which can be quite impressive. We’ll use the [plotly](https://plot.ly/python/figure-factory-subplots/?) `[figure_factory](https://plot.ly/python/figure-factory-subplots/?)`, to keep even these incredible plots to one line.

## Scatter Matrix

When we want to explore relationships among many variables, a [scattermatrix](https://junkcharts.typepad.com/junk_charts/2010/06/the-scatterplot-matrix-a-great-tool.html?) (also called a splom) is a great option:

```
import plotly.figure_factory as ff
figure = ff.create_scatterplotmatrix(
    df[['claps', 'publication', 'views',
        'read_ratio','word_count']],
    diag='histogram',
    index='publication')
```

![](https://miro.medium.com/max/2000/1*Q2j1aD-xmizC2X2ujlnkNQ.png?q=20)
*Even this plot is completely interactive allowing us to explore the data.*

## Correlation Heatmap

To visualize the correlations between numeric variables, we calculate the correlations and then make an annotated heatmap:

```
corrs = df.corr()
figure = ff.create_annotated_heatmap(
    z=corrs.values,
    x=list(corrs.columns),
    y=list(corrs.index),
    annotation_text=corrs.round(2).values,
    showscale=True)
```

![](https://miro.medium.com/max/2000/1*-p9xUe9IKKQtMNHFe8zI2Q.png?q=20)
The list of plots goes on and on. Cufflinks also has several themes we can use to get completely different styling with no effort. For example, below we have a ratio plot in the “space” theme and a spread plot in “ggplot”:

![](https://miro.medium.com/max/2000/1*ck5W8aXaltVq1-PjG9hB7g.png?q=20)
![](https://miro.medium.com/max/2000/1*u0jL7qsDJpWLupcqjKlZTQ.png?q=20)

We also get 3D plots (surface and bubble):

![](https://miro.medium.com/max/2000/1*RiKPOE_KL5SNAmRODhx5Ww.png?q=20)
![](https://miro.medium.com/max/2000/1*dgCraKLvY80K-JYiIyi1Sg.png?q=20)

For those [who are so inclined](https://interworks.com/blog/rcurtis/2018/01/19/friends-dont-let-friends-make-pie-charts/?), you can even make a pie chart:

![](https://miro.medium.com/max/2000/1*hMhRTpErpCoqQQ0RdBnowQ.png?q=20)


## Editing in Plotly Chart Studio

When you make these plots in the notebook, you’ll notice a small link on the lower right-hand side on the graph that says “Export to plot.ly”. If you click that link, you are then taken to the [chart studio](https://plot.ly/create/?) where you can touch up your plot for a final presentation. You can add annotations, specify the colors, and generally clean everything up for a great figure. Then, you can publish your figure online so anyone can find it with the link.

Below are two charts I touched up in Chart Studio:

![](https://miro.medium.com/max/2000/1*_RU1jyZy2YCYQnXdEcB52Q.png?q=20)
![](https://miro.medium.com/max/2000/1*yzvK0uzeO002hADIu0HRVg.png?q=20)
With everything mentioned here, we are still not exploring the full capabilities of the library! I’d encourage you to check out both the plotly and the cufflinks documentation for more incredible graphics.

![](https://miro.medium.com/max/2000/1*AVImsTA-CXldeDDsbBzvkg.png?q=20)
*Plotly interactive graphics of wind farms in United States [(Source)](https://plot.ly/python/dropdowns/?)*

# Conclusions

The worst part about the sunk cost fallacy is you only realize how much time you’ve wasted after you’ve quit the endeavor. Fortunately, now that I’ve made the mistake of sticking with `matploblib` for too long, you don’t have to!

When thinking about plotting libraries, there are a few things we want:

1.  **One-line charts for rapid exploration**
2.  **Interactive elements for subsetting/investigating data**
3.  **Option to dig into details as needed**
4.  **Easy customization for final presentation**

As of right now, the best option for doing all of these in [Python is plotly](https://plot.ly/python/?). Plotly allows us to make visualizations quickly and helps us get better insight into our data through interactivity. Also, let’s admit it, plotting should be one of the most enjoyable parts of data science! With other libraries, plotting turned into a tedious task, but with plotly, there is again joy in making a great figure!

![](https://miro.medium.com/max/2000/1*oBjoGHxcba2UsQbFf5bzsw.png?q=20)
*A plot of my enjoyment with plotting in Python over time*

Now that it’s 2019, it is time to upgrade your Python plotting library for better efficiency, functionality, and aesthetics in your data science visualizations.

* * *

As always, I welcome feedback and constructive criticism. I can be reached on Twitter [@koehrsen_will.](http://twitter.com/@koehrsen_will?)
