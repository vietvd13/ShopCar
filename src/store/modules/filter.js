import CONSTANTS from '@/constants';
import Cookies from 'js-cookie';

function getIsFilter() {
    const IS_FILTER = Cookies.get(CONSTANTS.COOKIES.IS_FILTER);

    if (IS_FILTER) {
        return JSON.parse(IS_FILTER);
    }

    return {
        search: '',
        from_year: '',
        to_year: '',
        categories: null,
        color: null,
        fuel_type: null,
        gear_box: null,
        distance: [0, 0],
        price: [0, 0]
    }
}

function getConfigSlider() {
    const CONFIG_SLIDER = Cookies.get(CONSTANTS.COOKIES.CONFIG_SLIDER);

    if (CONFIG_SLIDER) {
        return JSON.parse(CONFIG_SLIDER);
    }

    return {
        distance: {
            min: 0,
            max: 500,
        },
        price: {
            min: 0,
            max: 500,
        }
    }
}

const state = {
    isFilter: getIsFilter(),
    configSlider: getConfigSlider()
};

const mutations = {
    SET_FILTER: (state, filter) => {
        state.isFilter = filter;
        Cookies.set(CONSTANTS.COOKIES.IS_FILTER, JSON.stringify(filter));
    },

    SET_CONFIG_SLIDER: (state, config) => {
        state.configSlider = config;
        Cookies.set(CONSTANTS.COOKIES.CONFIG_SLIDER, JSON.stringify(config));
    }
};

const actions = {
    setFilter({ commit }, filter) {
        commit('SET_FILTER', filter);
    },

    setConfigSlider({ commit }, config) {
        commit('SET_CONFIG_SLIDER', config);
    }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
