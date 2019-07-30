const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/if-your-files-are-saved-only-on-your-laptop-they-might-as-well-not-exist-29f3503750d5").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
