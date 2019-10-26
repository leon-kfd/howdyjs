import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/absolute'
  },
  {
    path: '/absolute',
    name: 'absolute',
    component: () => import('../views/absolute.vue')
  },
  {
    path: '/flex',
    name: 'flex',
    component: () => import('../views/flex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
