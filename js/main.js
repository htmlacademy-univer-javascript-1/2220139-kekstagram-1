const COUNT_OBJECT = 25;

const NAME = [
  'Григорий',
  'Виктор',
  'Павел',
  'Алексей',
  'Кирилл'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Фото',
  'Природа Урала',
  'Кавказские горы',
  'Моя квартира'
];

const arrayObjects = [];

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

const commentsArray = (count) => {
  const array = [];
  for(let i = 0; i < count; i++){
    array.push({
      id: i,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
      name: NAME[getRandomNumber(0,NAME.length - 1)]
    });
  }
  return array;
};

const addPhotos = () => {
  for(let i = 0; i< COUNT_OBJECT; i++){
    arrayObjects.push({
      id: i,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
      likes: getRandomNumber(15, 200),
      comments: commentsArray(getRandomNumber(0, 2))
    });
  }
};

addPhotos();
