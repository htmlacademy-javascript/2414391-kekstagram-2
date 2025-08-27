import { EffectSliderValues } from '../constants.js';
import {
  effectLevelSliderElement,
  effectLevelContainer,
  imgUploadPreview,
  effectLevelValueElement,
  effectsInputs
} from '../dom-elements.js';

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

export { addPhotoEffect };
