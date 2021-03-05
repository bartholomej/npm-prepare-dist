import { cleanPackageJson, copyFiles } from './helpers/global.helper';
import { DIST, FILES, MAIN } from './vars';

export const prepareDist = (
  dist: string = DIST,
  filesToCopy: string[] = FILES,
  main: string = MAIN,
  removeDeps: boolean = false,
  removeScripts: string[] = []
) => {
  cleanPackageJson(dist, main, removeDeps, removeScripts);
  copyFiles(dist, filesToCopy);
};
