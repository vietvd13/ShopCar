import CONSTANTS from '@/constants';
import Cookies from 'js-cookie';

function getIsFilter() {
    const IS_FILTER = Cookies.get(CONSTANTS.COOKIES.IS_FILTER);

    if (IS_FILTER) {
        return JSON.parse(IS_FILTER);
    }

    return {
        search: '',
        categories: null,
        models: null,
        car_details: [],
        from_year: null,
        to_year: null,
        color: null,
        fuel_type: null,
        gear_box: null,
        apply_distance: true,
        apply_price: true,
        distance: [0, CONSTANTS.VALUE.MAX_DISTANCE],
        price: [0, CONSTANTS.VALUE.MAX_PRICE]
    }
}

function getConfigSlider() {
    return {
        distance: {
            min: 0,
            max: CONSTANTS.VALUE.MAX_DISTANCE,
        },
        price: {
            min: 0,
            max: CONSTANTS.VALUE.MAX_PRICE,
        }
    }
}

function getIsFilterDashboard() {
    return {
        search: '',
        from_year: null,
        to_year: null,
        categories: null,
        model: [],
        color: null,
        fuel_type: null,
        gear_box: null,
        is_hotsale: null,
        is_data_crawl: null,
        apply_distance: true,
        apply_price: true,
        distance: [0, CONSTANTS.VALUE.MAX_DISTANCE],
        price: [0, CONSTANTS.VALUE.MAX_PRICE]
    }
}

function getConfigSliderDashboard() {
    return {
        distance: {
            min: 0,
            max: CONSTANTS.VALUE.MAX_DISTANCE,
        },
        price: {
            min: 0,
            max: CONSTANTS.VALUE.MAX_PRICE,
        }
    }
}

const state = {
    isFilter: getIsFilter(),
    isLimit: {
        distance: true,
        price: true,
    },
    configSlider: getConfigSlider(),

    isFilterDashboard: getIsFilterDashboard(),
    isLimitDashboard: {
        distance: true,
        price: true,
    },
    configSliderDashboard: getConfigSliderDashboard(),
};

const mutations = {
    SET_FILTER: (state, filter) => {
        state.isFilter = filter;
    },

    SET_LIMIT: (state, limit) => {
        state.isLimit = limit;
    },

    SET_CONFIG_SLIDER: (state, config) => {
        state.configSlider = config;
    },

    SET_FILTER_DASHBOARD: (state, filter) => {
        state.isFilterDashboard = filter;
    },

    SET_LIMIT_DASHBOARD: (state, limit) => {
        state.isLimitDashboard = limit;
    },

    SET_CONFIG_SLIDER_DASHBOARD: (state, config) => {
        state.configSlider = config;
    },

    RESET_FILTER_CATEGORIES: (state) => {
        state.isFilter.categories = null;
    },

    RESET_FILTER_MODELS: (state) => {
        state.isFilter.models = null;
    },

    RESET_FILTER_DETAIL_CAR: (state) => {
        state.isFilter.car_details = [];
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
    },

    resetFilterCategories({ commit }) {
        commit('RESET_FILTER_CATEGORIES');
    },

    resetFilterModels({ commit }) {
        commit('RESET_FILTER_MODELS');
    },

    resetFilterDetailCar({ commit }) {
        commit('RESET_FILTER_DETAIL_CAR');
    }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
