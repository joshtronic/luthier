const countWords = (str: string): number => (
  str.trim().split(/\s+/).length
);

export { countWords };
