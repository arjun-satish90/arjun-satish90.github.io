const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/deploying-a-python-web-app-on-aws-57ed772b2319").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
