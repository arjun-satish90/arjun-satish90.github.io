const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/biases-and-how-to-overcome-them-692c8c35f4a5").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
