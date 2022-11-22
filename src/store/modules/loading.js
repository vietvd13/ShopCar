const state = {
	loading: {
		show: false,
		variant: 'white',
		opacity: 1,
		blur: '1rem',
		rounded: 'sm',
	}
};

const mutations = {
	SET_LOADING: (state, status) => {
		state.loading.show = status;
	}
};

const actions = {
	setLoading({ commit }, status = true) {
		commit('SET_LOADING', status);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
