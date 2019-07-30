const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/controlling-your-location-in-google-chrome-6c0b216d1ba1").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
