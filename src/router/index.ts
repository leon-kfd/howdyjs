import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const packages = [
  {
    name: 'resize',
    exampleNum: 5
  },
  {
    name: 'img-zoom',
    exampleNum: 3
  }
];
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  ...packages.map(pkg => {
    const { name, exampleNum } = pkg;
    return {
      path: `/${name}`,
      name: `${name}`,
      redirect: `/${name}/readme`,
      component: () => import(`../pages/${name}/index.vue`),
      children: [
        {
          path: `/${name}/readme`,
          name: `${name}-readme`,
          // component: () => import(`../pages/${name}/example/readme.vue`)
          component: () => import('../components/PageReadme.vue')
        },
        ...Array.from({length: exampleNum}, (_, exampleIndex:number) => {
          return {
            path: `/${name}/example${exampleIndex + 1}`,
            name: `${name}-example${exampleIndex + 1}`,
            component: () => import(`../pages/${name}/example/example${exampleIndex + 1}.vue`)
          };
        })
      ]
    };
  })
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
