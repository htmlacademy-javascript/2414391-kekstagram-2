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

  scaleControlValue.value = `${currentScaleValue}% `;
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

//noUiSlider

noUiSlider.create(effectLevelSliderElement, {
  start: 1,
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,
  connect: 'lower'
});

const onEffectItemClick = (evt) => {
  const selectedEffect = evt.target.value;
  if (selectedEffect === 'none') {
    effectLevelContainer.style.display = 'none';
    imgUploadPreview.style.filter = '';
    return;
  }
  effectLevelContainer.style.display = 'block';

  switch (selectedEffect) {
    case 'sepia':

      break;
    case 'marvin':
      effectLevelSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 100
        },
        start: 100,
        step: 1
      });
      break;
    case 'phobos':
      effectLevelSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3
        },
        start: 3
      });
      break;
    case 'heat':
      effectLevelSliderElement.noUiSlider.updateOptions({
        range: {
          'min': 1,
          'max': 3
        },
        start: 3
      });
      break;
  }
};

function addPhotoEffect() {
  effectLevelContainer.style.display = 'none';
  effectsInputs.forEach((element) => {
    element.addEventListener('click', onEffectItemClick);
  });
}

export { initializePhotoUploadModal };
