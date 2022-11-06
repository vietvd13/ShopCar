import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';
import router, { asyncRoutes, resetRouter } from '@/routers';

const state = {
  token: '',
  refresh_token: '',
};

const mutations = {
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
