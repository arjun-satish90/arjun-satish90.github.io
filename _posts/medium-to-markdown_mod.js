const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/nasa-internship-report-dd8a23aaf58a").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
