const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/my-weaknesses-as-a-data-scientist-1310dab9f566").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
