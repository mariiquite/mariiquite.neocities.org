const htmlmin = require("html-minifier-terser");

module.exports = function (eleventyConfig) {
    //stops default
    eleventyConfig.addGlobalData("permalink", "{{page.filePathStem}}.html");

    return{
        //nunjucks in html
        htmlTemplateEngine: "njk",
        dir: {
            input: "content",
            output: "public"
        }
    };

    eleventyConfig.addTransform("htmlmin", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            });
        return minified;
        }
        return content;
    });
};
