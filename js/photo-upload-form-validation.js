import { uploadImgForm, textHashtagsInput, textDescriptionField } from './dom-elements.js';
import { MAX_HASHTAGS_COUNT, MAX_TEXT_DESCRIPTION_LETTERS } from './constants.js';

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
}, false);

const onUploadImgFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

let validateHashtagsErrorMessage = '';

const validateHashtags = (value) => {
  if (value.trim() === '') {
    return true;
  }
  const hashtagsArray = value.trim().toLowerCase().split(/\s+/);
  if (hashtagsArray.length > MAX_HASHTAGS_COUNT) {
    validateHashtagsErrorMessage = 'Превышено количество хэштегов';
    return false;
  }
  const uniqueHashtags = new Set();
  for (const hashtag of hashtagsArray) {
    if (!/^#[a-zа-яё0-9]{1,19}$/.test(hashtag)) {
      validateHashtagsErrorMessage = 'Введён невалидный хэштег';
      return false;
    }
    if (uniqueHashtags.has(hashtag)) {
      validateHashtagsErrorMessage = 'Хэштеги повторяются';
      return false;
    }
    uniqueHashtags.add(hashtag);
  }
  return true;
};

const validateCommentField = (value) => value.length <= MAX_TEXT_DESCRIPTION_LETTERS;

const getValidateHashtagsErrorMessage = () => validateHashtagsErrorMessage;

const getCommentsErrorMessage = () => `Длина комментария больше ${MAX_TEXT_DESCRIPTION_LETTERS} символов`;

pristine.addValidator(textHashtagsInput, validateHashtags, getValidateHashtagsErrorMessage);
pristine.addValidator(textDescriptionField, validateCommentField, getCommentsErrorMessage);

export { onUploadImgFormSubmit };
