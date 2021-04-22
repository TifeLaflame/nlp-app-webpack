const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: '/\.js$',
        exclude: /nodemodules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: []
}