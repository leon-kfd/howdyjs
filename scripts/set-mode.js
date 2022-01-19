const fs = require('fs');
const glob = require('glob');
const args = require('minimist')(process.argv.slice(2));

const mode = args['mode'];

if (mode === 'dev') {
  glob('packages/*/package.json', (err, files) => {
    if (err) {
      throw err;
    }
    files.map(file => {
      const backupFileName = file.replace('package.json', 'package-backup.json');
      fs.renameSync(file, backupFileName);
    });
  });
} else {
  glob('packages/*/package-backup.json', (err, files) => {
    if (err) {
      throw err;
    }
    files.map(file => {
      const backupFileName = file.replace('package-backup.json', 'package.json');
      fs.renameSync(file, backupFileName);
    });
  });
}

