# Howdy
<br>

**一个集合个人封装的VUE组件与指令的混合包**  
*A package of mix some vue components and vue directive*

---

## 组件
1. **<a href="/standard-table" target="_blank">Standard Table</a>**  
基于ElementUI table的二次封装

2. **<a href="/animation-dialog" target="_blank">Animation Dialog</a>**  
使用动画打开模态框

3. **<a href="/resize-directive" target="_blank">Resize Directive</a>**  
为HTML盒子加入拖拽更改大小功能

4. **<a href="/scroll-directive" target="_blank">Scroll Directive</a>**  
为HTML盒子加入自定义滚动条

5. **<a href="/mouse-menu-directive" target="_blank">Mouse Menu Directive</a>**  
为HTML盒子加入自定义右键菜单

6. **<a href="/size-observer-directive" target="_blank">Size Observer Directive</a>**  
监听盒子大小变化

---

## 开始使用

### 安装
```cmd
npm i -S howdy --registry=http://kongfandong.cn/npm/
```

### 使用
1. **指令** | <small>以Resize指令为例</small>

```js
// 全局使用: main.js
import { Resize } from 'howdy'
Vue.directive('resize', Resize)
// or (带默认参数安装)
// Vue.use(Resize, someGlobalOption)


// 组件内直接使用
import { Resize } from 'howdy'
export default {
  directives: {
    resize: Resize
  }
}
```  
2. **组件** | <small>以StandardTable组件为例</small>

```js
// 全局使用: main.js
import { StandardTable } from 'howdy'
Vue.use(StandardTable, {
  responseItems: 'data.data.items',
  responseTotal: 'data.data.total',
  pageSize: 15,
  pageSizes: [10, 15, 20, 50, 100]
})

// 组件内直接使用
import { StandardTable } from 'howdy'
export default {
  components: {
    StandardTable
  }
}
```

### 按需加载及打包
1. 方式一：更改引用路径
```js
// 将原来的
import { StandardTable } from 'howdy'
// 改为
import StandardTable from 'howdy/lib/standard-table'
```
2. 方式二：使用<a href="https://www.npmjs.com/package/babel-plugin-component" target="_blank">babel-plugin-component</a>插件

---


#### <a href="http://www.kongfandong.cn" target="_blank" style="color: rgb(75, 9, 150)">VIEW AUTHOR BLOG</a>