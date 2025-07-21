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

const isValidHashtag = (hashtag) => /^#[a-zа-яё0-9]{1,19}$/i.test(hashtag);

const isEveryHashtagsValid = (hashtags) => hashtags.every(isValidHashtag);

const areHashtagsUnique = (hashtags) => new Set(hashtags).size === hashtags.length;

const validateHashtags = (value) => {
  if (value.trim() === '') {
    return true;
  }
  const hashtagsArray = value.trim().toLowerCase().split(/\s+/);

  if (hashtagsArray.length > MAX_HASHTAGS_COUNT) {
    validateHashtagsErrorMessage = 'Превышено количество хэштегов';
    return false;
  }

  if (!isEveryHashtagsValid(hashtagsArray)) {
    validateHashtagsErrorMessage = 'Введён невалидный хэштег';
    return false;
  }

  if (!areHashtagsUnique(hashtagsArray)) {
    validateHashtagsErrorMessage = 'Хэштеги повторяются';
    return false;
  }
  return true;
};

const validateCommentField = (value) => value.length <= MAX_TEXT_DESCRIPTION_LETTERS;

const getValidateHashtagsErrorMessage = () => validateHashtagsErrorMessage;

const getCommentsErrorMessage = () => `Длина комментария больше ${MAX_TEXT_DESCRIPTION_LETTERS} символов`;

pristine.addValidator(textHashtagsInput, validateHashtags, getValidateHashtagsErrorMessage);
pristine.addValidator(textDescriptionField, validateCommentField, getCommentsErrorMessage);

export { onUploadImgFormSubmit };
