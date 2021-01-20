const typescript = require('rollup-plugin-typescript2');
module.exports = {
  input: './index.ts',
  output: [
    {
      format: 'umd',
      name: 'HowdyResize',
      file: './dist/index.js'
    }
  ],
  plugins: [
    typescript()
  ]
};