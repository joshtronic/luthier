const upperCaseFirst = (str: string): string => (
  str.replace(/^\w/, (c) => c.toUpperCase())
);

export { upperCaseFirst };
