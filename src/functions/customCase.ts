const customCase = (delimiter: string, str: string): string => (
  str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, delimiter)
);

export { customCase };
