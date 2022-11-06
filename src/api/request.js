import axios from 'axios';
import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';

const service = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  timeout: 10000,
});

function getToken() {
  const TOKEN = Cookies.get(CONSTANTS.COOKIES.TOKEN);

  if (TOKEN) {
    return TOKEN;
  }

  return null;
}

// function getRefreshToken() {
//   const REFRESH_TOKEN = Cookies.get(CONSTANTS.COOKIES.REFRESH_TOKEN);

//   if (REFRESH_TOKEN) {
//     return REFRESH_TOKEN;
//   }

//   return null;
// }

service.interceptors.request.use(
  config => {
    const TOKEN = getToken();

    if (TOKEN) {
      config.headers['Authorization'] = `Bearer ${TOKEN}`;
    }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export { service };

