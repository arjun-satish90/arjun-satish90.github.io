const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-feature-selection-tool-for-machine-learning-in-python-b64dd23710f0").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
