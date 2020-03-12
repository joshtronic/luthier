const lowerCaseFirst = (str: string): string => (
  str.replace(/^\w/, (c) => c.toLowerCase())
);

export { lowerCaseFirst };
