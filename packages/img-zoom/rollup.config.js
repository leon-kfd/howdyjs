import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
export default {
  input: './index.ts',
  output: [
    {
      format: 'umd',
      name: 'HowdyImgZoom',
      file: './dist/index.js'
    }
  ],
  plugins: [
    typescript(),
    postcss()
  ]
};