import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import loading from './modules/loading';
import sizeScreen from './modules/sizeScreen';
import auth from './modules/auth';

import getters from './getters';

Vue.use(Vuex);

const modules = {
	app,
	loading,
	sizeScreen,
	auth
};

const store = new Vuex.Store({
	modules,
	getters,
});

export default store;
