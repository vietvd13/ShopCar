import axios from 'axios';
import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';
import { postRefreshToken } from '@/api/modules/Auth';
import store from '@/store';
import router, { resetRouter } from '@/routers';
import { getLanguage } from '@/utils/getLang';
import Toast from '@/toast';

const service = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  timeout: 10000,
});

service.defaults.headers.common['Content-Type'] = 'application/json';

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

async function handleSetIsRelogin(status) {
  await store.dispatch('auth/setIsRelogin', status)
}

service.interceptors.request.use(
  config => {
    const TOKEN = getToken();

    if (TOKEN) {
      config.headers['Authorization'] = `Bearer ${TOKEN}`;
      config.headers['Accept-Language'] = getLanguage();
    } else {
      config.headers['Accept-Language'] = getLanguage();
    }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const { status_code, error_message, message } = response.data;

    if (status_code !== 200) {
      Toast.warning(error_message || message);
    }

    return response.data;
  },
  async (error) => {
    const originalRequest = error.response.config;

    const { status_code, message } = error.response.data;

    if (status_code === 500 && message === 'jwt expired') {
      if (store.getters.isRelogin === false) {
        try {
          const BODY = {
            refresh_token: getRefreshToken(),
          };
  
          await handleSetIsRelogin(true);
    
          const { status_code, access_token, refresh_token } = await postRefreshToken(BODY);
    
          if (status_code === 200) {
            await store.dispatch('auth/setToken', access_token)
            .then(async() => {
              await store.dispatch('auth/setRefreshToken', refresh_token)
                .then(async() => {
                  await handleSetIsRelogin(false);
                  console.log('[APP]: Refresh...');
                })
            });

            return service({
              method: originalRequest.method,
              url: `${originalRequest.baseURL}${originalRequest.url}`,
              headers: {
                'Authorization': `Bearer ${getToken()}`,
                'Accept-Language': getLanguage(),
                'Content-Type': originalRequest.headers['Content-Type']
              },
              data: originalRequest.data
            });
          } else {
            handleLogout();
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        handleLogout();
      }
    } else {
      Toast.error(message);
    }

    return Promise.reject(error);
  }
);

export { service };

