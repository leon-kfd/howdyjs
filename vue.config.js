const hljs = require('highlight.js')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  productionSourceMap: !isProduction,
  publicPath: '/howdy-old',
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {
            highlight: (code) => {
              if (code[0] === '<' || code.includes('template') || code.includes('script')) {
                return hljs.highlight('html', code).value
              } else if (code.includes('npm')) {
                return hljs.highlight('bash', code).value
              } else {
                return hljs.highlight('js', code).value
              }
            },
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
    if (isProduction) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        mockjs: 'Mock',
        axios: 'axios'
      }
    }
    config.plugins.push(
      // new BundleAnalyzerPlugin()
    )
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://kongfandong.cn',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
