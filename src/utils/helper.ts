const BASE_FONT_SIZE = 16;

export const remToPx = (rem: string) => {
  return parseInt(rem) * BASE_FONT_SIZE;
};
