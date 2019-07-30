const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/artificial-intelligence-part-1-search-a1667a5991e5").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
