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
  photoModalCloseButton
};
