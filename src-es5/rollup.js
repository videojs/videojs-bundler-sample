const config = require('../src-es6/rollup.js');
const resolve = require('@rollup/plugin-node-resolve').default;

config.input = config.input.replace('es6', 'es5');

config.plugins[1] = resolve({mainFields: ['main']});

config.output = config.output.map(function(output) {
  output.file = output.file.replace('es6', 'es5');

  return output;
});

module.exports = config;
