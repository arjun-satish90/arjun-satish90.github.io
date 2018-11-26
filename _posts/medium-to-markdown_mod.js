const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/transfer-learning-with-convolutional-neural-networks-in-pytorch-dd09190245ce").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
