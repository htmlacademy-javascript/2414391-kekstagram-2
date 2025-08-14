import { initializePhotoModal } from './photo-modal.js';
import { renderThumbnails } from './render-thumbnails.js';
import { initializePhotoUploadModal } from './form/photo-upload-form.js';
import { getData } from './api.js';
import { showAlert } from './utils/show-alert.js';


const getThumbs = async () => {
  try {
    const photos = await getData();
    renderThumbnails(photos);
    initializePhotoModal(photos);
  } catch (error) {
    showAlert(error.message);
  }
};

getThumbs();
initializePhotoUploadModal();
