import { showAlert } from './utils.js';

const getServerData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((profilesData) => {
      onSuccess(profilesData);
    })
    .catch(() => {
      showAlert('Ошибка');
    });
};

const sendServerData = (onSuccess, onFail, body) => {
  fetch('https://26.javascript.pages.academy/kekstagram', {
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
