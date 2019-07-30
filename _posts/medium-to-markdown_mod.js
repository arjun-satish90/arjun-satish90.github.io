const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/bayes-rule-applied-75965e4482ff").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
