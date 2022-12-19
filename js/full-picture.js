import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClosed = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.comments-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentContent = commentList.querySelector('.social__comment');
const counterLoadComment = bigPicture.querySelector('.social__comment-count');

let copyArrayComments = [];

const onDocumentEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFullPicture();
  }
};

function closeFullPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClosed.removeEventListener('click', closeFullPicture);
  document.removeEventListener('keydown', onDocumentEscKeyDown);
  commentLoader.removeEventListener('click', renderCommentList);
  commentList.innerHTML = '';
}

const getCommentItem = (comment) => {
  const commentSimular = commentContent.cloneNode(true);
  commentSimular.querySelector('.social__picture').src = comment.avatar;
  commentSimular.querySelector('.social__picture').alt = comment.name;
  commentSimular.querySelector('.social__text').textContent = comment.message;
  return commentSimular;
};

const liveCommentCounter = () => {
  counterLoadComment.textContent = `${commentList.children.length} из ${commentCount.textContent} комментариев`;
};

const hidingCommentButton = () => {
  if (copyArrayComments.length === 0) {
    commentLoader.classList.add('hidden');
  }
};

const renderComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentFragment.appendChild(getCommentItem(comment));
  });
  commentList.appendChild(commentFragment);
  hidingCommentButton();
  liveCommentCounter();

};

function renderCommentList() {
  renderComments(copyArrayComments.splice(0, 5));
}

const showFullPicture = (picture) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  commentCount.textContent = picture.comments.length;
  counterLoadComment.textContent = `0 из ${commentCount.textContent} комментариев`;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  bigPictureClosed.addEventListener('click', closeFullPicture);
  document.addEventListener('keydown', onDocumentEscKeyDown);
  commentLoader.addEventListener('click', renderCommentList);
  copyArrayComments = picture.comments.slice();
  commentList.innerHTML = '';
};

export {
  showFullPicture,
  renderCommentList,
};
