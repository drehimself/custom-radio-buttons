const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  "plugins": [
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer')(),
    purgecss({
      content: ['./**/*.html', './src/**/*.vue', './src/**/*.js'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "vue"]
        }
      ]
    })

  ]
}
