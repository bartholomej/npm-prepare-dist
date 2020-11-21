import { cleanPackageJson, copyFiles } from './helpers/global.helper';
import { DIST, FILES, MAIN } from './vars';

export const prepareDist = (
  dist: string = DIST,
  filesToCopy: string[] = FILES,
  main: string = MAIN
) => {
  cleanPackageJson(dist, main);
  copyFiles(dist, filesToCopy);
};
