import { showAlert } from './utils.js';

const URLS = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  SET: 'https://26.javascript.pages.academy/kekstagram',
};

const getServerData = (onSuccess) => {
  fetch(URLS.GET)
    .then((response) => response.json())
    .then((profilesData) => {
      onSuccess(profilesData);
    })
    .catch(() => {
      showAlert('Ошибка');
    });
};

const sendServerData = (onSuccess, onFail, body) => {
  fetch(URLS.SET, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Ошибка');
      }
    })
    .catch(() => {
      onFail('Ошибка');
    });
};

export { getServerData, sendServerData };
