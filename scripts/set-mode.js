const fs = require('fs');
const { glob } = require('glob');
const args = require('minimist')(process.argv.slice(2));

const mode = args['mode'];

const run = async () => {
  if (mode === 'dev') {
    const files = await glob('packages/*/package.json')
    files.map(file => {
      const backupFileName = file.replace('package.json', 'package-backup.json');
      fs.renameSync(file, backupFileName);
    })
  } else {
    const files = await glob('packages/*/package-backup.json')
    files.map(file => {
      const backupFileName = file.replace('package-backup.json', 'package.json');
      fs.renameSync(file, backupFileName);
    })
  }
}

run()
