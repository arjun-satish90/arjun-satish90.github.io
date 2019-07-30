const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/books-of-2018-f51600aa922a").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
