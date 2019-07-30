const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/@williamkoehrsen/screw-the-environment-but-consider-your-wallet-a4f7cd3d3161").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
