const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/correlation-vs-causation-a-real-world-example-9e939c85581e").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
