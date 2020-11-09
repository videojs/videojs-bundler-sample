const config = require('../src-es6/rollup.js');

config.input = config.input.replace('es6', 'es5');

config.output = config.output.map(function(output) {
  output.file = output.file.replace('es6', 'es5');

  return output;
});

module.exports = config;
