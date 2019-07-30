const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/home-of-the-scared-5af0fe5eab40").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
