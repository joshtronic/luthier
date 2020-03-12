const isSnakeCased = (str: string): boolean => (
  /^[a-z]+((_[a-z0-9]+)+)?$/.test(str)
);

export { isSnakeCased };
