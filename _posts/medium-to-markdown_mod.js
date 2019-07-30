const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/what-i-learned-in-2018-30e2b5481c01").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
