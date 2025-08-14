import { SCALE, EffectSliderValues, MessageType, SubmitButtonText } from '../constants.js';
import {
  imgUploadForm,
  imgUploadInput,
  imgUploadModalElement,
  imgUploadModalCloseButton,
  imgUploadButton,
  scaleControlSmallerButton,
  scaleControlBiggerButton,
  scaleControlValue,
  imgUploadPreview,
  effectLevelSliderElement,
  effectsInputs,
  effectNoneInput,
  effectLevelContainer,
  effectLevelValueElement
} from '../dom-elements.js';
import { onEscapeKeydown } from '../utils/on-escape-keydown.js';
import { pristine } from './photo-upload-form-validation.js';
import { sendForm } from '../api.js';
import { showFormResultModal } from './form-result-modal.js';

const onphotoUploadModalEscKeydown = onEscapeKeydown(closePhotoUploadModal);

const sendFormData = async (formElement) => {
  const isValid = pristine.validate();
  if (isValid) {
    setButtonState(false, SubmitButtonText.SENDING);
    try {
      sendForm(new FormData(formElement));
      closePhotoUploadModal();
      showFormResultModal(MessageType.SUCCESS);
      formElement.reset();
    } catch {
      showFormResultModal(MessageType.ERROR);
    } finally {
      setButtonState(true, SubmitButtonText.IDLE);
    }
  }
};

const onFormButtonClick = (evt) => {
  evt.preventDefault();
  sendFormData(evt.target);
};

const initializePhotoUploadModal = () => {
  imgUploadInput.addEventListener('change', () => {
    openPhotoUploadModal();
  });
  imgUploadModalCloseButton.addEventListener('click', closePhotoUploadModal);
};

function openPhotoUploadModal() {
  imgUploadModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onphotoUploadModalEscKeydown);
  imgUploadForm.addEventListener('submit', onFormButtonClick);
  initializePhotoScaleParams();
  addPhotoEffect();
}

function closePhotoUploadModal() {
  imgUploadModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onphotoUploadModalEscKeydown);
  imgUploadForm.removeEventListener('submit', onFormButtonClick);
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
  scaleControlValue.value = '100%';
  effectNoneInput.checked = true;
  imgUploadPreview.removeAttribute('style');
  pristine.reset();
}

function setButtonState(isEnabled, text) {
  imgUploadButton.disabled = !isEnabled;
  imgUploadButton.textContent = text;
}

const changePhotoScale = (scaleValue) => {
  const scale = parseInt(scaleValue.value, 10) / 100;
  imgUploadPreview.style.transform = `scale(${scale})`;
};

const increaseScaleControlValue = () => {
  let currentScaleValue = parseInt(scaleControlValue.value, 10);
  if (currentScaleValue < SCALE.MAX) {
    currentScaleValue += SCALE.MIN;
  }
  if (currentScaleValue > SCALE.MAX) {
    currentScaleValue = SCALE.MAX;
  }

  scaleControlValue.value = `${currentScaleValue}%`;
  changePhotoScale(scaleControlValue);
};

const decreaseScaleControlValue = () => {
  let currentScaleValue = parseInt(scaleControlValue.value, 10);
  if (currentScaleValue > SCALE.MIN) {
    currentScaleValue -= SCALE.MIN;
  }
  if (currentScaleValue < SCALE.MIN) {
    currentScaleValue = SCALE.MIN;
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

const defaultEffect = EffectSliderValues.DEFAULT_EFFECT;

noUiSlider.create(effectLevelSliderElement, {
  start: defaultEffect.start,
  range: {
    min: defaultEffect.min,
    max: defaultEffect.max
  },
  step: defaultEffect.step,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value)
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

  let effectSettings;

  switch (selectedEffect) {
    case 'chrome':
      effectSettings = EffectSliderValues.CHROME;
      break;
    case 'sepia':
      effectSettings = EffectSliderValues.SEPIA;
      break;
    case 'marvin':
      effectSettings = EffectSliderValues.MARVIN;
      break;
    case 'phobos':
      effectSettings = EffectSliderValues.PHOBOS;
      break;
    case 'heat':
      effectSettings = EffectSliderValues.HEAT;
      break;
  }

  updateSlider(effectSettings.min, effectSettings.max, effectSettings.start, effectSettings.step);

  effectLevelSliderElement.noUiSlider.off('update');
  effectLevelValueElement.value = effectSettings.start;
  imgUploadPreview.style.filter = effectSettings.filter(effectSettings.start);

  effectLevelSliderElement.noUiSlider.on('update', () => {
    const value = effectLevelSliderElement.noUiSlider.get();
    effectLevelValueElement.value = value;
    imgUploadPreview.style.filter = effectSettings.filter(value);
  });
};

function addPhotoEffect() {
  effectLevelContainer.style.display = 'none';
  effectsInputs.forEach((element) => {
    element.addEventListener('click', onEffectItemClick);
  });
}

export { initializePhotoUploadModal };
