import {
  MAX_HASHTAG_COUNTS,
  VALIDATION_HASHTAG_SIMBOLS,
  MAX_LENGTH_DESCRIPTION,
} from './data.js';

const regExpValidTag = new RegExp(VALIDATION_HASHTAG_SIMBOLS);

const formUpload = document.querySelector('.img-upload__form');
const inputDescription = formUpload.querySelector('.text__description');
const inputHashtag = formUpload.querySelector('.text__hashtags');

const checkLengthDescriptionPhoto = (text) =>
  text.length <= MAX_LENGTH_DESCRIPTION;

const checkDublicateHashtags = (value) => {
  const hashtags = value
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((tag) => tag !== '');
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
};

const checkOneHashtag = (tag) => regExpValidTag.test(tag);
const checkValidHashtags = (tags) => {
  if (tags === '') {
    return true;
  }
  return tags.trim().split(' ').every(checkOneHashtag);
};

const hashtagsMaxCount = (tags) =>
  tags
    .trim()
    .split(' ')
    .filter((tag) => tag !== '').length <= MAX_HASHTAG_COUNTS;

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper-valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper-error',
});

pristine.addValidator(
  inputDescription,
  checkLengthDescriptionPhoto,
  'Максимум 140 символов'
);
pristine.addValidator(
  inputHashtag,
  checkDublicateHashtags,
  'Хэш-теги не должны повторяться'
);
pristine.addValidator(
  inputHashtag,
  hashtagsMaxCount,
  'Нельзя указать больше 5 хэш-тегов'
);
pristine.addValidator(
  inputHashtag,
  checkValidHashtags,
  'Хэш-теги содержат недопустимые символы'
);

export { pristine };
