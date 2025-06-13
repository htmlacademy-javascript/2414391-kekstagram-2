import { isEscapeKey } from './keyboard-utils.js';

function onEscapeKeydown(closeModalFunction) {
  return function (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModalFunction();
    }
  };
}

export { onEscapeKeydown };
