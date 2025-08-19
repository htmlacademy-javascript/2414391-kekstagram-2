import { getRandomInteger, getRandomArrayElement } from '../utils/random.js';
import { TEXT_MESSAGES, COMMENTATOR_NAMES } from '../constants.js';

//создание объекта с описанием комментария к фотографии пользователя

const createUserPhotoComment = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(TEXT_MESSAGES),
  name: getRandomArrayElement(COMMENTATOR_NAMES)
});

export { createUserPhotoComment };
