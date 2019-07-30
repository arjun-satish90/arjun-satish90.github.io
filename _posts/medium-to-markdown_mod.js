const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/python-is-the-perfect-tool-for-any-problem-f2ba42889a85").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
