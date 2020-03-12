const isStudlyCapped = (str: string): boolean => {
  let isStudly = true;
  let shouldBeUpperCased = true;

  str.split('').forEach((chr) => {
    if (isStudly) {
      if (shouldBeUpperCased) {
        if (!/[A-Z]/.test(chr)) {
          isStudly = false;
        }
      } else if (!/[a-z]/.test(chr)) {
        isStudly = false;
      }
    }

    shouldBeUpperCased = !shouldBeUpperCased;
  });

  return isStudly;
};

export { isStudlyCapped };
