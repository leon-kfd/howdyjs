import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Resize, Scroll, MouseMenu, SizeObserver, ImgZoom, ToDrag, AnimationDialog, StandardTabs } from '@/howdy'

Vue.config.productionTip = false
Vue.use(Resize)
Vue.use(Scroll)
Vue.use(MouseMenu)
Vue.use(SizeObserver)
Vue.use(ImgZoom)
Vue.use(ToDrag)
Vue.use(AnimationDialog)
Vue.use(StandardTabs)

Vue.prototype.$baseURL = process.env.NODE_ENV === 'production' ? '../..' : '/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
