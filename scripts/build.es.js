const fs = require('fs');
const chalk = require('chalk');
const { build, walkPackageDirs } = require('./build');

console.log(chalk.blue('正在生成es模块!'));
walkPackageDirs((dirName) => {
  fs.mkdirSync(`./packages/${dirName}/dist`,{ recursive:true });
  build({
    input: `./packages/${dirName}/index.ts`,
    output: {
      file: `./packages/${dirName}/dist/index.es.js`,
      format: 'esm',
    },
    external: id => ['resize-observer-polyfill', 'tslib', 'vue'].includes(id) || id.includes('@howdyjs')
  });
});