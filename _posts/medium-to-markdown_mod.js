const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/recurrent-neural-networks-by-example-in-python-ffd204f99470").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
