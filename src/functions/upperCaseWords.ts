import { upperCaseFirst } from './upperCaseFirst';

const upperCaseWords = (str: string): string => (
  str.replace(/\b\w/g, (w) => upperCaseFirst(w))
);

export { upperCaseWords };
