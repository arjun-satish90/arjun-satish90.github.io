const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/learn-by-sharing-4461cc93f8c1").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
