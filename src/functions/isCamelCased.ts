const isCamelCased = (str: string): boolean => (
  /^[a-z]+((([A-Z][a-z]+)|([A-Z]?[0-9]+))+)?$/.test(str)
);

export { isCamelCased };
