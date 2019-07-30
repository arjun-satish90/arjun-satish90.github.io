const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/has-global-violence-declined-a-look-at-the-data-5af708f47fba").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
