let glob = require("glob-all");
let PurgecssPlugin = require("purgecss-webpack-plugin");
let path = require("path");

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({

        // Specify the locations of any files you want to scan for class names.
        paths: glob.sync([
          path.join(__dirname, "./**/*.html"),
          path.join(__dirname, "./src/**/*.vue"),
          path.join(__dirname, "./src/**/*.js")
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,

            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ["html", "js", "vue"]
          }
        ]
      })
    ]
  }
}
