const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-triumph-of-peace-f48500983749").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
