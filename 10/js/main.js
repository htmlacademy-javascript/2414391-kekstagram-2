import { initializePhotoModal } from './photo-modal.js';
import { renderThumbnails } from './render-thumbnails.js';
import { initializePhotoUploadModal } from './form/photo-upload-form.js';
import { getData } from './api.js';
import { showAlert } from './utils/show-alert.js';


initializePhotoUploadModal();

getData()
  .then((photos) => {
    renderThumbnails(photos);
    initializePhotoModal(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
