const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/complete-book-list-of-2017-85d1dc79b9d5").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
