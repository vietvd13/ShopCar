import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';
import router, { asyncRoutes, resetRouter } from '@/routers';

function getToken() {
  const TOKEN = Cookies.get(CONSTANTS.COOKIES.TOKEN);

  if (TOKEN) {
    return TOKEN;
  }

  return '';
}

function getRefreshToken() {
  const REFRESH_TOKEN = Cookies.get(CONSTANTS.COOKIES.REFRESH_TOKEN);

  if (REFRESH_TOKEN) {
    return REFRESH_TOKEN;
  }

  return '';
}

const state = {
  initApp: 0,
  token: getToken(),
  refresh_token: getRefreshToken(),
};

const mutations = {
  SET_INIT_APP: (state) => {
    state.initApp = 1;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
    Cookies.set(CONSTANTS.COOKIES.TOKEN, token);
  },
  SET_REFRESH_TOKEN: (state, refresh_token) => {
    state.refresh_token = refresh_token;
    Cookies.set(CONSTANTS.COOKIES.REFRESH_TOKEN, refresh_token);
  }
};

const actions = {
  setInitApp({ commit }) {
    commit('SET_INIT_APP');
  },
	setToken({ commit }, token) {
		commit('SET_TOKEN', token);
  },
  setRefreshToken({ commit }, refresh_token) {
    commit('SET_REFRESH_TOKEN', refresh_token);
  },
  setAsyncRoutes() {
    const len = asyncRoutes.length;
    let idx = 0;

    while (idx < len) {
      router.addRoute(asyncRoutes[idx]);

      idx++;
    }
  },
  removeAsyncRoutes() {
    resetRouter();
    router.push({ name: 'ShopCar' });
  }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
