import { renderPhotos } from './pictures.js';
import './forms.js';
import './photoEffects.js';
import { sendRequest } from './api.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPhotos(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

sendRequest(onSuccess, 'GET');
