const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/a-data-science-public-service-announcement-fe81fbe6dc3f").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
