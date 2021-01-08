# Resize

**改变div大小**

## 特性
1. 为box加入更改大小功能
2. 目前仅支持position:absolute的布局或者简单Flex布局
3. 可配置resize立即生效或者延迟生效
4. 封装了vue指令的形式

## 原生使用
```js
import CustomResize from '@howdyjs/resize'
const resize = new CustomResize({
  el: '#resize', // Selector or Dom
  options: {
    // Your Options
    // 参考下方说明
  }
})
resize.init()
document.addEventListen('resize', (e) => {
  // 盒子更改后的处理逻辑,需自行处理,参数参考下方说明
  const { direction, moveOffset, moveOffsetPercent } = e
})
```

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|direction|resize方向数组|Array|left/right/top/bottom|right|
|immediate|resize是否立即执行，默认为false，false时会在点击时生成一条虚线，改完大小后松开鼠标，盒子大小才会变化；若为true则盒子大小会立即改变|Boolean|-|false|
|scrollElSelector|若需改变大小的元素的父元素（及以上）中含有滚动条，需要传入该出现滚动的HtmlElement|HtmlElement|-|null|
|lineColor|生成边框线的颜色，边框线会生成在元素盒子需要resize方向的边框上|String|-|#aab|
|lineWidth|生成边框线的宽度|Number|-|2|
|lineHoverColor|生成边框线hover时的颜色|String|-|#88f|
|lineHoverWidth|生成边框线hover时的宽度|Number|-|4|
|tipLineColor|生成提示线的颜色,immediate为true时无效|String|-|#262626|
|tipLineWidth|生成提示线的宽度,immediate为true时无效|Number|-|1|
|tipLineStyle|生成提示线的线条样式,immediate为true时无效|String|-|dashed|
|zIndex|生成的线条的zIndex|Number|-|999|
|needParentNodeOffset|是否需要计算父元素offset,某些情况下若出现线定位不准可更改该属性试试|Boolean|-|true|

> *Width属性的单位为px*

### Event
+ 初始化后，会自动加入一个resize的自定义事件监听。该插件并不会直接更改盒子的宽度高度，使用时需要在resize事件的回调中自行处理更改盒子宽高的逻辑。

回调函数中提供以下参数

|参数|说明|类型|
|:---|:---|:---|
|direction|本次操作的方向|String|
|moveOffset|resize改变的偏移量，单位为px|Number|
|moveOffsetPercent|resize改变的偏移量百分比，单位为%|Number|
|resizeWidth/resizeHeight|更改的宽或高|Number|
|resizeWidthPercent/resizeHeightPercent|更改的宽或高的百分比|Number|

## 以Vue指令方式使用
```js
import { ResizeDirective } from '@howdyjs/resize'
// Vue3全局引入
app.use(ReizeDirective, someGlobalOptions)

// Vue2全局引入(对vue2做了兼容)
Vue.use(ReizeDirective, someGlobalOptions)

// 组件内引入
export default {
  directive: {
    resize: ResizeDirective
  }
}
```

### 指令Arg
1. top、left、bottom、right(默认),可以进行resize的方向
2. all，全部方向可resize

> *v-resize:left | v-resize:top | v-resize:all ...*

### 指令Value (Objcet)
参数同上方的配置`Options`

### 指令Event
+ 使用指令后，会自动加入一个resize的自定义事件监听。本指令并不会直接更改盒子的宽度高度，使用时需要在resize事件的回调中自行处理更改盒子宽高的逻辑,可直接使用“@resize="someMethod"”操作回调函数。回调参数同上方`Event`