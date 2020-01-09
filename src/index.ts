function toUpperCaseFirst(str: string): string {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

export {
  toUpperCaseFirst,
};
