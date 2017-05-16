import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import path from 'path';

export default {
  entry: 'src-es6/index.js',
  format: 'iife',
  plugins: [
    alias({
      'videojs-vtt.js': path.resolve(__dirname, '../node_modules/videojs-vtt.js/dist/vtt.js')
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    cjs({
      sourceMap: false
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: ['external-helpers']
    })
  ],
  dest: 'dist/rollup-es6.js'
};
