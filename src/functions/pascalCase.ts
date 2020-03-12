import { upperCaseWords } from './upperCaseWords';

const pascalCase = (str: string): string => (
  upperCaseWords(str.toLowerCase().replace(/[^a-z0-9 ]/g, '')).replace(/ /g, '')
);

export { pascalCase };
