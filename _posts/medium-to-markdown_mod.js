const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/parallelizing-feature-engineering-with-dask-3db88aec33b7").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
