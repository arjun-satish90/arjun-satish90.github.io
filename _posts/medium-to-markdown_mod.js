const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/announcing-the-reality-project-e16cc71abb64").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
