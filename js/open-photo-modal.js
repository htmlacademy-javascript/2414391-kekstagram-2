import { photosContainer, photoModal, commentCountBlock, commentsLoader } from './dom-elements.js';
import { showPhotoModal } from './show-photo-modal.js'

const openPhotoModal = (userPhoto) => {
  photoModal.classList.remove('hidden');
  showPhotoModal(userPhoto);
  document.body.classList.add('modal-open');
  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

const onPhotoClick = (usersPhotos) => {
  photosContainer.addEventListener('click', (evt) => {
    const pictureEl = evt.target.closest('.picture');
    if (pictureEl) {
      const clickedPhotoIndex = Number(pictureEl.getAttribute('data-id'));
      const clickedPhoto = usersPhotos.find(photo => photo.id === clickedPhotoIndex);
      openPhotoModal(clickedPhoto);
    }
  });
}

export { onPhotoClick };


