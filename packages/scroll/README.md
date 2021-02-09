# Scroll

**自定义滚动条插件**

## 特性
1. 通过配置项生成自定义样式的滚动条
2. 支持拖拽滚动
3. 基本不需要更改DOM布局，只需在overflow:scroll的元素上增加该指令即可
4. 移动端中无效，会自动改回默认的滚动
5. 封装了vue指令的形式

## 原生使用
```js
import CustomScrollBar from '@howdyjs/scroll'
const scroll = new CustomScrollBar({
  el: '#scroll', // Selector or Dom
  options: {
    // Your Options
    // 参考下方说明
  }
});
scroll.init();
```

+ UMD CDN: <a href="https://unpkg.com/@howdyjs/scroll/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/scroll/dist/index.umd.js</a>
+ UMD Name: `HowdyScroll`

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|direction|滚动条方向|String|x/y/all|y|
|scrollBarWidth|滚动条宽度（轨道）|Number|-|6|
|scrollBarOffsetX|滚动条水平偏移（padding)|Number|-|0|
|scrollBarOffsetY|滚动条垂直偏移（padding)|Number|-|0|
|scrollBarThumbColor|滚动条滑块颜色|String|-|#aab|
|scrollBarThumbBorderRadius|滚动条滑块是否需要圆角|Boolean|-|true|
|scrollBarThumbBorderRadius|滚动条轨道颜色|String|-|transparent|
|scrollBarThumbHoverColor|滚动条滑块Hover时的颜色（默认不设置）|String|-|-|
|enableTrackClickScroll|是否允许点击轨道进行滚动|Boolean|-|true|
|scrollSpeed|点击轨道时的滚动速度（滚动效果使用requestAnimationFrame实现，该值表示每帧的位移量，单位PX）|Number|-|20|
|dragScroll|是否开启拖拽滚动|Boolean|-|false|
|thumbShow|滚动条滑块显示方式，可选一直显示与Hover显示|String|always/hover|always|

> *长度属性的单位为px*

## 以Vue指令方式使用
```js
import { ScrollDirective } from '@howdyjs/scroll'
// Vue3全局引入
app.use(ScrollDirective, someGlobalOptions)

// Vue2全局引入(对vue2做了兼容)
Vue.use(ScrollDirective, someGlobalOptions)

// 组件内引入
export default {
  directive: {
    scroll: ScrollDirective
  }
}
```

### 指令Arg
1. y(默认), 开启垂直滚动
2. x, 开启水平滚动
3. all, 同时开启垂直、水平滚动

> *v-scroll:y | v-scroll:x | v-scroll:all*

### 指令Value (Objcet)
参数同上方的配置`Options`