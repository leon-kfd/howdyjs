const fs = require('fs');
const chalk = require('chalk');
// const { terser } = require('rollup-plugin-terser');
const { build, walkPackageDirs } = require('./build');

console.log(chalk.blue('正在生成cjs模块!'));
walkPackageDirs((dirName) => {
  fs.mkdirSync(`./packages/${dirName}/dist`,{ recursive:true });
  build({
    input: `./packages/${dirName}/index.ts`,
    output: {
      file: `./packages/${dirName}/dist/index.js`,
      exports:'named',
      format: 'cjs',
    },
    external: id => ['resize-observer-polyfill', 'tslib', 'vue'].includes(id) || id.includes('@howdyjs'),
    // terser: terser({
    //   output: {
    //     comments: false
    //   }
    // })
  });
});