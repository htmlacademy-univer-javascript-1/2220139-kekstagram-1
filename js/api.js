import { showAlert } from './utils.js';

const Urls = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  SET: 'https://26.javascript.pages.academy/kekstagram',
};

const sendRequest = (onSuccess, method, body) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: body,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Ошибка загрузки изображений');
    });
};

export { sendRequest };
