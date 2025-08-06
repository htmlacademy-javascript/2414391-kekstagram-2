import { onEscapeKeydown } from '../utils/on-escape-keydown';

const showFormResultModal = (type) => {
  const templateType = type === 'success' ? '#success' : '#error';
  const messageTemplate = document.querySelector(templateType)
    .content
    .querySelector(`.${type}`);
  const messageWrapper = messageTemplate.cloneNode(true);
  document.body.append(messageWrapper);
  const messageElement = document.querySelector(`.${type}`);
  const innerElement = messageElement.querySelector(`.${type}__inner`);
  const buttonElement = messageElement.querySelector(`.${type}__button`);
  const onButtonClick = () => {
    closeFormResult();
  };

  const onOutsideClick = (evt) => {
    if (!innerElement.contains(evt.target)) {
      closeFormResult();
    }
  };

  const onFormResultEscapeKeydown = onEscapeKeydown(closeFormResult);

  function closeFormResult() {
    messageElement.remove();
    document.removeEventListener('keydown', onFormResultEscapeKeydown);
    document.removeEventListener('click', onOutsideClick);
  }

  buttonElement.addEventListener('click', onButtonClick);
  document.body.addEventListener('keydown', onFormResultEscapeKeydown);
  document.addEventListener('click', onOutsideClick);

};

export { showFormResultModal };
