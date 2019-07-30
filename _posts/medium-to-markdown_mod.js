const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/automated-machine-learning-on-the-cloud-in-python-47cf568859f").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
