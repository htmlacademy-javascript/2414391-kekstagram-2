import { initializePhotoModal } from './thumbnails/initialize-photo-modal.js';
import { renderThumbnails } from './thumbnails/render-thumbnails.js';
import { initializePhotoUploadModal } from './form/initialize-photo-upload-modal.js';
import { getData } from './api.js';
import { showAlert } from './utils/show-alert.js';
import { openFilterManager, addFilterHandlers } from './thumbnails/filter-thumbnails.js';


const getThumbs = async () => {
  try {
    const photos = await getData();
    renderThumbnails(photos);
    openFilterManager();
    addFilterHandlers(photos);
    initializePhotoModal(photos);
  } catch (error) {
    showAlert(error.message);
  }
};

getThumbs();
initializePhotoUploadModal();

