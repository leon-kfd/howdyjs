import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resize from './directives/resize'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.directive('resize', resize)
