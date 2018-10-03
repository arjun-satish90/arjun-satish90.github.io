const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/neural-network-embeddings-explained-4d028e6f0526").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
