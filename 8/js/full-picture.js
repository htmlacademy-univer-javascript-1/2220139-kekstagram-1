import {isEscape} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const comments = bigPicture.querySelector('.social__comments');
const commentChild = comments.children[0];

const getCommentItem = (comment) => {
  const newElement  = commentChild.cloneNode(true);
  const newElementPicture = newElement.querySelector('.social__picture');

  newElementPicture.src = comment.avatar;
  newElementPicture.alt = comment.name;

  newElement.querySelector('.social__text').textContent = comment.message;

  return newElement;
};

const onDocumentEscKeyDown = (evt) => {
  if (isEscape(evt)) {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
  document.removeEventListener('keydown', onDocumentEscKeyDown);
};

const addPictureEventHandler = (picture, pictureData) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
    bigPicture.querySelector('.likes-count').textConetent = pictureData.likes;
    bigPicture.querySelector('.comments-count').textConetent = pictureData.comments.length;
    bigPicture.querySelector('.social__caption').textConetent = pictureData.description;

    comments.innerHTML = '';

    pictureData.comments.forEach((comment) => {
      comments.appendChild(getCommentItem(comment));
    });

    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');

    document.addEventListener('keydown', onDocumentEscKeyDown);
  });
};

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentEscKeyDown);
});

export {addPictureEventHandler};
