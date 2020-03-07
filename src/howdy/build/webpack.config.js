const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/howdy/index.js']
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    library: 'howdy',
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
            presets: ['@babel/preset-env'],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.vue$/,
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
    new BundleAnalyzerPlugin()
  ],
  externals: {
    vue: 'Vue',
    axios: 'axios',
    'animate.css': 'animate.css'
  }
};