const containsOnlyLetters = (str: string): boolean => (
  /^[a-z]+$/i.test(str)
);

export { containsOnlyLetters };
