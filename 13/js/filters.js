import { renderPhotos } from './pictures.js';
import { getRandomUniqueElements, debounce } from './utils.js';

const RANDOM_POST_COUNT = 10;

const filters = document.querySelector('.img-filters');
const randomFilter = filters.querySelector('#filter-random');
const descussedPostsFilter = filters.querySelector('#filter-discussed');
const defaultFilter = filters.querySelector('#filter-default');


const removePictures = () => {
  const picturesAll = document.querySelectorAll('.picture');
  picturesAll.forEach((picture) => {
    picture.remove();
  });
};

const removeActiveButton = () => {
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

const onRandomFilter = (posts) => {
  const postsArray = posts.slice();
  return getRandomUniqueElements(postsArray).slice(0, RANDOM_POST_COUNT);
};

const onDescussedPostsFilter = (posts) => {
  const postsArray = posts.slice();
  return postsArray.sort(compareComments);

};

const onDefaultPostsFilter = (posts) => posts.slice();

function compareComments(postsA, postsB) {
  const commentsA = postsA.comments.length;
  const commentsB = postsB.comments.length;
  return commentsB - commentsA;
}

const renderPicturesFilter = (posts) => {
  removePictures();
  renderPhotos(posts);
};

const renderFilters = (data) => {
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', debounce((evt) => {
    if (evt.target === randomFilter || evt.target === descussedPostsFilter || evt.target === defaultFilter) {
      removeActiveButton();
    }
    switch (evt.target) {
      case randomFilter:
        renderPicturesFilter(onRandomFilter(data));
        randomFilter.classList.add('img-filters__button--active');
        break;
      case descussedPostsFilter:
        renderPicturesFilter(onDescussedPostsFilter(data));
        descussedPostsFilter.classList.add('img-filters__button--active');
        break;
      case defaultFilter:
        renderPicturesFilter(onDefaultPostsFilter(data));
        defaultFilter.classList.add('img-filters__button--active');
        break;
    }
  }));
};


export {
  renderFilters
};
