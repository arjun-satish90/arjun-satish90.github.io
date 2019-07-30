const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/machine-learning-kaggle-competition-part-three-optimization-db04ea415507").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
