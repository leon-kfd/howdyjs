import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resize from './directive-resize/resize'
// import resize from 'resize-directive'
import scroll from './directive-scroll/scroll'
import mouseMenu from './directive-mouse-menu/mouse-menu'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.directive('resize', resize)
Vue.directive('scroll', scroll)
Vue.directive('mouseMenu', mouseMenu)
