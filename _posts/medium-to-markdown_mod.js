const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/notes-on-software-construction-from-code-complete-8d2a8a959c69").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
