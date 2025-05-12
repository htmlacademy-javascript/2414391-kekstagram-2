import { generatePhotoId, generatePhotoName } from '../utils/generate-id.js';
import { getRandomInteger, getRandomArrayElement } from '../utils/random.js';
import { createUserPhotoComment } from './comments.js';
import { PHOTO_DESCRIPTIONS, PHOTO_DESCRIPTION_COUNT } from '../constants.js';

//создание объекта с описанием фотографии, опубликованной пользователем

const createUserPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoName()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, (_, i) => createUserPhotoComment(i))
});

const createPhotosDescriptions = () => Array.from({ length: PHOTO_DESCRIPTION_COUNT }, createUserPhotoDescription);

export { createPhotosDescriptions };
