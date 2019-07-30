const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/markov-chain-monte-carlo-in-python-44f7e609be98").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
