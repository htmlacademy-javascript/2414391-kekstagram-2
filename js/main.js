const PHOTO_DESCRIPTION_COUNT = 25;
const PHOTO_DESCRIPTIONS = [
  'Мгновение',
  'Настроение',
  'Деталь',
  'Эмоции',
  'История'
];

const TEXT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENTATOR_NAMES = [
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

  return () => {
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

const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return `${array[randomIndex]}`;
};

//создание объекта с описанием комментария к фотографии пользователя
const createUserPhotoComments = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(TEXT_MESSAGES),
  name: getRandomArrayElement(COMMENTATOR_NAMES)
});

//создание объекта с описанием фотографии, опубликованной пользователем
const createUserPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoName()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comment: Array.from({ length: getRandomInteger(0, 30) }, (_, i) => createUserPhotoComments(i))
});

const createPhotosDescriptions = () => Array.from({ length: PHOTO_DESCRIPTION_COUNT }, createUserPhotoDescription);
