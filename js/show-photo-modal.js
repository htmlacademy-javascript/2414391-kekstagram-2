import {
  bigPictureImg,
  likesCount,
  commentCountBlock,
  commentTotalCount,
  commentShownCount,
  socialComments,
  photoCaption,
  commentTemplate,
  commentsListFragment
} from './dom-elements.js';

const renderCommentsList = (comments) => {
  comments.forEach(({ avatar, message, name }) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    commentsListFragment.appendChild(commentElement);
  });
  socialComments.appendChild(commentsListFragment);
};

const showPhotoModal = ({ url, likes, comments, description }) => {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentTotalCount.textContent = comments.length;
  if (comments.length === 0) {
    commentCountBlock.textContent = 'Нет комментариев';
  } else {
    commentShownCount.textContent = comments.length <= 5 ? comments.length : 5;
  };
  photoCaption.textContent = description;
  renderCommentsList(comments);
}

export { showPhotoModal };
