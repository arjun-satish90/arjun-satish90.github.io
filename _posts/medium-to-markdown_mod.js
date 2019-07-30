const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/overfitting-vs-underfitting-a-complete-example-d05dd7e19765").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
