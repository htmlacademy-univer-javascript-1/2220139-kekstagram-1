const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomNumber = (min, max) => {
  if (max < 0 || min < 0) {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export { isEscapeKey, getRandomElement, getRandomNumber };
