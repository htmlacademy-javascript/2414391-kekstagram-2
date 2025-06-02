import {
  photosContainer,
  photoModalElement,
  photoModalCloseButton,
  bigPictureImg,
  likesCount,
  commentTotalCount,
  commentShownCount,
  commentCountInfo,
  noCommentsText,
  socialComments,
  commentsLoaderButton,
  photoCaption,
  commentTemplate,
  commentsListFragment
} from './dom-elements.js';
import { isEscapeKey } from './utils/keyboard-utils.js';
import { MAX_COMMENT_SHOWN_COUNT } from './constants.js';

let onCommentsLoaderButtonClick;
let shownComments = 0;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
}

const renderCommentsList = (partComments) => {
  partComments.forEach(({ avatar, message, name }) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsListFragment.appendChild(commentElement);
  });
  socialComments.appendChild(commentsListFragment);
};

const showPartialComments = (comments) => {
  commentsLoaderButton.classList.remove('hidden');
  const partialComments = comments.slice(shownComments, shownComments + MAX_COMMENT_SHOWN_COUNT);
  renderCommentsList(partialComments);
  shownComments += partialComments.length;
  commentShownCount.textContent = shownComments;
  if (shownComments === comments.length) {
    commentsLoaderButton.classList.add('hidden');
  }
};

const renderPhotoModal = ({ url, likes, comments, description }) => {
  socialComments.innerHTML = '';
  shownComments = 0;
  bigPictureImg.src = url;
  noCommentsText.classList.add('hidden');
  commentCountInfo.classList.remove('hidden');
  likesCount.textContent = likes;
  photoCaption.textContent = description;
  commentTotalCount.textContent = comments.length;
  if (comments.length === 0) {
    noCommentsText.classList.remove('hidden');
    commentCountInfo.classList.add('hidden');
  }
  onCommentsLoaderButtonClick = () => showPartialComments(comments);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
  showPartialComments(comments);
};

const openPhotoModal = (userPhoto) => {
  photoModalElement.classList.remove('hidden');
  renderPhotoModal(userPhoto);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const initializePhotoModal = (usersPhotos) => {
  photosContainer.addEventListener('click', (evt) => {
    const pictureEl = evt.target.closest('.picture');
    if (pictureEl) {
      const clickedPhotoId = Number(pictureEl.getAttribute('data-photo-id'));
      const clickedPhoto = usersPhotos.find((photo) => photo.id === clickedPhotoId);
      openPhotoModal(clickedPhoto);
    }
  });
  photoModalCloseButton.addEventListener('click', closePhotoModal);
};

function closePhotoModal() {
  photoModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
  document.body.classList.remove('modal-open');
  socialComments.innerHTML = '';
}

export { initializePhotoModal };
