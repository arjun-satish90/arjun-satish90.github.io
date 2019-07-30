const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-case-for-criticism-964c43f7e058").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
