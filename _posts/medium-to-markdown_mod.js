const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-ascent-of-humanity-54ce077aeada").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
