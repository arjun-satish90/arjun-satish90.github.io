const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/masters-in-computer-science-at-georgia-tech-personal-statement-898e41e861bf").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
