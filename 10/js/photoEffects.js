import { EFFECTS } from './data.js';

const imgUploadSection = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const slider = imgUploadSection.querySelector('.effect-level__slider');
const imgPreview = form.querySelector('.img-upload__preview > img');
const effectLevel = form.querySelector('.effect-level__value');
const uploadEffectLevel = form.querySelector('.img-upload__effect-level');

const DEFAULT_EFFECT = EFFECTS[0];

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  uploadEffectLevel.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    uploadEffectLevel.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imgPreview.style.filter = 'none';
  imgPreview.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = slider.noUiSlider.get();
  imgPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

window.noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();
form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
