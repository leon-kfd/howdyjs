import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const resizeRouter = [
  {
    path: '/resize-directive/readme',
    name: 'resize-readme',
    component: () => import('@/pages/resize-directive/example/readme')
  },
  ...Array.from({ length: 5 }, (item, index) => {
    return {
      path: `/resize-directive/example${index + 1}`,
      name: `resize-example${index + 1}`,
      component: () => import(`@/pages/resize-directive/example/example${index + 1}`)
    }
  })
]

const scrollRouter = [
  {
    path: '/scroll-directive/readme',
    name: 'scroll-readme',
    component: () => import('@/pages/scroll-directive/example/readme')
  },
  ...Array.from({ length: 4 }, (item, index) => {
    return {
      path: `/scroll-directive/example${index + 1}`,
      name: `scroll-example${index + 1}`,
      component: () => import(`@/pages/scroll-directive/example/example${index + 1}`)
    }
  })
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
  },
  {
    path: '/scroll-directive',
    name: 'scroll-directive',
    component: () => import('@/pages/scroll-directive'),
    children: scrollRouter,
    redirect: '/scroll-directive/readme'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
