import {
  photosContainer,
  photoModalElement,
  commentsLoader,
  photoModalCloseButton,
  bigPictureImg,
  likesCount,
  commentCountBlock,
  commentTotalCount,
  commentShownCount,
  socialComments,
  photoCaption,
  commentTemplate,
  commentsListFragment
} from './dom-elements.js';
import { isEscapeKey } from './utils/keyboard-utils.js';

// отрисовка полномасштабного изображения

const renderCommentsList = (comments) => {
  comments.forEach(({ avatar, message, name }) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsListFragment.appendChild(commentElement);
  });
  socialComments.appendChild(commentsListFragment);
};

const renderPhotoModal = ({ url, likes, comments, description }) => {
  const maxCommentShownCount = 5;
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
  if (comments.length === 0) {
    commentCountBlock.textContent = 'Нет комментариев';
  } else {
    commentShownCount.textContent = comments.length <= maxCommentShownCount ? comments.length : maxCommentShownCount;
  }
  photoCaption.textContent = description;
  renderCommentsList(comments);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
}

//открытие полномасштабного изображения

const openPhotoModal = (userPhoto) => {
  photoModalElement.classList.remove('hidden');
  renderPhotoModal(userPhoto);
  document.body.classList.add('modal-open');
  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
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

// закрытие полномасштабного иображения

function closePhotoModal() {
  photoModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
  socialComments.innerHTML = '';
}

export { initializePhotoModal };


