import { createPhotosDescriptions } from './data-generators/photos-descriptions.js';
import { drawUsersPhotos } from './draw-users-photos.js';
import { onPhotoClick } from './open-photo-modal.js';

const usersPhotos = createPhotosDescriptions();

drawUsersPhotos(usersPhotos);
onPhotoClick(usersPhotos);
