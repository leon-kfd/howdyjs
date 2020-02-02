const hljs = require('highlight.js')
module.exports = {
  productionSourceMap: false,
  publicPath: '/pratice',
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: 'markdown-loader',
          options: {
            highlight: (code) => hljs.highlight('html', code).value,
            // highlight: (code) => hljs.highlightAuto(code).value,
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
          }
        }
      ]
    })
  }
}