const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-perils-of-rare-events-27dd1ae4e35e").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
