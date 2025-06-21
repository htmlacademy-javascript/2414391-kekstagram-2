import { imgUploadInput, imgUploadModalElement, imgUploadModalCloseButton } from './dom-elements.js';
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
  imgUploadModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onphotoUploadModalEscKeydown);
  document.addEventListener('submit', onUploadImgFormSubmit);
}

function closePhotoUploadModal() {
  imgUploadModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onphotoUploadModalEscKeydown);
  document.removeEventListener('submit', onUploadImgFormSubmit);
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
}

export { initializePhotoUploadModal };
