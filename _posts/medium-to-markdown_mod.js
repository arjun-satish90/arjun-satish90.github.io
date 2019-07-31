const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/how-to-access-pages-missing-from-the-internet-ba8a399e9739").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
