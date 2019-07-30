const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/automated-feature-engineering-in-python-99baf11cc219").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
