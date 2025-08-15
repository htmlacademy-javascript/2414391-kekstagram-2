import {
  photosContainer,
  imgFiltersContainer,
  filterDefaultButton,
  filterRandomButton,
  filterDiscussedButton
} from './dom-elements.js';
import { renderThumbnails } from './render-thumbnails.js';
import { getRandomData } from './utils/random.js';
import { RANDOM_PHOTOS_COUNT, RERENDER_DELAY } from './constants.js';
import { debounce } from './utils/debounce.js';

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

const setActiveFilterButton = (button) => {
  const buttons = document.querySelectorAll('.img-filters__button');
  if (button.classList.contains('img-filters__button--active')) {
    return;
  }
  buttons.forEach((btn) => btn.classList.remove('img-filters__button--active'));

  button.classList.add('img-filters__button--active');
};

const filterOptions = {
  default: (photos) => photos,
  random: (photos) => getRandomData(photos, RANDOM_PHOTOS_COUNT),
  discussed: (photos) =>
    photos
      .slice()
      .sort((a, b) => b.comments.length - a.comments.length)
};

const renderFilterPhotosDebounced = debounce(renderFilteredPhotos, RERENDER_DELAY);


const onFilterBtnClick = (photos, filterType) => (evt) => {
  setActiveFilterButton(evt.target);
  const filteredPhotos = filterOptions[filterType](photos);
  renderFilterPhotosDebounced(filteredPhotos);
};

const addFilterHandlers = (photos) => {
  filterDefaultButton.addEventListener('click', onFilterBtnClick(photos, 'default'));
  filterRandomButton.addEventListener('click', onFilterBtnClick(photos, 'random'));
  filterDiscussedButton.addEventListener('click', onFilterBtnClick(photos, 'discussed'));
};

export { openFilterManager, addFilterHandlers };
