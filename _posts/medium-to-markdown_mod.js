const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-multiple-comparisons-problem-e5573e8b9578").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
