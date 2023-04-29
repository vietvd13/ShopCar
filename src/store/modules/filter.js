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
        car_details: null,
        rating: [],

        from_year: null,
        to_year: null,

        from_price: null,
        to_price: null,

        from_distance: null,
        to_distance: null,

        color: null,
        fuel_type: null,
        gear_box: null,
    }
}

function getIsFilterDashboard() {
    return {
        search: '',

        categories: null,
        models: null,
        car_details: null,
        rating: [],

        from_year: null,
        to_year: null,

        from_price: null,
        to_price: null,

        from_distance: null,
        to_distance: null,

        color: null,
        fuel_type: null,
        gear_box: null,
        is_hotsale: null,
        is_data_crawl: null,
    }
}

const state = {
    actionRating: 0,
    isFilter: getIsFilter(),

    actionRatingDashboard: 0,
    isFilterDashboard: getIsFilterDashboard(),
};

const mutations = {
    SET_FILTER: (state, filter) => {
        state.isFilter = filter;
    },

    RESET_FILTER_CATEGORIES: (state) => {
        state.isFilter.categories = null;
    },

    RESET_FILTER_MODELS: (state) => {
        state.isFilter.models = null;
    },

    RESET_FILTER_DETAIL_CAR: (state) => {
        state.isFilter.car_details = null;
    },

    RESET_FILTER_RATING: (state) => {
        state.actionRating += 1;
        state.isFilter.rating = [];
    },

    // Dashboard
    SET_FILTER_DASHBOARD: (state, filter) => {
        state.isFilterDashboard = filter;
    },

    RESET_FILTER_CATEGORIES_DASHBOARD: (state) => {
        state.isFilterDashboard.categories = null;
    },

    RESET_FILTER_MODELS_DASHBOARD: (state) => {
        state.isFilterDashboard.models = null;
    },

    RESET_FILTER_DETAIL_CAR_DASHBOARD: (state) => {
        state.isFilterDashboard.car_details = null;
    },

    RESET_FILTER_RATING_DASHBOARD: (state) => {
        state.actionRatingDashboard += 1;
        state.isFilterDashboard.rating = [];
    }
};

const actions = {
    setFilter({ commit }, filter) {
        commit('SET_FILTER', filter);
    },

    resetFilterCategories({ commit }) {
        commit('RESET_FILTER_CATEGORIES');
    },

    resetFilterModels({ commit }) {
        commit('RESET_FILTER_MODELS');
    },

    resetFilterDetailCar({ commit }) {
        commit('RESET_FILTER_DETAIL_CAR');
    },

    resetFilterRating({ commit }) {
        commit('RESET_FILTER_RATING');
    },

    // Dashboard
    setFilterDashboard({ commit }, filter) {
        commit('SET_FILTER_DASHBOARD', filter);
    },

    resetFilterCategoriesDashboard({ commit }) {
        commit('RESET_FILTER_CATEGORIES_DASHBOARD');
    },

    resetFilterModelsDashboard({ commit }) {
        commit('RESET_FILTER_MODELS_DASHBOARD');
    },

    resetFilterDetailCarDashboard({ commit }) {
        commit('RESET_FILTER_DETAIL_CAR_DASHBOARD');
    },

    resetFilterRatingDashboard({ commit }) {
        commit('RESET_FILTER_RATING_DASHBOARD');
    }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
