const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-poisson-distribution-and-poisson-process-explained-4e2cb17d459").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
