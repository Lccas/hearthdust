const URL_BACKEND_JSON = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://hearthdust.herokuapp.com';

export default {
  URL_BACKEND_JSON,
};
