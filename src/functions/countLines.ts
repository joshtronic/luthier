const countLines = (str: string): number => (
  str.split(/\r\n|\r|\n/).length
);

export { countLines };
