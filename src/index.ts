import { flipCharacters } from './flip-characters';

const camelCase = (str: string): string => {
  return lowerCaseFirst(pascalCase(str));
};

// TODO
// const chunk = (str: string): string => {
//   return str;
// };

const constantCase = (str: string): string => {
  return str.toUpperCase().replace(/[^A-Z ]/g, '').trim().replace(/ +/g, '_');
};

const countLines = (str: string): number => {
  return str.split(/\r\n|\r|\n/).length;
};

const countWords = (str: string): number => {
  return str.trim().split(/\s+/).length;
};

const dotCase = (str: string): string => {
  return str.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '.');
};

const flip = (str: string): string => {
  return str.split('').reverse().map((chr: string) => {
    return flipCharacters[chr] || chr;
  }).join('');
};

const initials = (str: string): string => {
  return str.trim().split(/\s+/).reduce(
    (result, word) => result + word[0].toUpperCase(),
    '',
  );
};

const kebabCase = (str: string): string => {
  return str.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '-');
};

// TODO: Need to figure out the best mapping.
// const leet = (str: string): string => {
//   return str;
// };

const lowerCaseFirst = (str: string): string => {
  return str.replace(/^\w/, (c) => c.toLowerCase());
};

const lowerCaseWords = (str: string): string => {
  return str.replace(/\w\S*/g, (w) => lowerCaseFirst(w));
};

const numeronym = (str: string): string => {
  const trimmed = str.trim().replace(/\s+/, '').split('');

  if (trimmed.length === 1) {
    return trimmed[0];
  }

  if (trimmed.length === 2) {
    return trimmed[0] + (trimmed.length - 1);
  }

  return trimmed[0] + (trimmed.length - 2) + trimmed.slice(-1);
};

const pascalCase = (str: string): string => {
  return upperCaseWords(str.toLowerCase().replace(/[^a-z ]/g, '')).replace(/ /g, '');
};

// TODO
// const plural = (str: string): string => {
//   return str;
// };

// TODO:
// const possessive = (str: string): string => {
//
// };

// TODO: Expand to accept types of characters (alpha, numeric, upper and lower
// case, spaces) and perhaps an option to omit similar characters (1 vs l and
// the like) as well as duplicates.
const random = (length: number): string => {
  const randomInt = (min: number, max: number) => (
    Math.random() * (max - min) + min
  );

  let str = '';

  for (let i = 0; i < length; i++) {
    str += String.fromCharCode(randomInt(32, 126));
  }

  return str;
};

const reverse = (str: string): string => {
  return str.split('').reverse().join('');
};

// TODO: Should expand this to be a rot const that accepts an offset with
// rot13 remaining a first class method.
const rot13 = (str: string): string => {
  return str.replace(/[a-z]/gi, (c) => (
    String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13))
  ));
};

const shuffle = (str: string): string => {
  let arr = str.split('');

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join('');
};

// TODO: Would love to make this work, but suspect the logic will be pretty
// intense to handle things like calves -> calf. Probably want to load in a
// dictionary of words and go from there.
// const singular = (str: string): string => {
//   return str;
// };

const snakeCase = (str: string): string => {
  return str.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '_');
};

const startCase = (str: string): string => {
  return upperCaseWords(str.toLowerCase());
};

const stripTags = (str: string): string => {
  return str.replace(/<[^>]*>/g, '');
};

const studlyCaps = (str: string): string => {
  return str.split('').reduce(
    (result, chr: string) => {
      if (/[a-z]/i.test(chr)) {
        if (result.upper) {
          result.string += chr.toUpperCase();
          result.upper = false;
        } else {
          result.string += chr.toLowerCase();
          result.upper = true;
        }
      } else {
        result.string += chr;
      }

      return result;
    },
    { string: '', upper: true },
  ).string;
};

const upperCaseFirst = (str: string): string => {
  return str.replace(/^\w/, (c) => c.toUpperCase());
};

const upperCaseWords = (str: string): string => {
  return str.replace(/\w\S*/g, (w) => upperCaseFirst(w));
};

// TODO
// const wrapWords = (str: string): string => {
//   return str;
// };

export {
  camelCase,
  // chunk,
  constantCase,
  countLines,
  countWords,
  dotCase,
  flip,
  initials,
  kebabCase,
  // leet,
  lowerCaseFirst,
  lowerCaseWords,
  numeronym,
  pascalCase,
  // plural,
  // possessive,
  random,
  reverse,
  rot13,
  shuffle,
  // singular,
  snakeCase,
  startCase,
  stripTags,
  studlyCaps,
  upperCaseFirst,
  upperCaseWords,
  // wrapWords,
};
