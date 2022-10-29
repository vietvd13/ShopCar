import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Fontawesome
import './assets/Fontawesome/css/all.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
