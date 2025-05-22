import {
  photosContainer,
  photoModal,
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
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
  if (comments.length === 0) {
    commentCountBlock.textContent = 'Нет комментариев';
  } else {
    commentShownCount.textContent = comments.length <= 5 ? comments.length : 5;
  }
  photoCaption.textContent = description;
  renderCommentsList(comments);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
};

//открытие полномасштабного изображения по клику на миниатюру

const openPhotoModal = (userPhoto) => {
  photoModal.classList.remove('hidden');
  renderPhotoModal(userPhoto);
  document.body.classList.add('modal-open');
  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onThumbnailClick = (usersPhotos) => {
  photosContainer.addEventListener('click', (evt) => {
    const pictureEl = evt.target.closest('.picture');
    if (pictureEl) {
      const clickedPhotoIndex = Number(pictureEl.getAttribute('data-photo-id'));
      const clickedPhoto = usersPhotos.find((photo) => photo.id === clickedPhotoIndex);
      openPhotoModal(clickedPhoto);
    }
  });
};

// закрытие полномасштабного иображения

const closePhotoModal = () => {
  photoModal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
  socialComments.innerHTML = '';
};

photoModalCloseButton.addEventListener('click', () => {
  closePhotoModal();
});

export { onThumbnailClick };


