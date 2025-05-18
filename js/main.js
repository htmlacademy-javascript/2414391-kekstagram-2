import { createPhotosDescriptions } from './data-generators/photos-descriptions.js';
import { drawUsersPictures } from './draw-users-pictures.js';

const usersPictures = createPhotosDescriptions();

drawUsersPictures(usersPictures);
