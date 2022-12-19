import { isEscapeKey } from './utils.js';
import { resetScale } from './scale-photo.js';
import { resetEffects } from './photo-effects.js';
import { sendServerData } from './api.js';
import { pristine } from './validate.js';
import { photoUploader } from './photo-uploader.js';

const file = document.querySelector('#upload-file');
const body = document.querySelector('body');
const editorImage = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');
const formUpload = document.querySelector('.img-upload__form');
const inputHashtag = formUpload.querySelector('.text__hashtags');
const inputDescription = formUpload.querySelector('.text__description');
const button = formUpload.querySelector('.img-upload__submit');


const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');


const onErrorMessage = errorMessageTemplate.cloneNode(true);
const buttonErrorMessage = onErrorMessage.querySelector('.error__button');
const onSuccessMessage = successMessageTemplate.cloneNode(true);
const buttonSuccessMessage = onSuccessMessage.querySelector('.success__button');


const messageStatusSubmit = (popappClass) => {
  switch (popappClass) {
    case onErrorMessage:
      closingImageFormTwo();
      document.body.append(onErrorMessage);
      onErrorMessage.addEventListener('click', onAnotherClosedError);
      body.addEventListener('keydown', onAnotherClosedError);
      buttonErrorMessage.addEventListener('click', onAnotherClosedError);
      break;
    case onSuccessMessage:
      closingImageForm();
      document.body.append(onSuccessMessage);
      onSuccessMessage.addEventListener('click', onAnotherClosedSuccess);
      body.addEventListener('keydown', onAnotherClosedSuccess);
      buttonSuccessMessage.addEventListener('click', onAnotherClosedSuccess);
      break;
  }
};


function onAnotherClosedError(evt) {
  if (isEscapeKey(evt) || evt.target === onErrorMessage || evt.target === buttonErrorMessage) {
    onErrorMessage.removeEventListener('click', onAnotherClosedError);
    body.removeEventListener('keydown', onAnotherClosedError);
    buttonErrorMessage.removeEventListener('click', onAnotherClosedError);
    document.body.removeChild(onErrorMessage);
  }
}

function onAnotherClosedSuccess(evt) {
  if (isEscapeKey(evt) || evt.target === onSuccessMessage || evt.target === buttonSuccessMessage) {
    onSuccessMessage.removeEventListener('click', onAnotherClosedSuccess);
    body.removeEventListener('keydown', onAnotherClosedSuccess);
    buttonSuccessMessage.removeEventListener('click', onAnotherClosedSuccess);
    document.body.removeChild(onSuccessMessage);
  }
}

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

function closingImageFormTwo() {
  editorImage.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonCancel.removeEventListener('click', closingImageForm);
  formUpload.removeEventListener('keydown', closedOnEscKeyDown);
}

function closingImageForm() {
  formUpload.reset();
  pristine.reset();
  resetEffects();
  editorImage.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonCancel.removeEventListener('click', closingImageForm);
  formUpload.removeEventListener('keydown', closedOnEscKeyDown);
}

function openingImageForm() {
  resetScale();
  editorImage.classList.remove('hidden');
  body.classList.add('modal-open');
  buttonCancel.addEventListener('click', closingImageForm);
  formUpload.addEventListener('keydown', closedOnEscKeyDown);
}

file.addEventListener('change', (evt) => {
  evt.preventDefault();
  openingImageForm();
  photoUploader();
});

const blockSubmitButton = () => {
  button.disabled = true;
  button.textContent = 'Сохранение...';
};

const unblockSubmitButton = () => {
  button.disabled = false;
  button.textContent = 'Сохранить';
};

const sendToServer = (onSuccess) => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendServerData(() => {
        onSuccess();
        messageStatusSubmit(onSuccessMessage);
        unblockSubmitButton();
      },
      () => {
        messageStatusSubmit(onErrorMessage);
        unblockSubmitButton();
      },
      new FormData(evt.target));
    }
  });
};

sendToServer(closingImageForm);

export {
  openingImageForm,
};
