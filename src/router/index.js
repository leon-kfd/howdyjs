import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const resizeRouter = [
  {
    path: '/resize-directive/readme',
    name: 'resize-readme',
    component: () => import('@/pages/resize-directive/example/readme')
  },
  {
    path: '/resize-directive/example1',
    name: 'resize-example1',
    component: () => import('@/pages/resize-directive/example/example1')
  },
  {
    path: '/resize-directive/example2',
    name: 'resize-example2',
    component: () => import('@/pages/resize-directive/example/example2')
  },
  {
    path: '/resize-directive/example3',
    name: 'resize-example3',
    component: () => import('@/pages/resize-directive/example/example3')
  }
]

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
  },
  {
    path: '/resize-directive',
    name: 'resize-directive',
    component: () => import('@/pages/resize-directive'),
    children: resizeRouter,
    redirect: '/resize-directive/readme'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
