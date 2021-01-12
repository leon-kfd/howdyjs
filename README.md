# Howdy
<br>

**一个集合个人封装的VUE组件与指令的混合包**  
*A package of mix some vue components and vue directive* 

> 当前该仓库正准备将组件全部迁移至vue3 + typescript，以下为旧版的README，旧版项目请前往howdy分支查看。

## Link
+ <a href="https://github.com/leon-kfd/howdyjs" target="_blank">⚡Github</a>
+ <a href="https://www.npmjs.com/package/howdyjs" target="_blank">💾NPM</a>
+ <a href="https://kongfandong.cn/howdy" target="_blank">📖Document</a>

---

## 组件
1. **[Standard Table](https://kongfandong.cn/howdy/standard-table)**  
基于ElementUI table的二次封装

2. **[Animation Dialog](https://kongfandong.cn/howdy/animation-dialog)**  
使用动画打开模态框

3. **[Resize Directive](https://kongfandong.cn/howdy/resize)**  
为HTML盒子加入拖拽更改大小功能

4. **[Scroll Directive](https://kongfandong.cn/howdy/scroll-directive)**  
为HTML盒子加入自定义滚动条

5. **[Mouse Menu Directive](https://kongfandong.cn/howdy/mouse-menu-directive)**  
为HTML盒子加入自定义右键菜单

6. **[Size Observer Directive](https://kongfandong.cn/howdy/size-observer-directive)**  
监听盒子大小变化

7. **[Img Zoom Directive](https://kongfandong.cn/howdy/img-zoom-directive)**  
为Img标签加入图片放大功能，支持按组浏览下一张图片

8. **[To Drag Directive](https://kongfandong.cn/howdy/to-drag-directive)**  
为Fixed定位的元素加入可拖拽功能

9. **[Standard Tabs](https://kongfandong.cn/howdy/standard-tabs)**  
移动端标签页

10. **[Standard Form](https://kongfandong.cn/howdy/standard-form)**  
基于ElementUI form的二次封装
---

*部分指令已兼容支持Vue3，包括：`Resize Directive`、`Scroll Directive`、`Size Observer Directive`、`Img Zoom Directive`*


## 开始使用

### 安装
```cmd
npm i -S howdyjs
```

### 使用
1. **指令** | <small>以Resize指令为例</small>

```js
// 全局使用: main.js
import { Resize } from 'howdyjs'
Vue.directive('resize', Resize)
// or (带默认参数安装)
// Vue.use(Resize, someGlobalOption)

// 在Vue3中使用（部分指令已作兼容支持）
// app.use(Resize)


// 组件内直接使用
import { Resize } from 'howdyjs'
export default {
  directives: {
    resize: Resize
  }
}
```  

2. **组件** | <small>以StandardTable组件为例</small>

```js
// 全局使用: main.js
import { StandardTable } from 'howdyjs'
Vue.use(StandardTable, {
  responseItems: 'data.data.items',
  responseTotal: 'data.data.total',
  pageSize: 15,
  pageSizes: [10, 15, 20, 50, 100]
})

// 组件内直接使用
import { StandardTable } from 'howdyjs'
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
import { StandardTable } from 'howdyjs'
// 改为
import StandardTable from 'howdyjs/lib/standard-table'
```

2. 方式二：使用<a href="https://www.npmjs.com/package/babel-plugin-component" target="_blank">babel-plugin-component</a>插件

---


#### <a href="https://www.kongfandong.cn" target="_blank" style="color: rgb(75, 9, 150)">VIEW AUTHOR BLOG</a>