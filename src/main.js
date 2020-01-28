import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resize from './directive-resize/resize'
import scroll from './directive-scroll/scroll'
import mouseMenu from './directive-mouse-menu/mouse-menu'
import sizeObserver from './directive-size-observer/size-observer'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.use(ElementUI, {
//   size: 'small'
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.directive('resize', resize)
Vue.directive('scroll', scroll)
Vue.directive('mouseMenu', mouseMenu)
Vue.directive('sizeObserver', sizeObserver)

// Vue.use(scroll)
