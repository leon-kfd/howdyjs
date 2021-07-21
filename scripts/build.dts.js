const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ts = require('typescript');
console.log(chalk.blue('正在生成dts!'));
const tsFiles = [];
walkDir('packages', path => {
  const files = fs.readdirSync(path);
  files.map(file => {
    if (/\.ts$/.test(file)) {
      tsFiles.push(`${path}/${file}`);
    }
  });
});
compile(tsFiles);

// 遇到文件执行回调
function walkDir(distDir, callback) {
  const whiteList = ['shared'];
  const fileOrDirs = fs.readdirSync(distDir);
  for (const fileOrDir of fileOrDirs) {
    const path = `${distDir}/${fileOrDir}`;
    if (!whiteList.includes(fileOrDir)) {
      callback(path);
    }
  }
}

// 编译dts
function compile(fileNames) {
  const options = {
    declaration: true,
    emitDeclarationOnly: true,
  };
  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => {
    const typeFileName = path.basename(fileName);
    const typeDir = path.dirname(fileName);
    const filePath = path.join(`${typeDir}/dist`, typeFileName);
    if (!fs.existsSync(typeDir)) {
      fs.mkdirSync(typeDir, {
        recursive: true
      });
    }
    fs.writeFileSync(filePath, contents);
    console.log(chalk.green(filePath));
  };
  const program = ts.createProgram(fileNames, options, host);
  program.emit();
}