const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/how-to-avoid-common-difficulties-in-your-data-science-programming-environment-1b78af2977df").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
