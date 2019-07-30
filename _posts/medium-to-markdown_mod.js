const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-non-technical-reading-list-for-data-science-d72451429a70").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
