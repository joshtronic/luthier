const initials = (str: string): string => (
  str.trim().split(/\s+/).reduce(
    (result, word) => result + word[0].toUpperCase(),
    '',
  )
);

export { initials };
