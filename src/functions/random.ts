// TODO: Expand to accept types of characters (alpha, numeric, upper and lower
// case, spaces) and perhaps an option to omit similar characters (1 vs l and
// the like) as well as duplicates.

const random = (length: number): string => {
  const randomInt = (min: number, max: number) => (
    Math.random() * (max - min) + min
  );

  let str = '';

  for (let i = 0; i < length; i += 1) {
    str += String.fromCharCode(randomInt(32, 126));
  }

  return str;
};

export { random };
