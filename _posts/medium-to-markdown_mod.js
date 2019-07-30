const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/a-review-of-the-coursera-machine-learning-specialization-b889f5793648").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
