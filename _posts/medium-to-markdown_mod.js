const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/jupyter-notebook-extensions-517fa69d2231").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
