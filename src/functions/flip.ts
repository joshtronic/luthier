import { flipCharacters } from '../mappings/flipCharacters';

const flip = (str: string): string => (
  str.split('').reverse().map((chr: string) => (
    flipCharacters[chr] || chr
  )).join('')
);

export { flip };
