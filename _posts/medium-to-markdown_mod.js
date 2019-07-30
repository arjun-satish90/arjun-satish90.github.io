const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/how-90-of-drivers-can-be-above-average-or-why-you-need-to-be-careful-when-talking-statistics-3df7be5cb116").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
