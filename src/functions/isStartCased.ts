const isStartCased = (str: string): boolean => (
  /^[A-Z][a-z]+(( (([A-Z][a-z]+)|[0-9]+))+)?$/.test(str)
);

export { isStartCased };
