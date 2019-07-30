const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/controlling-the-web-with-python-6fceb22c5f08").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
