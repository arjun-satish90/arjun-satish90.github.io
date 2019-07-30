const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/stock-prediction-in-python-b66555171a2").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
