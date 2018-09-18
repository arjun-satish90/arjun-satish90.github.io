const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-most-important-part-of-a-data-science-project-is-writing-a-blog-post-50715f37833a").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
