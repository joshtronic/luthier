const numeronym = (str: string): string => {
  const trimmed = str.trim().replace(/\s+/, '').split('');

  if (trimmed.length === 1) {
    return trimmed[0];
  }

  if (trimmed.length === 2) {
    return trimmed[0] + (trimmed.length - 1);
  }

  return trimmed[0] + (trimmed.length - 2) + trimmed.slice(-1);
};

export { numeronym };
