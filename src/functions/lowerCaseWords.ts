import { lowerCaseFirst } from './lowerCaseFirst';

const lowerCaseWords = (str: string): string => (
  str.replace(/\w\S*/g, (w) => lowerCaseFirst(w))
);

export { lowerCaseWords };
