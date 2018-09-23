const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/converting-medium-posts-to-markdown-for-your-blog-5d6830408467").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
