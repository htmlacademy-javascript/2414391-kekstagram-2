import { createRandomNumberFromRangeGenerator } from './random.js';

const generatePhotoId = createRandomNumberFromRangeGenerator(1, 25);
const generatePhotoName = createRandomNumberFromRangeGenerator(1, 25);

export { generatePhotoId, generatePhotoName };
