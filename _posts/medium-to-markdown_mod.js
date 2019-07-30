const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-next-level-of-data-visualization-in-python-dd6e99039d5e").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
