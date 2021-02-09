<h1 style="text-shadow: 3px 3px #5b9df3;color: transparent;-webkit-text-stroke-color: #262626;-webkit-text-stroke-width: 2px;">Howdy</h1>
<br>

**一个包含Javascript插件、Vue3组件、Vue3指令的个人组件库**  
*A personal component packages of javascript plugins or tools* 

> 当前该仓库正准备将组件全部迁移至`vue3` + `typescript`，旧版项目请前往<a href="https://github.com/leon-kfd/howdyjs/tree/howdy" target="_blank">howdy分支</a>查看。

## Link
+ <a href="https://github.com/leon-kfd/howdyjs" target="_blank">⚡Github</a>
+ <a href="https://kongfandong.cn/howdy-next" target="_blank">📖Document</a>
+ <a href="https://www.npmjs.com/search?q=%40howdyjs" target="_blank">💾NPM</a>

---

## 组件

1. **[Resize](https://kongfandong.cn/howdy-next/resize)**  
拖拽更改元素尺寸插件

2. **[Img Zoom](https://kongfandong.cn/howdy-next/img-zoom)**  
图片放大插件，支持按组浏览下一张图片

3. **[Size Observer](https://kongfandong.cn/howdy-next/size-observer)**  
监听元素尺寸变化插件

4. **[Scroll](https://kongfandong.cn/howdy-next/scroll)**  
自定义滚动条插件

5. **[To Drag](https://kongfandong.cn/howdy-next/to-drag)**  
设置Dom可拖动插件

6. **[Animation Dialog](https://kongfandong.cn/howdy-next/animation-dialog)**  
动画模态框Vue3组件

7. **[Standard Tabs](https://kongfandong.cn/howdy-next/standard-tabs)**  
移动端标签页Vue3组件

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
+ 开发环境及展示站点使用`vite`搭建，安装依赖后，执行`npm run dev`启动
+ 站点路由文件使用Node读取文件目录**自动生成**，执行`npm run gen-router`生成文件


#### <a href="https://www.kongfandong.cn" target="_blank" style="color: rgb(75, 9, 150)">VIEW AUTHOR BLOG</a>