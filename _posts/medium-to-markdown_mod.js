const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/feature-labs-engineering/featuretools-on-spark-e5aa67eaf807").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
