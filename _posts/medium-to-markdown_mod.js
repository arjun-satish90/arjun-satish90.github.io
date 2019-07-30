const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/machine-learning-kaggle-competition-part-one-getting-started-32fb9ff47426").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
