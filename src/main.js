import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import resize from './packages/directive-resize/resize'
// import scroll from './packages//directive-scroll/scroll'
// import mouseMenu from './packages//directive-mouse-menu/mouse-menu'
// import sizeObserver from './packages//directive-size-observer/size-observer'

// import { Resize, Scroll, MouseMenu, SizeObserver } from './howdy'
import { Resize, Scroll, MouseMenu, SizeObserver } from 'howdy'

Vue.config.productionTip = false

Vue.directive('resize', Resize)
Vue.directive('scroll', Scroll)
Vue.directive('mouseMenu', MouseMenu)
Vue.directive('sizeObserver', SizeObserver)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
