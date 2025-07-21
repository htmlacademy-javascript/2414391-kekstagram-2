import {
  imgUploadInput,
  imgUploadModalElement,
  imgUploadModalCloseButton,
  scaleControlSmallerButton,
  scaleControlBiggerButton,
  scaleControlValue,
  imgUploadPreview,
  effectLevelSliderElement,
  effectsInputs,
  effectNoneInput,
  effectLevelContainer,
  effectLevelValueElement
} from './dom-elements.js';
import { onEscapeKeydown } from './utils/on-escape-keydown.js';
import { onUploadImgFormSubmit } from './photo-upload-form-validation.js';

const onphotoUploadModalEscKeydown = onEscapeKeydown(closePhotoUploadModal);

const initializePhotoUploadModal = () => {
  imgUploadInput.addEventListener('change', () => {
    openPhotoUploadModal();
  });
  imgUploadModalCloseButton.addEventListener('click', closePhotoUploadModal);
};

function openPhotoUploadModal() {
  scaleControlValue.value = '100%';
  effectNoneInput.checked = true;
  imgUploadModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onphotoUploadModalEscKeydown);
  document.addEventListener('submit', onUploadImgFormSubmit);
  initializePhotoScaleParams();
  addPhotoEffect();
}

function closePhotoUploadModal() {
  imgUploadModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onphotoUploadModalEscKeydown);
  document.removeEventListener('submit', onUploadImgFormSubmit);
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
}

const changePhotoScale = (scaleValue) => {
  const scale = parseInt(scaleValue.value, 10) / 100;
  imgUploadPreview.style.transform = `scale(${scale})`;
};

const increaseScaleControlValue = () => {
  let currentScaleValue = parseInt(scaleControlValue.value, 10);
  if (currentScaleValue < 100) {
    currentScaleValue += 25;
  }
  if (currentScaleValue > 100) {
    currentScaleValue = 100;
  }

  scaleControlValue.value = `${currentScaleValue}%`;
  changePhotoScale(scaleControlValue);
};

const decreaseScaleControlValue = () => {
  let currentScaleValue = parseInt(scaleControlValue.value, 10);
  if (currentScaleValue > 25) {
    currentScaleValue -= 25;
  }
  if (currentScaleValue < 25) {
    currentScaleValue = 25;
  }

  scaleControlValue.value = `${currentScaleValue}% `;
  changePhotoScale(scaleControlValue);
};

const onScaleControlBiggerButtonClick = () => increaseScaleControlValue();
const onScaleControlSmallerButtonClick = () => decreaseScaleControlValue();

function initializePhotoScaleParams() {
  scaleControlBiggerButton.addEventListener('click', onScaleControlBiggerButtonClick);
  scaleControlSmallerButton.addEventListener('click', onScaleControlSmallerButtonClick);
}

//slider

noUiSlider.create(effectLevelSliderElement, {
  start: 0,
  range: {
    'min': 0,
    'max': 100
  },
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSlider = (min, max, start, step) => {
  effectLevelSliderElement.noUiSlider.updateOptions({
    range: { min, max },
    start,
    step
  });
};

const onEffectItemClick = (evt) => {
  const selectedEffect = evt.target.value;
  if (selectedEffect === 'none') {
    effectLevelContainer.style.display = 'none';
    imgUploadPreview.style.filter = '';
    return;
  }
  effectLevelContainer.style.display = 'block';

  let updateFilter;
  let startValue;

  switch (selectedEffect) {
    case 'chrome':
      startValue = 1;
      updateSlider(0, 1, startValue, 0.1);
      updateFilter = (value) => `grayscale(${value})`;
      break;
    case 'sepia':
      startValue = 1;
      updateSlider(0, 1, startValue, 0.1);
      updateFilter = (value) => `sepia(${value})`;
      break;
    case 'marvin':
      startValue = 100;
      updateSlider(0, 100, startValue, 1);
      updateFilter = (value) => `invert(${value}%)`;
      break;
    case 'phobos':
      startValue = 3;
      updateSlider(0, 3, startValue, 0.1);
      updateFilter = (value) => `blur(${value}px)`;
      break;
    case 'heat':
      startValue = 3;
      updateSlider(1, 3, startValue, 0.1);
      updateFilter = (value) => `brightness(${value})`;
      break;
  }

  effectLevelSliderElement.noUiSlider.off('update');
  effectLevelValueElement.value = startValue;
  imgUploadPreview.style.filter = updateFilter(startValue);

  effectLevelSliderElement.noUiSlider.on('update', () => {
    const value = effectLevelSliderElement.noUiSlider.get();
    effectLevelValueElement.value = value;
    imgUploadPreview.style.filter = updateFilter(value);
  });
};

function addPhotoEffect() {
  effectLevelContainer.style.display = 'none';
  effectsInputs.forEach((element) => {
    element.addEventListener('click', onEffectItemClick);
  });
}

export { initializePhotoUploadModal };
