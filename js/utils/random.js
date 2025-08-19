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

const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

function getRandomData(data, count) {
  const randomData = new Set();

  while (randomData.size < count) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomData.add(data[randomIndex]);
  }
  return Array.from(randomData);
}

export { getRandomInteger, createRandomNumberFromRangeGenerator, getRandomArrayElement, getRandomData };
