const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
