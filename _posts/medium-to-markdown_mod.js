const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/predicting-the-frequency-of-asteroid-impacts-with-a-poisson-processes-98d483efa61d").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
