const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/interactive-controls-for-jupyter-notebooks-f5c94829aee6").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
