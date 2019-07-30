const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/improving-random-forest-in-python-part-1-893916666cd").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
