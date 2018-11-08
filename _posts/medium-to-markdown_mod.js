const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-power-of-i-dont-know-590ab40d1995").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
