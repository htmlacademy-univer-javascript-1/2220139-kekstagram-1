const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min >= max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEscape = (evt) => evt.key === 'Escape';

export {getRandomNumber, isEscape};
