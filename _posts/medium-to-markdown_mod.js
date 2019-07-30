const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/analyzing-medium-story-stats-with-python-24c6491a8ff0").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
