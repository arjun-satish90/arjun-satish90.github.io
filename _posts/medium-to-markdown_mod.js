const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/set-your-jupyter-notebook-up-right-with-this-extension-24921838a332").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
