const containsOnlyNumbers = (str: string): boolean => (
  /^[0-9]+$/.test(str)
);

export { containsOnlyNumbers };
