const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/data-wrangling-with-python-and-sqlite-900d21bc5a53").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
