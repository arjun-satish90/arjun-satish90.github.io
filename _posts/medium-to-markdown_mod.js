const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-vanquishing-of-war-plague-and-famine-b424ac967a41").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
