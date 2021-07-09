// !!△△ this file is abandoned. △△
// 自动生成路由文件
const fs = require('fs');
const packagesDirs = fs.readdirSync('./src/pages');
const packagesMap = {};
packagesDirs.map(package => {
  const exampleDirs = fs.readdirSync(`./src/pages/${package}/example`);
  const exampleNum = exampleDirs.length;
  packagesMap[package] = exampleNum;
});
const packages = Object.keys(packagesMap).map(key => {
  return {
    name: key,
    exampleNum: packagesMap[key]
  };
});
const routes = [
  {
    path: '/',
    name: 'home',
    component: 'i(../views/home.vue)'
  },
  ...packages.map(pkg => {
    const { name, exampleNum } = pkg;
    return {
      path: `/${name}`,
      name: `${name}`,
      redirect: `/${name}/readme`,
      component: `i(../pages/${name}/index.vue)`,
      children: [
        {
          path: `/${name}/readme`,
          name: `${name}-readme`,
          component: 'i(../components/PageReadme.vue)'
        },
        ...Array.from({length: exampleNum}, (_, exampleIndex) => {
          return {
            path: `/${name}/example${exampleIndex + 1}`,
            name: `${name}-example${exampleIndex + 1}`,
            component: `i(../pages/${name}/example/example${exampleIndex + 1}.vue)`
          };
        })
      ]
    };
  })
];

const reg = /"i\((.*?)\)"/g;
const routesStr = JSON.stringify(routes, null, 2).replace(reg, (...arg) => `() => import("${arg[1]}")`);
const isHashRouterMode = process.env.VITE_ROUTER_MODE === 'hash';

const output = `
/* eslint-disable */
import { createRouter, ${isHashRouterMode ? 'createWebHashHistory' : 'createWebHistory'} } from 'vue-router';
const router = createRouter({
  history: ${isHashRouterMode ? 'createWebHashHistory()' : 'createWebHistory(\'/howdy/\')'},
  routes: ${routesStr}
});

export default router;
`;

fs.writeFileSync('./src/router/index.ts', output);

