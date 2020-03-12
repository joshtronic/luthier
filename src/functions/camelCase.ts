import { lowerCaseFirst } from './lowerCaseFirst';
import { pascalCase } from './pascalCase';

const camelCase = (str: string): string => (
  lowerCaseFirst(pascalCase(str))
);

export { camelCase };
