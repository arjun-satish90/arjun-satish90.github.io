const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/data-analysis-with-python-19434f5d6324").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
