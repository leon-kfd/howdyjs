import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import resize from './directives-resize/resize'
import resize from 'resize-directive'
import scroll from './directives-scroll/scroll'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.directive('resize', resize)
Vue.directive('scroll', scroll)
