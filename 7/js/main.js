import { createPhotosDescriptions } from './data-generators/photos-descriptions.js';
import { initializePhotoModal } from './photo-modal.js';
import { renderThumbnails } from './render-thumbnails.js';

const usersPhotos = createPhotosDescriptions();

initializePhotoModal(usersPhotos);
renderThumbnails(usersPhotos);

