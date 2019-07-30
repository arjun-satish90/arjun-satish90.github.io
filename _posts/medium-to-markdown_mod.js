const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-theory-of-prediction-10cb335cc3f2").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
