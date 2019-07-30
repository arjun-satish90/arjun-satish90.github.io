const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/data-visualization-hackathon-style-c6dcaabbf626").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
