const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/slow-tech-take-back-your-mind-5d142dc3ccb9").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
