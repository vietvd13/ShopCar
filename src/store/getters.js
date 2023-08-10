const getters = {
  language: (state) => state.app.language,
  loading: (state) => state.loading.loading,
  sizeScreen: (state) => state.sizeScreen.size,
  initApp: (state) => state.auth.initApp,
  token: (state) => state.auth.token,
  refresh_token: (state) => state.auth.refresh_token,
  profile: (state) => state.auth.profile,
  isRelogin: (state) => state.auth.isRelogin,
  actionRating: (state) => state.filter.actionRating,
  isFilter: (state) => state.filter.isFilter,
  actionRatingDashboard: (state) => state.filter.actionRatingDashboard,
  isFilterDashboard: (state) => state.filter.isFilterDashboard,
};

export default getters;
