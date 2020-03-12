const dotCase = (str: string): string => (
  str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, '.')
);

export { dotCase };
