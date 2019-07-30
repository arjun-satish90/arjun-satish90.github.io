const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/bayesian-linear-regression-in-python-using-machine-learning-to-predict-student-grades-part-2-b72059a8ac7e").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
