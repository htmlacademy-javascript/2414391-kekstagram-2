// инициализация загрузки по клику
// вставка изображения в форму
// валидация заполненных полей формы

import { imgUploadInput, imgUploadModalElement, imgUploadModalCloseButton } from './dom-elements.js';
import { onEscapeKeydown } from './utils/on-escape-keydown.js';

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
}

function closePhotoUploadModal() {
  imgUploadModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onphotoUploadModalEscKeydown);
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
}

export { initializePhotoUploadModal };
