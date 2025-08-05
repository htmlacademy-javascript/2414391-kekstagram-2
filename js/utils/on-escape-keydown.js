import { isEscapeKey } from './keyboard-utils.js';
import { textHashtagsInput, textDescriptionField } from '../dom-elements.js';

function onEscapeKeydown(closeFunction) {
  return function (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      if (document.activeElement === textHashtagsInput || document.activeElement === textDescriptionField) {
        evt.stopPropagation();
        return;
      }
      closeFunction();
    }
  };
}

export { onEscapeKeydown };
