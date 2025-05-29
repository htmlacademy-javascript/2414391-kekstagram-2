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
const commentCountBlock = photoModalElement.querySelector('.social__comment-count');
const commentTotalCount = photoModalElement.querySelector('.social__comment-total-count');
const commentShownCount = photoModalElement.querySelector('.social__comment-shown-count');
const socialComments = photoModalElement.querySelector('.social__comments');
const commentsLoader = photoModalElement.querySelector('.comments-loader');
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
  commentCountBlock,
  commentTotalCount,
  commentShownCount,
  socialComments,
  commentsLoader,
  photoCaption,
  commentTemplate,
  commentsListFragment,
  photoModalCloseButton
};
