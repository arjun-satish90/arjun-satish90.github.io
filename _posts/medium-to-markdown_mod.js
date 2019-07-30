const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-technology-frontier-db4dd061ea97").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
