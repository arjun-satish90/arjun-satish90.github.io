const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-disappearing-poor-6c68789e5a53").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
