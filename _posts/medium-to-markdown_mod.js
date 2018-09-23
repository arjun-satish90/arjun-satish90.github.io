const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/wikipedia-data-science-working-with-the-worlds-largest-encyclopedia-c08efbac5f5c").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
