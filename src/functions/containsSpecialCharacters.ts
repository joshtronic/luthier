const containsSpecialCharacters = (str: string): boolean => (
  /[^a-z0-9]/i.test(str)
);

export { containsSpecialCharacters };
