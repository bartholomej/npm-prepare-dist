#!/usr/bin/env node

import minimist from 'minimist';
import { version } from './package.json';
import { prepareDist } from './src/index';

let stop = false;

const args = minimist(process.argv.slice(2), {
  string: ['dist', 'files', 'main'],
  alias: { h: 'help', v: 'version', d: 'dist', f: 'files', m: 'main' },
  unknown: (err) => {
    console.log('Those arguments are not supported:', err);
    console.log('Use: `npm-prepare-dist --help` for more options.');
    stop = true;
  }
});

if (args.help) {
  const log = args.help ? console.log : console.error;
  log(`Usage: npm-prepare-dist ${version}`);
  log('');
  log('  Prepare dist folder before publish into the npm repository');
  log('');
  log('Options:');
  log('');
  log('  -h, --help          Display this usage info');
  log('  -d, --dist          Dist folder path');
  log('  -f, --files         Array of files to copy into dist folder as well');
  log('  -m, --main          Main folder where. Usually where is your index.js');
  log(' ');
  process.exit(args.help ? 0 : 1);
} else if (args.version) {
  console.log(`npm-prepare-dist v${version}`);
} else if (stop) {
  // Do nothing if there is something suspicious
} else {
  const dist = args.dist ? args.dist : undefined;
  const filesToCopy = args.files ? args.files : undefined;
  const main = args.main ? args.main : undefined;

  prepareDist(dist, filesToCopy, main);
}
