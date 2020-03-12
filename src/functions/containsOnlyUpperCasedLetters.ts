const containsOnlyUpperCasedLetters = (str: string): boolean => (
  /^[A-Z]+$/.test(str)
);

export { containsOnlyUpperCasedLetters };
