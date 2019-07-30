const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/make-an-effort-not-an-excuse-27e20a568029").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
