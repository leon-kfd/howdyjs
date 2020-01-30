// import Vue from 'vue'
// import VueRouter from 'vue-router'

Vue.use(VueRouter)

const resizeRouter = [
  {
    path: '/resize-directive/readme',
    name: 'resize-directive-readme',
    component: () => import('@/pages/resize-directive/example/readme')
  },
  ...Array.from({ length: 5 }, (item, index) => {
    return {
      path: `/resize-directive/example${index + 1}`,
      name: `resize-directive-example${index + 1}`,
      component: () =>
        import(`@/pages/resize-directive/example/example${index + 1}`)
    }
  })
]

const scrollRouter = [
  {
    path: '/scroll-directive/readme',
    name: 'scroll-directive-readme',
    component: () => import('@/pages/scroll-directive/example/readme')
  },
  ...Array.from({ length: 5 }, (item, index) => {
    return {
      path: `/scroll-directive/example${index + 1}`,
      name: `scroll-directive-example${index + 1}`,
      component: () =>
        import(`@/pages/scroll-directive/example/example${index + 1}`)
    }
  })
]

const mouseMenuRouter = [
  {
    path: '/mouse-menu-directive/readme',
    name: 'mouse-menu-directive-readme',
    component: () => import('@/pages/mouse-menu-directive/example/readme')
  },
  ...Array.from({ length: 6 }, (item, index) => {
    return {
      path: `/mouse-menu-directive/example${index + 1}`,
      name: `mouse-menu-directive-example${index + 1}`,
      component: () =>
        import(`@/pages/mouse-menu-directive/example/example${index + 1}`)
    }
  })
]

const sizeObserverRouter = [
  {
    path: '/size-observer-directive/readme',
    name: 'size-observer-directive-readme',
    component: () => import('@/pages/size-observer-directive/example/readme')
  },
  ...Array.from({ length: 2 }, (item, index) => {
    return {
      path: `/size-observer-directive/example${index + 1}`,
      name: `size-observer-directive-example${index + 1}`,
      component: () =>
        import(`@/pages/size-observer-directive/example/example${index + 1}`)
    }
  })
]

const animationDialogRouter = [
  {
    path: '/animation-dialog/readme',
    name: 'animation-dialog-readme',
    component: () => import('@/pages/animation-dialog/example/readme')
  },
  ...Array.from({ length: 3 }, (item, index) => {
    return {
      path: `/animation-dialog/example${index + 1}`,
      name: `animation-dialog-example${index + 1}`,
      component: () =>
        import(`@/pages/animation-dialog/example/example${index + 1}`)
    }
  })
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
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
  },
  {
    path: '/mouse-menu-directive',
    name: 'mouse-menu-directive',
    component: () => import('@/pages/mouse-menu-directive'),
    children: mouseMenuRouter,
    redirect: '/mouse-menu-directive/readme'
  },
  {
    path: '/size-observer-directive',
    name: 'size-observer-directive',
    component: () => import('@/pages/size-observer-directive'),
    children: sizeObserverRouter,
    redirect: '/size-observer-directive/readme'
  },
  {
    path: '/animation-dialog',
    name: 'animation-dialog',
    component: () => import('@/pages/animation-dialog'),
    children: animationDialogRouter,
    redirect: '/animation-dialog/readme'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
