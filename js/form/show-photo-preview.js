import { FILE_TYPES } from '../constants.js';
import { imgUploadPreview, imgUploadInput } from '../dom-elements.js';

const showPhotoPreview = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
  }
};

export { showPhotoPreview };
