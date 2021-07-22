<h1 style="text-shadow: 3px 3px #5b9df3;color: transparent;-webkit-text-stroke-color: #262626;-webkit-text-stroke-width: 2px;font-family: unset">Howdy</h1>
<br>

**一个包含Javascript插件、Vue3组件、Vue3指令的轻量工具组件库**  
*A universal component packages of javascript plugins or tools* 

> 当前该仓库已使用`Vue3` + `Typescript`，基于Vue2组件的旧版项目请前往<a href="https://github.com/leon-kfd/howdyjs/tree/howdy" target="_blank">howdy分支</a>查看。

## Link
+ <a href="https://github.com/leon-kfd/howdyjs" target="_blank">⚡Github</a>
+ <a href="https://kongfandong.cn/howdy" target="_blank">📖Document</a>
+ <a href="https://www.npmjs.com/search?q=%40howdyjs" target="_blank">💾NPM</a>

---

## 组件

1. **[@howdyjs/resize](https://kongfandong.cn/howdy/resize)**  
✨通过拖拽更改元素尺寸插件

2. **[@howdyjs/img-zoom](https://kongfandong.cn/howdy/img-zoom)**  
✨图片放大插件，支持按组浏览下一张图片

3. **[@howdyjs/size-observer](https://kongfandong.cn/howdy/size-observer)**  
✨监听元素尺寸变化插件

4. **[@howdyjs/scroll](https://kongfandong.cn/howdy/scroll)**  
✨自定义滚动条插件

5. **[@howdyjs/to-drag](https://kongfandong.cn/howdy/to-drag)**  
✨设置Dom可拖动插件

6. **[@howdyjs/animation-dialog](https://kongfandong.cn/howdy/animation-dialog)**  
✨动画模态框Vue3组件

7. **[@howdyjs/standard-tabs](https://kongfandong.cn/howdy/standard-tabs)**  
✨移动端标签页Vue3组件

8. **[@howdyjs/mouse-menu](https://kongfandong.cn/howdy/mouse-menu)**  
✨自定义右键菜单Vue3组件

9. **[@howdyjs/control](https://kongfandong.cn/howdy/control)**  
✨拖拽更改元素大小与位置插件

---

## 开始使用

### 安装
```cmd
// 新版已进行分包
npm i -S @howdyjs/XXX

// 旧版
npm i -S howdyjs
```

### 使用

+ 新版进行了分包，可按需安装相应的分包
+ 新版的Vue组件只可在Vue3中使用，而指令做了向下兼容可同时在Vue2.X中使用
+ 多数包是基于原生JS编写的，基本可直接原生使用，只是为了方便提供了VUE指令的封装形式
+ 若需要在Vue2.X中使用，可使用旧版，旧版文档 [参考此处](https://github.com/leon-kfd/howdyjs/blob/howdy/README.md)

## 关于项目

### Packages
+ 使用`lerna`进行分包管理，执行`npm run bootstrap`项目初始化
+ 使用`rollup`进行打包， 执行`npm run build:pkg`打包各Packages，包含cjs、es和其d.ts文件

### 展示站点
+ 开发环境及展示站点使用`vite`搭建，lerna初始化、安装依赖、打包Packages，完成后执行`npm run example`启动
+ 站点路由文件使用`import.meta.glob`读取文件目录**自动生成**，原则上不需更改路由文件


#### <a href="https://www.kongfandong.cn" target="_blank" style="color: rgb(75, 9, 150)">VIEW AUTHOR BLOG</a>