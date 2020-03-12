const constantCase = (str: string): string => (
  str.toUpperCase().replace(/[^A-Z0-9 ]/g, '').trim().replace(/ +/g, '_')
);

export { constantCase };
