import { PARAMETRS_SCALE } from './data.js';

const uploadScale = document.querySelector('.img-upload__scale');
const biggerButton = uploadScale.querySelector('.scale__control--bigger');
const smallerButton = uploadScale.querySelector('.scale__control--smaller');
const imgPreview = document.querySelector('.img-upload__preview img');
const scaleValue = document.querySelector('.scale__control--value');

const resetScale = () => {
  scaleValue.value = `${PARAMETRS_SCALE.start}%`;
  imgPreview.style.transform = `scale(${scaleValue.value})`;
};

const onBiggerButton = () => {
  let parseIntValue = parseInt(scaleValue.value, 10);
  if (parseIntValue < PARAMETRS_SCALE.maxSize) {
    imgPreview.style.transform = `scale(${(parseIntValue +=
      PARAMETRS_SCALE.step)}%)`;
    scaleValue.value = `${parseIntValue}%`;
  }
};

const onSmallerButton = () => {
  let parseIntValue = parseInt(scaleValue.value, 10);
  if (parseIntValue > PARAMETRS_SCALE.minSize) {
    imgPreview.style.transform = `scale(${(parseIntValue -=
      PARAMETRS_SCALE.step)}%)`;
    scaleValue.value = `${parseIntValue}%`;
  }
};

uploadScale.addEventListener('click', (evt) => {
  if (evt.target === biggerButton) {
    onBiggerButton();
  }
  if (evt.target === smallerButton) {
    onSmallerButton();
  }
});

export { resetScale };
