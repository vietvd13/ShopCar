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

function getProfile() {
  const PROFILE = Cookies.get(CONSTANTS.COOKIES.PROFILE);

  if (PROFILE) {
    return JSON.parse(PROFILE);
  }

  return {
    email: '',
    name: '',
    dob: '',
    address: '',
    phone_number: '',
    root_user: '',
    gender: '',
    email_notification: '',
  }
}

const state = {
  initApp: 0,
  token: getToken(),
  refresh_token: getRefreshToken(),
  profile: getProfile(),
  isRelogin: false,
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
  },
  SET_PROFILE: (state, profile) => {
    state.profile = profile;
    Cookies.set(CONSTANTS.COOKIES.PROFILE, JSON.stringify(profile));
  },
  LOGOUT: (state) => {
    Cookies.remove(CONSTANTS.COOKIES.TOKEN);
    Cookies.remove(CONSTANTS.COOKIES.REFRESH_TOKEN);
    Cookies.remove(CONSTANTS.COOKIES.PROFILE);
    Cookies.remove(CONSTANTS.COOKIES.IS_FILTER);
    Cookies.remove(CONSTANTS.COOKIES.CONFIG_SLIDER);

    state.token = '';
    state.refresh_token = '';
    state.profile = {
      email: '',
      name: '',
      dob: '',
      address: '',
      phone_number: '',
      root_user: '',
      gender: '',
      email_notification: ''
    };

    state.isRelogin = false;
  },
  SET_IS_RELOGIN: (state, status) => {
    state.isRelogin = status;
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
  },
  setProfile({ commit }, profile) {
    commit('SET_PROFILE', profile);
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
  setIsRelogin({ commit }, status) {
    commit('SET_IS_RELOGIN', status);
  }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
