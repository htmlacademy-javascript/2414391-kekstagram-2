// миниатюры
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photosContainer = document.querySelector('.pictures');
const usersPhotosListFragment = document.createDocumentFragment();

// полномасштабное изображение
const photoModalElement = document.querySelector('.big-picture');
const bigPictureImg = photoModalElement.querySelector('.big-picture__img img');
const likesCount = photoModalElement.querySelector('.likes-count');
const commentCountInfo = photoModalElement.querySelector('.social__comment-count-info');
const commentTotalCount = photoModalElement.querySelector('.social__comment-total-count');
const commentShownCount = photoModalElement.querySelector('.social__comment-shown-count');
const noCommentsText = photoModalElement.querySelector('.social__no-comments-text');
const socialComments = photoModalElement.querySelector('.social__comments');
const commentsLoaderButton = photoModalElement.querySelector('.comments-loader');
const photoCaption = photoModalElement.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();
const photoModalCloseButton = photoModalElement.querySelector('.big-picture__cancel');

//форма загрузки изображения
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadModalElement = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadModalCloseButton = imgUploadForm.querySelector('.img-upload__cancel');
const imgUploadButton = imgUploadForm.querySelector('.img-upload__submit');
const textHashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const textDescriptionField = imgUploadForm.querySelector('.text__description');
const scaleControlSmallerButton = imgUploadForm.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');
const effectLevelSliderElement = imgUploadForm.querySelector('.effect-level__slider');
const effectsInputs = imgUploadForm.querySelectorAll('input[name="effect"]');
const effectNoneInput = document.getElementById('effect-none');
const effectLevelContainer = imgUploadForm.querySelector('.img-upload__effect-level');
const effectLevelValueElement = imgUploadForm.querySelector('.effect-level__value');

// отправка/получение данных с сервера
const dataErrorTemplate = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

export {
  photoTemplate,
  usersPhotosListFragment,
  photosContainer,
  photoModalElement,
  bigPictureImg,
  likesCount,
  commentCountInfo,
  commentTotalCount,
  commentShownCount,
  noCommentsText,
  socialComments,
  commentsLoaderButton,
  photoCaption,
  commentTemplate,
  commentsListFragment,
  photoModalCloseButton,
  imgUploadForm,
  imgUploadInput,
  imgUploadModalElement,
  imgUploadModalCloseButton,
  imgUploadButton,
  textHashtagsInput,
  textDescriptionField,
  scaleControlSmallerButton,
  scaleControlBiggerButton,
  scaleControlValue,
  imgUploadPreview,
  effectLevelSliderElement,
  effectsInputs,
  effectNoneInput,
  effectLevelContainer,
  effectLevelValueElement,
  dataErrorTemplate
};
