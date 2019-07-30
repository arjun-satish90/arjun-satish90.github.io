const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-complete-machine-learning-walk-through-in-python-part-one-c62152f39420").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
