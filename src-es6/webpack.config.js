var path = require('path');

module.exports = {
  entry: './src-es6/index.js',
  output: {
    filename: 'webpack-es6.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
