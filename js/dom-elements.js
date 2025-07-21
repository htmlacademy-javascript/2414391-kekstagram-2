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
const uploadImgForm = document.querySelector('.img-upload__form');
const imgUploadInput = uploadImgForm.querySelector('.img-upload__input');
const imgUploadModalElement = uploadImgForm.querySelector('.img-upload__overlay');
const imgUploadModalCloseButton = uploadImgForm.querySelector('.img-upload__cancel');
const imgUploadSubmit = uploadImgForm.querySelector('.img-upload__submit');
const textHashtagsInput = uploadImgForm.querySelector('.text__hashtags');
const textDescriptionField = uploadImgForm.querySelector('.text__description');
const scaleControlSmallerButton = uploadImgForm.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = uploadImgForm.querySelector('.scale__control--bigger');
const scaleControlValue = uploadImgForm.querySelector('.scale__control--value');
const imgUploadPreview = uploadImgForm.querySelector('.img-upload__preview img');
const effectLevelSliderElement = uploadImgForm.querySelector('.effect-level__slider');
const effectsInputs = uploadImgForm.querySelectorAll('input[name="effect"]');
const effectNoneInput = document.getElementById('effect-none');
const effectLevelContainer = uploadImgForm.querySelector('.img-upload__effect-level');
const effectLevelValueElement = uploadImgForm.querySelector('.effect-level__value');

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
  uploadImgForm,
  imgUploadInput,
  imgUploadModalElement,
  imgUploadModalCloseButton,
  imgUploadSubmit,
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
  effectLevelValueElement
};
