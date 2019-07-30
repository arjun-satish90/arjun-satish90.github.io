const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/data-science-a-practical-application-7056ec22d004").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
