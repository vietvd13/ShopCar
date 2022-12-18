const getters = {
  language: state => state.app.language,
  loading: state => state.loading.loading,
  sizeScreen: state => state.sizeScreen.size,
  initApp: state => state.auth.initApp,
  token: state => state.auth.token,
  refresh_token: state => state.auth.refresh_token,
  profile: state => state.auth.profile,
  isRelogin: state => state.auth.isRelogin,
  isFilter: state => state.filter.isFilter,
  configSlider: state => state.filter.configSlider,
  isFilterDashboard: state => state.filter.isFilterDashboard,
  isLimitDashboard: state => state.filter.isLimitDashboard,
  configSliderDashboard: state => state.filter.configSliderDashboard,
};

export default getters;