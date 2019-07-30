const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/how-to-get-the-right-data-why-not-ask-for-it-d26ced1bbd46").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
