import { copyFileSync, writeFileSync } from 'fs';
import path, { join } from 'path';

const currentPath = path.resolve('./');

const originalPackage = require(`${currentPath}/package.json`);
/**
 * Copy README into `dist` folder
 * @param {string} distFolder Build folder
 * @param {string[]} files Get all listed files and copy into dist folder. Eg. license, readme...
 */
export const copyFiles = (distFolder: string, files: string[]): void => {
  // Set header text
  if (files.length) {
    console.log('\x1b[32m', 'Those files copied into `dist` folder:');
  }
  for (const file of files) {
    copyFileSync(`${currentPath}/${file}`, `${currentPath}/${distFolder}/${file}`);
    console.log(` – ./${distFolder}/${file}`);
  }
  // Reset color
  if (files.length) {
    console.log('\x1b[0m');
  }
};

/**
 * Clean package.json
 * @param {string} distFolder Build folder
 * @param {string} main Main file folder
 */
export const cleanPackageJson = (distFolder: string, main: string): void => {
  // Modify package.json and copy into dist folder
  const pkg: Record<string, any> = originalPackage;

  // Add js module
  pkg.module = `${main}index.js`;
  // Add main script
  pkg.main = `${main}index.js`;
  // Add main typescript definitions
  pkg.types = `${main}index.d.ts`;

  // Remove unused devDepes
  delete pkg.devDependencies;
  // Remove husky if exist
  delete pkg.husky;

  try {
    writeFileSync(join(currentPath, `${distFolder}`, 'package.json'), JSON.stringify(pkg, null, 2));
    console.log(
      '\x1b[32m',
      `File './${distFolder}/package.json' was modified and now is ready for distribution.`,
      '\x1b[0m'
    );
  } catch (e) {
    console.error('Error modifing package.json', e);
  }
};
