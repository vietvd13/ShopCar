const getters = {
  loading: state => state.loading.loading,
  sizeScreen: state => state.sizeScreen.size,
  token: state => state.auth.token,
  refresh_token: state => state.auth.refresh_token,
};

export default getters;