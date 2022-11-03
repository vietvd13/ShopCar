import Vue from 'vue';
import Vuex from 'vuex';

import loading from './modules/loading';
import sizeScreen from './modules/sizeScreen';

import getters from './getters';

Vue.use(Vuex);

const modules = {
	loading,
	sizeScreen
};

const store = new Vuex.Store({
	modules,
	getters,
});

export default store;
