import Vue from 'vue';
import Vuex from 'vuex';

import loading from './modules/loading';
import sizeScreen from './modules/sizeScreen';
import auth from './modules/auth';

import getters from './getters';

Vue.use(Vuex);

const modules = {
	loading,
	sizeScreen,
	auth
};

const store = new Vuex.Store({
	modules,
	getters,
});

export default store;
