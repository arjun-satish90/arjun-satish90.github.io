const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-great-public-health-conspiracy-73f7ac6fb4e0").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
