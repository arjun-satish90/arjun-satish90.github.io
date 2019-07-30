const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-complete-machine-learning-walk-through-in-python-part-three-388834e8804b").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
