const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-failures-of-common-sense-1a4be757d09b").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
