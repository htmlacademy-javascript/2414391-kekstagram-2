import { onEscapeKeydown } from './utils/on-escape-keydown';

const showFormResult = (type) => {
  const templateType = type === 'success' ? '#success' : '#error';
  const messageTemplate = document.querySelector(templateType)
    .content
    .querySelector(`.${type}`);
  const messageWrapper = messageTemplate.cloneNode(true);
  console.log(messageWrapper);
  // const innerElement = messageWrapper.querySelector(`.${type}__inner`);
  const buttonElement = messageWrapper.querySelector(`.${type}__button`);
  document.body.append(messageWrapper);

  const onButtonClick = () => {
    closeFormResult();
  };

  const onOutsideClick = (evt) => {
    if (!messageWrapper.contains(evt.target)) {
      closeFormResult();
    }
  };

  const onFormResultEscapeKeydown = onEscapeKeydown(closeFormResult);

  function closeFormResult() {
    messageWrapper.remove();
    document.removeEventListener('keydown', onFormResultEscapeKeydown);
    document.removeEventListener('click', onOutsideClick);
  }

  buttonElement.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onFormResultEscapeKeydown);
  document.addEventListener('click', onOutsideClick);

};


export { showFormResult };
