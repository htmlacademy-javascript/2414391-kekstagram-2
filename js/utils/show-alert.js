import { dataErrorTemplate } from '../dom-elements.js';
import { ALERT_SHOW_TIME } from '../constants.js';

const showAlert = (message) => {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  dataErrorElement.querySelector('.data-error__title').textContent = message;
  document.body.append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert };
