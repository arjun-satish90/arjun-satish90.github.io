const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-copernican-principle-and-how-to-use-statistics-to-figure-out-how-long-anything-will-last-9cceb7aba20a").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
