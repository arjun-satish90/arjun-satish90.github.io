const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-myth-of-us-vs-them-e0bfccb62f41").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
