{
  id:
  url:
  description:
  likes:
  comments: [
    {
      id:
        avatar:
      message:
        name:
    }
  ]
}

const PHOTO_DESCRIPTION_COUNT = 25;
const photoDescriptions = ['Мгновение', 'Настроение', 'Деталь', 'Эмоции', 'История'];

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
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
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

const createPhotoDescription = () => {
  const randomPhotoDescriptionsIndex = getRandomInteger(0, photoDescriptions.length - 1);

  return `${photoDescriptions[randomPhotoDescriptionsIndex]}`;
}

const createUserPhotoDescription = () => ({
  id: generatePhotoId(),
  url: createPhotoAddress(),
  description: createPhotoDescription()
});


const userPhotosDescriptions = Array.from({ length: PHOTO_DESCRIPTION_COUNT }, createUserPhotoDescription);

console.log(userPhotosDescriptions);
