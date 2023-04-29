import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Permission
import '@/permission'

// Fontawesome
import '@/assets/Fontawesome/css/all.min.css';

// Style
import '@/scss/index.scss';

// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Flag 
import FlagIcon from 'vue-flag-icon';
Vue.use(FlagIcon);

// Package
import router from '@/routers'
import i18n from '@/langs'
import store from '@/store'

// Bus
import bus from '@/bus';

Vue.use(bus);

// Resize
import '@/utils/handleResizeScreen';

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
