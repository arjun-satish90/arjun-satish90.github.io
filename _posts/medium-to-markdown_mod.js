const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/unintended-consequences-and-goodharts-law-68d60a94705c").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
