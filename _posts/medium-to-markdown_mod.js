const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/beyond-accuracy-precision-and-recall-3da06bea9f6c").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
