# ToControl

![Version](https://img.shields.io/npm/v/@howdyjs/control)
![Size](https://img.shields.io/bundlephobia/min/@howdyjs/control?color=%2344cc88)

**Resize or drag to move a html dom.**

## 特性
1. 将一个定位为absolute的Dom设置成可拖拽移动与更改大小
2. 继承于`@howdyjs/to-drag`，为其添加更改大小功能

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

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|moveCursor|是否显示移动光标(cursor: move)|Boolean|-|true|
|forbidBodyScroll|默认开启，处理移动端滚动穿透问题，当前使用设置body的overflow实现，设为false时需自行处理滚动穿透问题|Boolean|-|true|
|**isAbsolute**|是否为Absolute模式,v1.5.0后新增，可控制absolute的元素在其父元素下进行拖拽，开启该模式暂不支持吸附功能|Boolean|-|false|
|parentSelector|Absolute模式下元素的父级容器，目前只支持传入字符串选择器|String|-|-|
|disabled|是否禁用，需传入函数返回Boolean|Function: () => boolean|-|-|
|arrowOptions|右下角更改大小用的箭头配置，配置参考下表|Object|-|-|

#### arrowOptions (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|size|箭头大小，单位为px|number|-|8|
|lineWidth|箭头线宽|number|-|2|
|lineColor|箭头颜色|String|-|#9a9a9a|
|padding|距离右下角padding|number|-|2|
