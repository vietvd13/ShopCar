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
        distance: [0, 250000],
        price: [0, 50000]
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
            max: 250000,
        },
        price: {
            min: 0,
            max: 50000,
        }
    }
}

function getIsFilterDashboard() {
    const IS_FILTER = Cookies.get(CONSTANTS.COOKIES.IS_FILTER_DASHBOARD);

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
        is_hotsale: null,
        is_data_crawl: null,
        distance: [0, 250000],
        price: [0, 50000]
    }
}

function getConfigSliderDashboard() {
    const CONFIG_SLIDER = Cookies.get(CONSTANTS.COOKIES.CONFIG_SLIDER_DASHBOARD);

    if (CONFIG_SLIDER) {
        return JSON.parse(CONFIG_SLIDER);
    }

    return {
        distance: {
            min: 0,
            max: 250000,
        },
        price: {
            min: 0,
            max: 50000,
        }
    }
}

const state = {
    isFilter: getIsFilter(),
    isLimit: {
        distance: false,
        price: false,
    },
    configSlider: getConfigSlider(),

    isFilterDashboard: getIsFilterDashboard(),
    isLimitDashboard: {
        distance: false,
        price: false,
    },
    configSliderDashboard: getConfigSliderDashboard(),
};

const mutations = {
    SET_FILTER: (state, filter) => {
        state.isFilter = filter;
        // Cookies.set(CONSTANTS.COOKIES.IS_FILTER, JSON.stringify(filter));
    },

    SET_LIMIT: (state, limit) => {
        state.isLimit = limit;
    },


    SET_CONFIG_SLIDER: (state, config) => {
        state.configSlider = config;
        // Cookies.set(CONSTANTS.COOKIES.CONFIG_SLIDER, JSON.stringify(config));
    },

    SET_FILTER_DASHBOARD: (state, filter) => {
        state.isFilterDashboard = filter;
        // Cookies.set(CONSTANTS.COOKIES.IS_FILTER_DASHBOARD, JSON.stringify(filter));
    },

    SET_LIMIT_DASHBOARD: (state, limit) => {
        state.isLimitDashboard = limit;
    },

    SET_CONFIG_SLIDER_DASHBOARD: (state, config) => {
        state.configSlider = config;
        // Cookies.set(CONSTANTS.COOKIES.CONFIG_SLIDER_DASHBOARD, JSON.stringify(config));
    }
};

const actions = {
    setFilter({ commit }, filter) {
        commit('SET_FILTER', filter);
    },

    setLimit({ commit }, limit) {
        commit('SET_LIMIT', limit);
    },

    setConfigSlider({ commit }, config) {
        commit('SET_CONFIG_SLIDER', config);
    },

    setFilterDashboard({ commit }, filter) {
        commit('SET_FILTER_DASHBOARD', filter);
    },

    setLimitDashboard({ commit }, limit) {
        commit('SET_LIMIT_DASHBOARD', limit);
    },

    setConfigSliderDashboard({ commit }, config) {
        commit('SET_CONFIG_SLIDER_DASHBOARD', config);
    }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
