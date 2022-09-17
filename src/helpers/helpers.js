export function numbersStyle(arg) {
  const x = arg.split('').reverse()
    .map((el, i) => ((i + 1) % 3 === 0 ? `${` ${el}`}` : el))
    .reverse()
    .join('');
  return x;
}

export const ratingColor = (num) => {
  if (num < 4) {
    return 'grey';
  }
  if (num < 8) {
    return 'yellow';
  }
  return 'green';
};
