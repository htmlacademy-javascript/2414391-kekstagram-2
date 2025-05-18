import {
  photoTemplate,
  usersPhotosListFragment,
  photosContainer
} from './dom-elements.js';

const drawUsersPhotos = (usersPhotos) => {
  usersPhotos.forEach(({ id, url, description, likes, comments }) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.setAttribute('data-id', id);
    usersPhotosListFragment.appendChild(photoElement);
  });
  photosContainer.appendChild(usersPhotosListFragment);
};

export { drawUsersPhotos };
