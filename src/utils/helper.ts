const BASE_FONT_SIZE = 16;

export const remToPx = (rem: string) => {
  const numericValue = parseFloat(rem);
  return Math.round(numericValue * BASE_FONT_SIZE);
};

export const capitalize = (text: string) =>
  text[0].toUpperCase() + text.slice(1);
