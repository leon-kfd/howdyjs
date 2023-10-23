const fs = require('fs');
const path = require('path');
const rollup = require('rollup');
const esbuild = require('rollup-plugin-esbuild');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const { rimraf } = require('rimraf');
const chalk = require('chalk');
const { gzipSync } = require('zlib');

const buildPackage = async () => {
  const dirNames = fs.readdirSync('packages');
  // const whiteList = ['shared'];
  const whiteList = []
  const packages = []
  dirNames.forEach(dirName => {
    const dirPath = path.resolve('packages', dirName);
    const state = fs.statSync(dirPath);
    // 寻找包文件夹
    if (state.isDirectory() && !whiteList.includes(dirName)) {
      rimraf(`./packages/${dirName}/dist`)
      packages.push(dirName)
    }
  });
  await Promise.all(packages.map(p => build(p)))
}

const build = async (dirName) => {
  fs.mkdirSync(`./packages/${dirName}/dist`,{ recursive:true });
  const input = `./packages/${dirName}/index.ts`
  const external = id => ['vue'].includes(id) || id.includes('@howdyjs')
  const getBundle = async ({ minify } = {
    minify: false
  }) => {
    return await rollup.rollup({ 
      input, 
      plugins: [
        vue({
          include: /\.vue$/,
          preprocessStyles: true
        }),
        esbuild.default({
          minify
        }),
        postcss()
      ], 
      external 
    });
  }

  // CommonJS
  const cjsOutput = {
    file: `./packages/${dirName}/dist/index.js`,
    exports:'named',
    format: 'cjs',
  }
  await (await getBundle()).write(cjsOutput)

  // ESM
  const esmOutput = {
    file: `./packages/${dirName}/dist/index.es.js`,
    format: 'esm',
  }
  await (await getBundle()).write(esmOutput)

  // UMD
  const umdOutput = {
    file: `./packages/${dirName}/dist/index.umd.js`,
    format: 'umd',
    exports:'named',
    name: `Howdy${toCamelCase(dirName)}`,
    globals: {
      'vue': 'Vue',
      '@howdyjs/to-drag': 'HowdyToDrag'
    }
  }
  await (await getBundle({ minify: true })).write(umdOutput)

  console.log(`${chalk.yellow(chalk.bold(`[${dirName}]`))} build success!`);
  const arr = [cjsOutput.file, esmOutput.file, umdOutput.file];
  arr.map(file => {
    const { minSize, gzippedSize } = calcFileSize(file)
    console.log(`${chalk.green(chalk.bold(file))} | size: ${minSize}kb | gzip: ${gzippedSize}kb`)
  })
  console.log('')
}


function toCamelCase(name) {
  return name.split('-').map(str => {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
  }).join('');
}

function calcFileSize(file) {
  const code = fs.readFileSync(file);
  const minSize = (code.length / 1024).toFixed(2);
  const gzipped = gzipSync(code);
  const gzippedSize = (gzipped.length / 1024).toFixed(2);
  return {
    minSize,
    gzippedSize
  }
}

buildPackage()