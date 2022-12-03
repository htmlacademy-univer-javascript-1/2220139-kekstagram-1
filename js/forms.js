import {isEscape} from './utils.js';
import {inputHashtag, pristine, button} from './hashtags-pristine.js';

const form = document.querySelector('#upload-select-image');
const file = form.querySelector('#upload-file');
const buttonCancel = form.querySelector('#upload-cancel');

const onDocumentEscKeyDown = (evt) => {
  if (isEscape(evt) && !evt.target.classList.contains('text__description') && !evt.target.classList.contains('text__hashtags')) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    inputHashtag.value = '';
    button.disabled = !pristine.validate();
    file.value = '';
    form.querySelector('.text__description').value = '';
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

file.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscKeyDown);
});

buttonCancel.addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  inputHashtag.value = '';
  button.disabled = !pristine.validate();
  file.value = '';
  form.querySelector('.text__description').value = '';
  document.removeEventListener('keydown', onDocumentEscKeyDown);
});

export {file};
