import { getLanguage } from '@/utils/getLang';
import Cookies from 'js-cookie';
import CONSTANTS from '@/constants';

const state = {
    language: getLanguage(),
};

const mutations = {
	SET_LANGUAGE: (state, lang) => {
		state.language = lang;
        Cookies.set(CONSTANTS.COOKIES.LANGUAGE, lang);
	}
};

const actions = {
	setLanguage({ commit }, lang = 'kr') {
		commit('SET_LANGUAGE', lang);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
