
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
const isHashRouterMode = import.meta.env.VITE_ROUTER_MODE === 'hash';
const packageMain = import.meta.glob('../pages/*/index.vue');
const exampleMain = import.meta.glob('../pages/*/example/*.vue');
const packageMainMap: Record<string, any> = {};
Object.keys(packageMain).map(key => {
  const reg = /^.*pages\/(.*)\/index.*$/;
  const pkg = key.replace(reg, (...args) => args[1]);
  packageMainMap[pkg] = packageMain[key];
});
const router = createRouter({
  history: isHashRouterMode ? createWebHashHistory() : createWebHistory('/howdy/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    ...Object.keys(packageMainMap).map(pkg => {
      const examples = Object.keys(exampleMain).filter(p => p.includes(pkg));
      return {
        path: `/${pkg}`,
        name: `${pkg}`,
        redirect: `/${pkg}/readme`,
        component: packageMainMap[pkg],
        children: [
          {
            path: `/${pkg}/readme`,
            name: `${pkg}-readme`,
            component: () => import('../components/PageReadme.vue')
          },
          ...examples.map((example,index) => {
            return {
              path: `/${pkg}/example${index + 1}`,
              name: `${pkg}-example${index + 1}`,
              component: exampleMain[example]
            };
          })
        ]
      };
    })
  ]
});

export default router;
