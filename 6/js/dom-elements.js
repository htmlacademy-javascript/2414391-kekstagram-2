// миниатюры
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const photosContainer = document.querySelector('.pictures');
const usersPhotosListFragment = document.createDocumentFragment();

// полномасштабное изображение
const photoModal = document.querySelector('.big-picture');
const bigPictureImg = photoModal.querySelector('.big-picture__img img');
const likesCount = photoModal.querySelector('.likes-count');
const commentCountBlock = photoModal.querySelector('.social__comment-count');
const commentTotalCount = photoModal.querySelector('.social__comment-total-count');
const commentShownCount = photoModal.querySelector('.social__comment-shown-count');
const socialComments = photoModal.querySelector('.social__comments');
const commentsLoader = photoModal.querySelector('.comments-loader');
const photoCaption = photoModal.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();
const photoModalCloseButton = photoModal.querySelector('.big-picture__cancel');


export {
  photoTemplate,
  usersPhotosListFragment,
  photosContainer,
  photoModal,
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
