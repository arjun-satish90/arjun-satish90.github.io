const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/visualizing-data-with-pair-plots-in-python-f228cf529166").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
