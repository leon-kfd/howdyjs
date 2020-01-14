# observer-directive

**Vue指令-observer**

## 特性
1. 使用该指令可为绑定元素添加一个大小改变的监听
2. 基于JS试验API：[ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
3. 基于[resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)

## 配置

### Value (Object)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|wait|节流延迟(s)|Number|-|0|
|immediate|是否立即先执行一遍回调|Boolean|-|true|

### Event
> 使用指令后，会自动加入一个sizeChange的自定义事件监听,可直接使用“@sizeChange="someMethod"”操作回调函数
回调函数中提供以下参数
|参数|说明|类型|
|:---|:---|:---|
|contentRect|Dom大小改变后的位置信息|Object|