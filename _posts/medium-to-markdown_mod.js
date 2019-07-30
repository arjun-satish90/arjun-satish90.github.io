const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/what-i-learned-from-writing-a-data-science-article-every-week-for-a-year-201c0357e0ce").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
