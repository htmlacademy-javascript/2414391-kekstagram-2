import { uploadImgForm, imgUploadInput, imgUploadModalElement, imgUploadModalCloseButton, textHashtagsInput } from './dom-elements.js';
import { onEscapeKeydown } from './utils/on-escape-keydown.js';

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
}, false);

uploadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

pristine.addValidator(textHashtagsInput, validateHashtags, getValidateHashtagsErrorMessage);
let validateHashtagsErrorMessage = '';

function validateHashtags(value) {
  if (value.trim() === '') {
    return true;
  }
  const hashtagsArray = value.trim().toLowerCase().split(/\s+/);
  if (hashtagsArray.length > 5) {
    validateHashtagsErrorMessage = 'превышено количество хэштегов';
    return false;
  }
  const uniqueHashtags = new Set();
  for (const hashtag of hashtagsArray) {
    if (!/^#[a-zа-яё0-9]{1,19}$/.test(hashtag)) {
      validateHashtagsErrorMessage = 'введён невалидный хэштег';
      return false;
    }
    if (uniqueHashtags.has(hashtag)) {
      validateHashtagsErrorMessage = 'хэштеги повторяются';
      return false;
    }
    uniqueHashtags.add(hashtag);
  }
  return true;
}

function getValidateHashtagsErrorMessage() {
  return validateHashtagsErrorMessage;
}

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
