const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const usersPhotosListFragment = document.createDocumentFragment();

const drawUsersPhotos = (usersPhotos) => {
  usersPhotos.forEach(({ url, description, likes, comments }) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    usersPhotosListFragment.appendChild(photoElement);
  });
  photosContainer.appendChild(usersPhotosListFragment);
};

export { drawUsersPhotos };
