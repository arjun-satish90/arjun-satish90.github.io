const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/introduction-to-bayesian-linear-regression-e66e60791ea7").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
