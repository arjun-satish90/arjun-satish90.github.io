const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/lessons-from-how-to-lie-with-statistics-57060c0d2f19").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
