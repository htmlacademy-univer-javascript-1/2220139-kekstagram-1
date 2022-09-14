/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
   С помощью деструктуризации, если передача значения «min» меньше, чем значение «max», то значения будут меняться местами.
   Функция выведет «-1» если «min» или «max» меньше нуля.
*/

const getRandomIntInclusive = (min, max) => {
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
getRandomIntInclusive(1, 10);

/* Функция для проверки максимальной длины строки.
   Если строка меньше либо равна максимальному значению, то выведет "true", если больше, то выведет "false"
*/

const checkLongString = (str, maxLength) => {
  if (String(str).length <= maxLength) {
    return true;
  }
  else {
    return false;
  }
};
checkLongString('Привет', 10);
