const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/random-forest-in-python-24d0893d51c0").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
