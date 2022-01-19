# ToControl

![Version](https://img.shields.io/npm/v/@howdyjs/to-control)
![Size](https://img.shields.io/bundlephobia/min/@howdyjs/to-control?color=%2344cc88)

**Resize or drag to move a html dom.**

## 特性
1. 将一个定位为absolute的Dom设置成可拖拽移动与更改大小
2. 继承于[@howdyjs/to-drag](https://kongfandong.cn/howdy/to-drag/)，为其添加更改大小功能

## 原生使用
```js
import ToControl from '@howdyjs/to-control'
new ToDrag({
  el: '#to-control', // Selector or Dom
  options: {
    // Your Options
    // 参考下方说明
  }
});
```

+ UMD CDN: <a href="https://unpkg.com/@howdyjs/to-control/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/to-control/dist/index.umd.js</a>（需同时引入ToDrag）
+ UMD Name: `HowdyToControl`
+ UMD Example: <a href="https://codepen.io/leon-kfd/pen/NWjyPBp" target="_blank">Click Here</a>

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|moveCursor|是否显示移动光标(cursor: move)|Boolean|-|true|
|forbidBodyScroll|默认开启，处理移动端滚动穿透问题，当前使用设置body的overflow实现，设为false时需自行处理滚动穿透问题|Boolean|-|true|
|**isAbsolute**|是否为Absolute模式, 可控制absolute的元素在其父元素下进行拖拽|Boolean|-|false|
|parentSelector|Absolute模式下元素的父级容器，目前只支持传入字符串选择器|String|-|-|
|arrowOptions|右下角更改大小用的箭头配置，配置参考下表|Object|-|-|
|**positionMode**|定位模式,默认会记录top与left值,更改此值可以定位方向(1: top/left, 2: top/right, 3: bottom/left, 4: bottom/right)|Number|1,2,3,4|1|
|disabled|是否禁用，需传入函数返回Boolean，若需同时隐藏箭头ICON在原生使用自行调用`updateArrow`方法，在Vue指令方式需触发DOM更新|Function: () => boolean|-|-|

#### arrowOptions (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|size|箭头大小，单位为px|number|-|8|
|lineWidth|箭头线宽|number|-|2|
|lineColor|箭头颜色|String|-|#9a9a9a|
|padding|距离右下角padding|number|-|2|
|background|箭头盒子背景属性，一般用于自定义图标|String|-|none|

> 箭头盒子的CSS类名为`to-control-arrow`，也可自行控制样式

### Event

该插件继承自[@howdyjs/to-drag](https://kongfandong.cn/howdy/to-drag/)，在拖拽更改位置时可以使用其事件回调。

同时提供了`tocontrolstart`, `tocontrolmove`, `tocontrolend`作为更改大小后的事件，参数与to-drag事件参数一致。

> 需要注意tocontrolend会同时触发todragend.

### Method

+ `updateArrow`: 可手动更新箭头DOM

## 以Vue指令方式使用
```js
import { ToControlDirective } from '@howdyjs/to-control'
// Vue3全局引入
app.use(ToControlDirective, someGlobalOptions)

// Vue2全局引入(对vue2做了兼容)
Vue.use(ToControlDirective, someGlobalOptions)

// 组件内引入
export default {
  directive: {
    'to-control': ToControlDirective
  }
}
```

### 指令Value (Objcet)
参数同上方的配置`Options`
