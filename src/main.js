import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Fontawesome
import './assets/Fontawesome/css/all.min.css'

// Package
import router from './routers'
import i18n from './langs'
import store from './store'

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
