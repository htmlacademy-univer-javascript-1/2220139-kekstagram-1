const randomAvatar = {
  min: 1,
  max: 6,
};

const randomAmountLikes = {
  min: 15,
  max: 200,
};

const randomNumberComments = {
  min: 5,
  max: 150,
};

const randomNumberID = {
  min: 1,
  max: 10,
};

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0.1,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const MAX_HASHTAG_COUNTS = 5;
const VALIDATION_HASHTAG_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_LENGTH_DESCRIPTION = 140;

const PARAMETRS_SCALE = {
  minSize: 25,
  maxSize: 100,
  step: 25,
  start: 100,
};

const NAME = ['Григорий', 'Виктор', 'Павел', 'Алексей', 'Кирилл'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Фото',
  'Природа Урала',
  'Кавказские горы',
  'Моя квартира',
];

export {
  randomAvatar,
  randomAmountLikes,
  randomNumberComments,
  randomNumberID,
  DESCRIPTIONS,
  NAME,
  MESSAGES,
  EFFECTS,
  MAX_HASHTAG_COUNTS,
  VALIDATION_HASHTAG_SIMBOLS,
  MAX_LENGTH_DESCRIPTION,
  PARAMETRS_SCALE,
};
