const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/how-to-create-value-with-machine-learning-eb09585b332e").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
