const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/docker-without-the-hassle-b98447caedd8").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
