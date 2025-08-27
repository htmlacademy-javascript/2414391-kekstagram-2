import { FILE_TYPES } from '../constants.js';
import { imgUploadPreview, imgUploadInput, effectsPreviewElements } from '../dom-elements.js';

const defaultPreviewSrc = imgUploadPreview.src;

const showPhotoPreview = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const urlObject = URL.createObjectURL(file);
    imgUploadPreview.src = urlObject;
    effectsPreviewElements.forEach((elem) => {
      elem.style.backgroundImage = `url(${urlObject})`;
    });
  }
};

const resetPhotoPreview = () => {
  imgUploadPreview.src = defaultPreviewSrc;
  effectsPreviewElements.forEach((elem) => {
    elem.style.backgroundImage = '';
  });
};

export { showPhotoPreview, resetPhotoPreview };
