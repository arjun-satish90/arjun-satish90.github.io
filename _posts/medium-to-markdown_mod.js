const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/time-series-analysis-in-python-an-introduction-70d5a5b1d52a").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
