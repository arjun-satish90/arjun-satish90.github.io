const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/100-miles-through-the-park-what-its-like-to-run-a-100-mile-ultramarathon-1ab36c46d76d").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
