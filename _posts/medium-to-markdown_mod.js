const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/the-worst-they-can-say-is-no-212a1c571aad").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
