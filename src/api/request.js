import axios from 'axios';
import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';
import { postRefreshToken } from '@/api/modules/Auth';
import store from '@/store';
import router, { resetRouter } from '@/routers';

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

// {
//   "message": "jwt expired",
//   "error_code": 500
// }

function getRefreshToken() {
  const REFRESH_TOKEN = Cookies.get(CONSTANTS.COOKIES.REFRESH_TOKEN);

  if (REFRESH_TOKEN) {
    return REFRESH_TOKEN;
  }

  return null;
}

function updateAccessToken(access_token = '', refresh_token = '') {
  store.dispatch('auth/setToken', access_token)
    .then(() => {
      store.dispatch('auth/setRefreshToken', refresh_token);
    })
}

function goToShop() {
  router.push({ name: 'HomeShopCar' });
}

function handleLogout() {
  updateAccessToken();
  resetRouter();
  goToShop();
}

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
  async (error) => {
    const originalRequest = error.config;

    const { error_code, message } = error.response.data;

    if (error_code === 500 && message === 'jwt expired') {
      try {
        const REFRESH_TOKEN = await getRefreshToken();

        if (REFRESH_TOKEN) {
          const BODY = {
            refresh_token: REFRESH_TOKEN,
          };

          const { status_code } = postRefreshToken(BODY);

          if (status_code === 200) {
            updateAccessToken();

            return service(originalRequest);
          } else {
            handleLogout();
          }
        }
      } catch (err) {
        console.log(err);
        handleLogout();
      }
    }

    return Promise.reject(error);
  }
);

export { service };

