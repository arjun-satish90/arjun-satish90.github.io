const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/please-steal-my-articles-476e8e5d1ff2").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
