# Standard Tabs

**Vue组件-StandardTabs**

## 特性
1. 适用于手机端的滑动Tabs组件
2. 集成顶部Tabs切换的交互动画
3. 备注：该组件不适用于PC端

## 配置

### 1 Slot 插槽
插槽名与每个标签页自动关联,使用tab + 标签索引形成slot名
```html
<standard-tabs :tabList="['tab0', 'tab1', 'tab2']">
  <template #tab0>Tab0<template>
  <template #tab1>Tab1<template>
  <template #tab2>Tab2<template>
</standard-tabs>
...
```


### 2 Attrs 属性
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|tabWidth|标签栏标签宽度|Number|-|80|
|lineWidth|标签栏激活线条宽度|Number|-|30|
|tabContentWidth|标签页宽度,Number时为单位为px,String时可传vw单位|Number/String|-|100vw|
|tabContentMinHeight|标签页最小高度（设置防止出现无元素进行滑动）|String|100px|
|tabList|标签数组|Array[String]|Require|-|

### 3 Methods 方法
|方法名|说明|参数|
|:---|:---|:---|
|setActive|跳转标签页|index:跳转标签的index|

### 4 Events 事件
|事件名|说明|回调参数|
|:---|:---|:---|
|contentTouchStart|标签页touchStart|TouchEvent|
|contentTouchMove|标签页touchMove|TouchEvent|
|contentTouchEnd|标签页touchEnd|TouchEvent|
|tabActiveChange|标签页切换事件|index:跳转标签的index|