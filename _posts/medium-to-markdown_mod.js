const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/top-books-of-2017-c338630b99ad").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
