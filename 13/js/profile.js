import { getRandomElement, getRandomNumber } from './utils.js';
import { randomAvatar } from './data.js';
import { randomAmountLikes } from './data.js';
import { randomNumberComments } from './data.js';
import { randomNumberID } from './data.js';
import { DESCRIPTIONS } from './data.js';
import { NAMES } from './data.js';
import { MESSAGES } from './data.js';

const createComment = (i) => ({
  id: i,
  avatar: `img/avatar-${getRandomNumber(
    randomAvatar.min,
    randomAvatar.max
  )}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const generateRandomArrayComments = () => {
  const arrayComments = [];
  for (
    let i = getRandomNumber(randomNumberID.min, randomNumberID.max);
    i <= getRandomNumber(randomNumberComments.min, randomNumberComments.max);
    i++
  ) {
    arrayComments.push(createComment(i));
  }
  return arrayComments;
};

const createProfile = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNumber(randomAmountLikes.min, randomAmountLikes.max),
  comments: generateRandomArrayComments(),
  avatar: `avatar-${getRandomNumber(randomAvatar.min, randomAvatar.max)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const generateArrayProfiles = () => {
  const profiles = [];
  for (let i = 1; i <= 25; i++) {
    profiles.push(createProfile(i));
  }
  return profiles;
};

export { generateArrayProfiles };
