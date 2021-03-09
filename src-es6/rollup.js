const babel = require('@rollup/plugin-babel').default;
const cjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;


module.exports = {
  input: 'src-es6/index.js',
  plugins: [
    cjs({
      sourceMap: false
    }),
    resolve(),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', {
          modules: false
        }]
      ],
      plugins: ['@babel/plugin-transform-runtime']
    })
  ],
  output: [{
    name: `rollupIifeTest`,
    file: 'dist/rollup-es6-iife.js',
    format: 'iife',
    exports: 'auto'
  }, {
    name: `rollupUmdTest`,
    file: 'dist/rollup-es6-umd.js',
    format: 'umd',
    exports: 'auto'
  }, {
    name: `rollupCjsTest`,
    file: 'dist/rollup-es6-cjs.js',
    format: 'cjs',
    exports: 'auto'
  }, {
    name: `rollupEsTest`,
    file: 'dist/rollup-es6-es.js',
    format: 'es',
    exports: 'auto'
  }, {
    name: `rollupAmdTest`,
    file: 'dist/rollup-es6-amd.js',
    format: 'amd',
    exports: 'auto'
  }, {
    name: `rollupSystemTest`,
    file: 'dist/rollup-es6-system.js',
    format: 'system',
    exports: 'auto'
  }]
};
