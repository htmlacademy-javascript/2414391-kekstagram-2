import { isEscapeKey } from './keyboard-utils.js';
import { textHashtagsInput, textDescriptionField } from '../dom-elements.js';

const onEscapeKeydown = (closeFunction) => (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    const formResultOpen = document.querySelector('.error, .success');
    if (formResultOpen) {
      evt.stopPropagation();
    }
    if (document.activeElement === textHashtagsInput || document.activeElement === textDescriptionField) {
      evt.stopPropagation();
      return;
    }
    closeFunction();
  }
};

export { onEscapeKeydown };
