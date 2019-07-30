const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/random-forest-simple-explanation-377895a60d2d").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
