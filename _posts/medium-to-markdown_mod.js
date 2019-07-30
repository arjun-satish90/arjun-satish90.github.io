const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/machine-learning-kaggle-competition-part-two-improving-e5b4d61ab4b8").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
