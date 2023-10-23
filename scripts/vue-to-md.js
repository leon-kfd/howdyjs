const fs = require('fs');
const { glob } = require('glob');

const classifys = fs.readdirSync('src/pages');
classifys.map(classify => {
  fs.mkdirSync(`src/code/${classify}`, { recursive: true });
});

const run = async () => {
  const files = await glob('src/pages/**/example/example*.vue')
  files.map(file => {
    const codeFileName = file.replace('pages', 'code').replace(/example[/\\]/, '').replace('vue', 'md');
    const code = fs.readFileSync(file, 'utf8');
    const output = `\`\`\`vue\n${code}\`\`\``;
    fs.writeFileSync(codeFileName, output);
  });
}

run()