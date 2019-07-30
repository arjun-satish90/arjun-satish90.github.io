const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/histograms-and-density-plots-in-python-f6bda88f5ac0").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
