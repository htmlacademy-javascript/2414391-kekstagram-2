import { createPhotosDescriptions } from './data-generators/photos-descriptions.js';
import { renderThumbnails } from './render-thumbnails.js';

const usersPhotos = createPhotosDescriptions();

renderThumbnails(usersPhotos);
