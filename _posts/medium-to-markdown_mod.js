const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-simple-science-of-global-warming-5a2070bcd03a").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
