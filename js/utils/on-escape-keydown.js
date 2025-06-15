import { isEscapeKey } from './keyboard-utils.js';
import { textHashtagsInput, textDescriptionField } from '../dom-elements.js';

function onEscapeKeydown(closeModalFunction) {
  return function (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      if (document.activeElement === textHashtagsInput || document.activeElement === textDescriptionField) {
        evt.stopPropagation();
        return;
      }
      closeModalFunction();
    }
  };
}

export { onEscapeKeydown };
