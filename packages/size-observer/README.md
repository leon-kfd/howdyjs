# Size Observer

![Version](https://img.shields.io/npm/v/@howdyjs/size-observer)
![Size](https://img.shields.io/bundlephobia/min/@howdyjs/size-observer?color=%2344cc88)

**监听元素尺寸变化插件**

## 特性
1. 当盒子大小改变时会触发回调函数
2. 基于JS试验API：[ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
3. ~~基于[resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)~~
4. 封装了vue指令的形式

## 原生使用
```js
import SizeObserver from '@howdyjs/size-observer'
const resizeObserve = new SizeObserver({ 
  el: '#resize', // Selector or Dom
  options: {
    // Your Options
    // 参考下方说明
  }
});
document.querySelector('#resize').addEventListener('sizechange', (e) => {
  // 盒子触发回调，回调参数参考下方说明
  const { contentRect } = e
})
resizeObserve.init();
```

+ UMD CDN: <a href="https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js</a>
+ UMD Name: `HowdySizeObserver`
+ UMD Example: <a href="https://codepen.io/leon-kfd/pen/zYNOKpX" target="_blank">Click Here</a>

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|wait|节流延迟(ms)|Number|-|0|
|immediate|是否立即先执行一遍回调|Boolean|-|true|

### Event
+ 初始化后，会自动加入一个`sizechange`的自定义事件监听, 可以在回调中获取到盒子大小变化后的属性。

回调函数中提供以下参数

|参数|说明|类型|
|:---|:---|:---|
|contentRect|Dom大小改变后的位置信息|Object|

ContentRect Types
```ts
interface DOMRectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}
```

## 以Vue指令方式使用
```js
import { SizeObserverDirective } from '@howdyjs/size-observer'
// Vue3全局引入
app.use(SizeObserverDirective)

// Vue2全局引入(对vue2做了兼容)
Vue.use(SizeObserverDirective)

// 组件内引入
export default {
  directive: {
    SizeObserver: SizeObserverDirective
  }
}
```

其余Vue指令使用方式可参考`Example`.
