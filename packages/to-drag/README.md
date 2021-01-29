# ToDrag

**设置Dom可拖动插件**

## 特性
1. 将fixed元素设为可拖动
2. 提供不吸附、左右吸附、四方向吸附三种模式
3. 同时支持PC端和移动端
4. 封装了vue指令的形式

## 原生使用
```js
import ToDrag from '@howdyjs/to-drag'
new ToDrag({
  el: '#to-drag', // Selector or Dom
  options: {
    // Your Options
    // 参考下方说明
  }
});
```

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|moveCursor|是否显示移动光标(cursor: move)|Boolean|-|true|
|**adsorb**|是否开启边缘吸附，默认为不开启，设为1则为左右吸附，设为2为四方向吸附|Number|0/1/2|0|
|adsorbOffset|开启吸附后，吸附边缘的偏移量，单位为px|Number|-|0|
|transitionDuration|吸附动画的过渡效果的持续时间,单位为ms|Number|-|400|
|transitionTimingFunction|吸附动画的过渡效果的动画曲线|String|-|ease-in-out|
|**forbidBodyScroll**|默认开启，处理移动端滚动穿透问题，当前使用设置body的overflow实现，设为false时需自行处理滚动穿透问题|Boolean|-|true|

### Event

+ **todraginit**：初始化完成事件
+ **todragstart**: 拖拽开始事件
+ **todragmove**：拖拽移动事件
+ **todragend**：拖拽结束时间

它们都提供以下的回调参数：
+ width：当前拖拽元素的宽
+ height：当前拖拽元素的宽
+ top：当前拖拽元素的上偏移
+ left：当前拖拽元素的左偏移
+ maxX：当前屏幕的宽度（不包含滚动条）
+ maxY：当前屏幕的高度（不包含滚动条）

*一般在回调中将位置信息记录到 localstorage，在下一次初始化时填入用户上一次最后移动的信息。*

## 以Vue指令方式使用
```js
import { ToDragDirective } from '@howdyjs/to-drag'
// Vue3全局引入
app.use(ToDragDirective, someGlobalOptions)

// Vue2全局引入(对vue2做了兼容)
Vue.use(ToDragDirective, someGlobalOptions)

// 组件内引入
export default {
  directive: {
    'to-drag': ToDragDirective
  }
}
```

### 指令Value (Objcet)
参数同上方的配置`Options`