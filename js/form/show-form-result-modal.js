import { onEscapeKeydown } from '../utils/on-escape-keydown.js';

const createFormResultModal = (type) => {
  const templateType = type === 'success' ? '#success' : '#error';
  const messageTemplate = document.querySelector(templateType)
    .content
    .querySelector(`.${type}`);
  const messageWrapper = messageTemplate.cloneNode(true);

  document.body.append(messageWrapper);

  const messageElement = document.querySelector(`.${type}`);
  const innerElement = messageElement.querySelector(`.${type}__inner`);
  const buttonElement = messageElement.querySelector(`.${type}__button`);

  return { messageElement, innerElement, buttonElement };
};

const closeFormResultModal = (element, handlers) => {
  element.remove();
  document.removeEventListener('keydown', handlers.onFormResultEscapeKeydown);
  document.removeEventListener('click', handlers.onOutsideClick);
};

const addModalEventListeners = ({ buttonElement, innerElement, messageElement }) => {

  const handlers = {};

  const closeModal = () => closeFormResultModal(messageElement, handlers);

  handlers.onFormResultEscapeKeydown = onEscapeKeydown(closeModal);
  handlers.onOutsideClick = (evt) => {
    if (!innerElement.contains(evt.target)) {
      closeModal();
    }
  };
  handlers.onButtonClick = () => closeModal();

  buttonElement.addEventListener('click', handlers.onButtonClick);
  document.body.addEventListener('keydown', handlers.onFormResultEscapeKeydown);
  document.body.addEventListener('click', handlers.onOutsideClick);
};

const showFormResultModal = (type) => {
  const elements = createFormResultModal(type);
  addModalEventListeners(elements);
};

export { showFormResultModal };
