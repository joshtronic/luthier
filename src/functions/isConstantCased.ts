const isConstantCased = (str: string): boolean => (
  /^[A-Z]+((_([A-Z]|[0-9])+)+)?$/.test(str)
);

export { isConstantCased };
