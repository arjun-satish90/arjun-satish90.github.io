const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/feature-engineering-what-powers-machine-learning-93ab191bcc2d").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
