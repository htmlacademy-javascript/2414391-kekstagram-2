import {
  photosContainer,
  imgFiltersContainer,
  filterDefaultButton,
  filterRandomButton,
  // filterDiscussedButton
} from './dom-elements.js';
import { renderThumbnails } from './render-thumbnails.js';
import { getRandomData } from './utils/random.js';
import { randomPhotosCount } from './constants.js';

const openFilterManager = () => {
  imgFiltersContainer.classList.remove('img-filters--inactive');
};

const clearPhotos = () => {
  photosContainer.querySelectorAll('.picture').forEach((e) => e.remove());
};

const renderFilteredPhotos = (photosToRender) => {
  clearPhotos();
  renderThumbnails(photosToRender);
};

const addFilterHandlers = (photos) => {

  const onFilterDefaultBtnClick = () => {
    renderFilteredPhotos(photos);
  };

  const onFilterRandomBtnClick = () => {
    const randomPhotos = getRandomData(photos, randomPhotosCount);
    renderFilteredPhotos(randomPhotos);
  };

  filterDefaultButton.addEventListener('click', onFilterDefaultBtnClick);
  filterRandomButton.addEventListener('click', onFilterRandomBtnClick);
  // filterDiscussedButton.addEventListener('click', onfilterDiscussedBtnClick);
};

export { openFilterManager, addFilterHandlers };
