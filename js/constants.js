
const MAX_COMMENT_SHOWN_COUNT = 5;
const MAX_HASHTAGS_COUNT = 5;
const MAX_TEXT_DESCRIPTION_LETTERS = 140;

const SCALE = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const EffectSliderValues = {
  DEFAULT_EFFECT: { min: 0, max: 100, start: 0, step: 1 },
  CHROME: { min: 0, max: 1, start: 1, step: 0.1, filter: (value) => `grayscale(${value})` },
  SEPIA: { min: 0, max: 1, start: 1, step: 0.1, filter: (value) => `sepia(${value})` },
  MARVIN: { min: 0, max: 100, start: 100, step: 1, filter: (value) => `invert(${value}%)` },
  PHOBOS: { min: 0, max: 3, start: 3, step: 0.1, filter: (value) => `blur(${value}px)` },
  HEAT: { min: 1, max: 3, start: 3, step: 0.1, filter: (value) => `brightness(${value})` }
};

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз'
};

const ALERT_SHOW_TIME = 5000;

const MessageType = {
  ERROR: 'error',
  SUCCESS: 'success'
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const RANDOM_PHOTOS_COUNT = 10;

const RERENDER_DELAY = 500;

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {
  MAX_COMMENT_SHOWN_COUNT,
  MAX_HASHTAGS_COUNT,
  MAX_TEXT_DESCRIPTION_LETTERS,
  SCALE, EffectSliderValues,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  ALERT_SHOW_TIME,
  MessageType,
  SubmitButtonText,
  RANDOM_PHOTOS_COUNT,
  RERENDER_DELAY,
  FILE_TYPES
};
