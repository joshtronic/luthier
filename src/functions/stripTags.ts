const stripTags = (str: string): string => (
  str.replace(/<[^>]*>/g, '')
);

export { stripTags };
