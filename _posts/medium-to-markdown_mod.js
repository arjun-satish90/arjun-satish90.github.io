const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/deep-neural-network-classifier-32c12ff46b6c").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
