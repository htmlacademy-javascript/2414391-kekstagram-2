const PHOTO_DESCRIPTION_COUNT = 25;
const photoDescriptions = [
  'Мгновение',
  'Настроение',
  'Деталь',
  'Эмоции',
  'История'
];

const textMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentatorNames = [
  'Иван',
  'Алёна',
  'Тимофей',
  'Александр',
  'Юлия'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomNumberFromRangeGenerator = (min, max) => {
  const previousValues = new Set();

  return function () {
    if (previousValues.size >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    let currentValue = getRandomInteger(min, max);
    while (previousValues.has(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.add(currentValue);
    return currentValue;
  };
};

const generatePhotoId = createRandomNumberFromRangeGenerator(1, 25);
const generatePhotoName = createRandomNumberFromRangeGenerator(1, 25);
const createPhotoAddress = () => `photos/${generatePhotoName()}.jpg`;

const createAvatarAddress = () => {
  const generateAvatarName = getRandomInteger(1, 6);

  return `img/avatar-${generateAvatarName}.svg`;
};

const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return `${array[randomIndex]}`;
};

//создание объекта с описанием комментария к фотографии пользователя
const createUserPhotoComments = (index) => ({
  id: index + 1,
  avatar: createAvatarAddress(),
  message: getRandomArrayElement(textMessages),
  name: getRandomArrayElement(commentatorNames)
});

const generateUserPhotoCommentsCount = () => {
  const userPhotoComments = Array.from({ length: getRandomInteger(0, 30) }, (_, i) => createUserPhotoComments(i));

  return userPhotoComments;
};

//создание объекта с описанием фотографии, опубликованной пользователем
const createUserPhotoDescription = () => ({
  id: generatePhotoId(),
  url: createPhotoAddress(),
  description: getRandomArrayElement(photoDescriptions),
  likes: getRandomInteger(15, 200),
  comment: generateUserPhotoCommentsCount()
});

const userPhotosDescriptions = Array.from({ length: PHOTO_DESCRIPTION_COUNT }, createUserPhotoDescription);

console.log(userPhotosDescriptions);
