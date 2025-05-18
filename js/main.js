import { createPhotosDescriptions } from './data-generators/photos-descriptions.js';
import { drawUsersPhotos } from './draw-users-photos.js';

const usersPhotos = createPhotosDescriptions();

drawUsersPhotos(usersPhotos);
