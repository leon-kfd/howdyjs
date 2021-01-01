import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const packageList = [
  {
    name: 'resize-directive',
    exampleNum: 5
  },
  {
    name: 'scroll-directive',
    exampleNum: 5
  },
  {
    name: 'mouse-menu-directive',
    exampleNum: 6
  },
  {
    name: 'size-observer-directive',
    exampleNum: 2
  },
  {
    name: 'animation-dialog',
    exampleNum: 3
  },
  {
    name: 'standard-table',
    exampleNum: 10
  },
  {
    name: 'img-zoom-directive',
    exampleNum: 3
  },
  {
    name: 'to-drag-directive',
    exampleNum: 5
  },
  {
    name: 'standard-tabs',
    exampleNum: 2
  },
  {
    name: 'standard-form',
    exampleNum: 6
  }
]

const packageRouter = packageList.map(item => {
  const { name, exampleNum } = item
  return {
    name,
    routers: [
      {
        path: `/${name}/readme`,
        name: `${name}-readme`,
        component: () => import(`@/pages/${name}/example/readme`)
      },
      ...Array.from({ length: exampleNum }, (item, index) => {
        return {
          path: `/${name}/example${index + 1}`,
          name: `${name}-example${index + 1}`,
          component: () =>
            import(`@/pages/${name}/example/example${index + 1}`)
        }
      })
    ]
  }
})

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  ...Object.keys(packageRouter).map(key => {
    const { name, routers } = packageRouter[key]
    return {
      path: `/${name}`,
      name,
      component: () => import(`@/pages/${name}`),
      children: routers,
      redirect: `/${name}/readme`
    }
  })
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
