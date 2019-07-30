const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/real-life-superpowers-c69d66b51ed4").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
