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

function getRefreshToken() {
  const REFRESH_TOKEN = Cookies.get(CONSTANTS.COOKIES.REFRESH_TOKEN);

  if (REFRESH_TOKEN) {
    return REFRESH_TOKEN;
  }

  return null;
}

function goToShop() {
  router.push({ name: 'HomeShopCar' });
}

function handleLogout() {
  store.dispatch('auth/logout')
    .then(() => {
      resetRouter();
      goToShop();
    });
}

service.interceptors.request.use(
  config => {
    const TOKEN = getToken();

    if (TOKEN) {
      config.headers = { 
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/json',
      }
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

    const { status_code, message } = error.response.data;

    if (status_code === 500 && message === 'jwt expired') {
      try {
        const BODY = {
          refresh_token: getRefreshToken(),
        };
  
        const { status_code, access_token, refresh_token } = await postRefreshToken(BODY);
  
        if (status_code === 200) {
          await store.dispatch('auth/setToken', access_token)
          .then(async() => {
            await store.dispatch('auth/setRefreshToken', refresh_token)
              .then(() => {
                console.log('[APP]: Refresh...');
              })
          });

          return service(originalRequest);
        } else {
          handleLogout();
        }
      } catch (err) {
        console.log(err);
      }
    }

    return Promise.reject(error);
  }
);

export { service };

