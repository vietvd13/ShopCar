const state = {
	size: {
		width: null,
		height: null,
		type: null,
	}
};

const mutations = {
	SET_SIZE: (state, size) => {
		state.size = size;
	}
};

const actions = {
	setSize({ commit }, size) {
		commit('SET_SIZE', size);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
