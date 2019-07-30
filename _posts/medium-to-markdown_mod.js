const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/stock-analysis-in-python-a0054e2c1a4c").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
