const getRandomData = (data, count) => {
  const randomData = new Set();

  while (randomData.size < count) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomData.add(data[randomIndex]);
  }
  return Array.from(randomData);
};

export { getRandomData };
