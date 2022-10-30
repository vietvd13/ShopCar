import 'core-js'
import '@babel/polyfill'
import 'intersection-observer'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Fontawesome
import './assets/Fontawesome/css/all.min.css'

// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Package
import router from './routers'
import i18n from './langs'
import store from './store'

// Bus
import bus from './bus';

Vue.use(bus);

// Style
import './scss/index.scss';

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
