import { upperCaseWords } from './upperCaseWords';

const startCase = (str: string): string => (
  upperCaseWords(str.toLowerCase())
);

export { startCase };
