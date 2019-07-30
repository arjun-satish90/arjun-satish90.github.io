const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/exploratory-data-analysis-with-r-f9d3a4eb6b16").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
