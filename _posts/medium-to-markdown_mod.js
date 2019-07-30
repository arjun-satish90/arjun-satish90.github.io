const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/is-the-job-of-data-scientist-at-risk-of-being-automated-60583e96670f").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
