const studlyCaps = (str: string): string => (
  str.toLowerCase().replace(/[^a-z]/g, '').split('').reduce(
    (previousResult, chr: string) => {
      const result = previousResult;

      if (result.upper) {
        result.string += chr.toUpperCase();
        result.upper = false;
      } else {
        result.string += chr.toLowerCase();
        result.upper = true;
      }

      return result;
    },
    {
      string: '',
      upper: true,
    },
  ).string
);

export { studlyCaps };
