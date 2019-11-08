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
    component: () => import('../views/absolute')
  },
  {
    path: '/flex',
    name: 'flex',
    component: () => import('../views/flex')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('../views/scroll')
  },
  {
    path: '/mouseMenu',
    name: 'mouseMenu',
    component: () => import('../views/mouseMenu')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
