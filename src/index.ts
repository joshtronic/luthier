// TODO: camelCase
// TODO: countWords
// TODO: kebabCase
// TODO: pascalCase
// TODO: rot13
// TODO: snakeCase
// TODO: stripeTags
// TODO: studlyCaps
// TODO: wrapWords

function lowerCaseFirst(str: string): string {
  return str.replace(/^\w/, (c) => c.toLowerCase());
}

function lowerCaseWords(str: string): string {
  return str.replace(/\w\S*/g, (w) => lowerCaseFirst(w));
}

function reverse(str: string): string {
  return str.split('').reverse().join('');
}

function shuffle(str: string): string {
  let arr = str.split('');

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join('');
}

function startCase(str: string): string {
  return upperCaseWords(str.toLowerCase());
}

function upperCaseFirst(str: string): string {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

function upperCaseWords(str: string): string {
  return str.replace(/\w\S*/g, (w) => upperCaseFirst(w));
}

export {
  lowerCaseFirst,
  lowerCaseWords,
  reverse,
  shuffle,
  startCase,
  upperCaseFirst,
  upperCaseWords,
};
