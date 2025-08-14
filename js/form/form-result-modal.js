import { onEscapeKeydown } from '../utils/on-escape-keydown.js';

function showFormResultModal(type) {
  const elements = createFormResultModal(type);
  addModalEventListeners(elements);
}

function createFormResultModal(type) {
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
}

function addModalEventListeners({ buttonElement, innerElement, messageElement }) {

  const handlers = {
    onFormResultEscapeKeydown: onEscapeKeydown(closeModal),
    onOutsideClick: (evt) => {
      if (!innerElement.contains(evt.target)) {
        closeModal();
      }
    },
    onButtonClick: () => closeModal()
  };

  function closeModal() {
    closeFormResultModal(messageElement, handlers);
  }

  buttonElement.addEventListener('click', handlers.onButtonClick);
  document.body.addEventListener('keydown', handlers.onFormResultEscapeKeydown);
  document.body.addEventListener('click', handlers.onOutsideClick);

}
function closeFormResultModal(element, handlers) {
  element.remove();
  document.removeEventListener('keydown', handlers.onFormResultEscapeKeydown);
  document.removeEventListener('click', handlers.onOutsideClick);
}

export { showFormResultModal };
