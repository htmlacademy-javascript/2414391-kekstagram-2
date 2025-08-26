import { MessageType, SubmitButtonText } from '../constants.js';
import {
  imgUploadForm,
  imgUploadInput,
  imgUploadModalElement,
  imgUploadModalCloseButton,
  imgUploadButton,
  scaleControlValue,
  imgUploadPreview,
  effectNoneInput
} from '../dom-elements.js';
import { onEscapeKeydown } from '../utils/on-escape-keydown.js';
import { pristine } from './photo-upload-form-validation.js';
import { sendForm } from '../api.js';
import { showFormResultModal } from './show-form-result-modal.js';
import { showPhotoPreview } from './show-photo-preview.js';
import { initializePhotoScaleParams } from './photo-scale.js';
import { addPhotoEffect } from './add-photo-effects.js';

const onphotoUploadModalEscKeydown = onEscapeKeydown(closePhotoUploadModal);

const initializePhotoUploadModal = () => {
  imgUploadInput.addEventListener('change', () => {
    openPhotoUploadModal();
    showPhotoPreview();
  });
  imgUploadModalCloseButton.addEventListener('click', closePhotoUploadModal);
};

const resetUploadForm = () => {
  imgUploadInput.value = '';
  scaleControlValue.value = '100%';
  effectNoneInput.checked = true;
  imgUploadPreview.removeAttribute('style');
  pristine.reset();
};

const setButtonState = (isEnabled, text) => {
  imgUploadButton.disabled = !isEnabled;
  imgUploadButton.textContent = text;
};

const sendFormData = async (formElement) => {
  const isValid = pristine.validate();
  if (isValid) {
    setButtonState(false, SubmitButtonText.SENDING);
    try {
      await sendForm(new FormData(formElement));
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

function openPhotoUploadModal() {
  imgUploadModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onphotoUploadModalEscKeydown);
  imgUploadForm.addEventListener('submit', onFormButtonClick);

  initializePhotoScaleParams();
  addPhotoEffect();
}

function closePhotoUploadModal() {
  resetUploadForm();

  imgUploadModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onphotoUploadModalEscKeydown);
  imgUploadForm.removeEventListener('submit', onFormButtonClick);
}

export { initializePhotoUploadModal };
