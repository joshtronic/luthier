const isPascalCased = (str: string): boolean => (
  /^[A-Z][a-z]+((([A-Z][a-z]+)|([A-Z]?[0-9]+))+)?$/.test(str)
);

export { isPascalCased };
