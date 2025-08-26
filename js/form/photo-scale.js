import { SCALE } from '../constants.js';

import {
  scaleControlValue,
  scaleControlSmallerButton,
  scaleControlBiggerButton,
  imgUploadPreview
} from '../dom-elements.js';

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

export { initializePhotoScaleParams };
