const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Components = require('../components.json');
module.exports = {
  mode: 'production',
  entry: Components,
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
    // libraryExport: 'default',
    path: path.resolve(__dirname, '../lib')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "env",
                {
                  "loose": true,
                  "modules": false,
                  "targets": {
                    "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                  }
                }
              ],
              "stage-2"
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)?$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ],
  externals: {
    vue: 'Vue',
    axios: 'axios',
    'animate.css': 'animate.css'
  }
};