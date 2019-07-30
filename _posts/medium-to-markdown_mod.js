const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://towardsdatascience.com/the-reality-of-global-nuclear-weapons-and-how-russian-nukes-turned-on-your-lights-6d55e056b516").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
