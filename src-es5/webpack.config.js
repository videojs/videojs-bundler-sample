var path = require('path');

module.exports = {
  entry: './src-es5/index.js',
  output: {
    filename: 'webpack-es5.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    mainFields: ['browser', 'main']
  }
};
