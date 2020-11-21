import { DIST, FILES, MAIN } from 'vars';
import { cleanPackageJson, copyFiles } from './helpers/global.helper';

export const prepareDist = (
  dist: string = DIST,
  filesToCopy: string[] = FILES,
  main: string = MAIN
) => {
  cleanPackageJson(dist, main);
  copyFiles(dist, filesToCopy);
};
