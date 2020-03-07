const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Components = require('../components.json');
module.exports = {
  mode: 'production',
  entry: Components,
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
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
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'Vue',
    axios: 'axios',
    'animate.css': 'animate.css'
  }
};