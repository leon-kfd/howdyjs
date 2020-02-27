import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resize from './packages/directive-resize/resize'
import scroll from './packages//directive-scroll/scroll'
import mouseMenu from './packages//directive-mouse-menu/mouse-menu'
import sizeObserver from './packages//directive-size-observer/size-observer'
import StandardTable from './packages/standard-table'

Vue.config.productionTip = false

Vue.directive('resize', resize)
Vue.directive('scroll', scroll)
Vue.directive('mouseMenu', mouseMenu)
Vue.directive('sizeObserver', sizeObserver)

Vue.use(ELEMENT, {
  size: 'small',
  zIndex: 8888
})

Vue.use(StandardTable, {
  responseItems: 'data.data.items',
  responseTotal: 'data.data.total',
  pageSize: 15,
  pageSizes: [10, 15, 20, 50, 100]
  // axiosInstance: instance
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
