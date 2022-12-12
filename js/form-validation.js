import { isEscapeKey } from './utils.js';
import './scalePhoto.js';
import {
  MAX_HASHTAG_COUNTS,
  VALIDATION_HASHTAG_SIMBOLS,
  MAX_LENGTH_DESCRIPTION,
} from './data.js';
import { resetScale } from './scalePhoto.js';
import { resetEffects } from './photoEffects.js';

const regExpValidionTag = new RegExp(VALIDATION_HASHTAG_SIMBOLS);

const file = document.querySelector('#upload-file');
const body = document.querySelector('body');
const editorImage = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');
const formUpload = document.querySelector('.img-upload__form');
const inputHashtag = formUpload.querySelector('.text__hashtags');
const inputDescription = formUpload.querySelector('.text__description');
const button = formUpload.querySelector('.img-upload__submit');

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

const checkOneHashtag = (tag) => regExpValidionTag.test(tag);
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

inputHashtag.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

inputDescription.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

const closedOnEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closingImageForm();
    evt.preventDefault();
  }
};

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

function closingImageForm() {
  formUpload.reset();
  pristine.reset();
  resetEffects();
  editorImage.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonCancel.removeEventListener('click', closingImageForm);
  document.removeEventListener('keydown', closedOnEscKeyDown);
}

const openingImageForm = () => {
  resetScale();
  editorImage.classList.remove('hidden');
  body.classList.add('modal-open');
  buttonCancel.addEventListener('click', closingImageForm);
  document.addEventListener('keydown', closedOnEscKeyDown);
};

file.addEventListener('change', (evt) => {
  evt.preventDefault();
  openingImageForm();
});

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

formUpload.addEventListener('input', () => {
  const isValid = pristine.validate();
  button.disabled = !isValid;
});
