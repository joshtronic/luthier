// TODO: Should expand this to be a rot const that accepts an offset with
// rot13 remaining a first class method.

const rot13 = (str: string): string => (
  str.replace(/[a-z]/gi, (c) => (
    String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13))
  ))
);

export { rot13 };
