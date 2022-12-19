import { showFullPicture, renderCommentList } from './full-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (picture) => {
  const photoBlock = pictureTemplate.cloneNode(true);
  photoBlock.querySelector('.picture__comments').textContent = picture.comments.length;
  photoBlock.querySelector('.picture__img').src = picture.url;
  photoBlock.querySelector('.picture__likes').textContent = picture.likes;
  photoBlock.addEventListener('click', (evt) => {
    evt.preventDefault();
    showFullPicture(picture);
    renderCommentList();
  });
  return photoBlock;
};

const renderPhotos = (serverData) => {
  const pictureFragment = document.createDocumentFragment();
  serverData.forEach((photo) => {
    pictureFragment.appendChild(renderPhoto(photo));
  });
  pictures.appendChild(pictureFragment);

};

export {
  renderPhotos
};
