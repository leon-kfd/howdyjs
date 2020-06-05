# To Drag Directive

**Vue指令-to-drag**

## 特性
1. 通过vue指令将fixed元素设为可拖动
2. 提供不吸附、左右吸附、四方向吸附三种模式
3. 同时支持PC端和移动端

## 配置
### Value (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|moveCursor|是否显示移动光标(cursor: move)|Boolean|-|true|
|**adsorb**|是否开启边缘吸附，默认为不开启，设为1则为左右吸附，设为2为四方向吸附|Number|0/1/2|0|
|adsorbOffset|开启吸附后，吸附边缘的偏移量，单位为px|Number|-|0|
|transitionDuration|吸附动画的过渡效果的持续时间,单位为ms|Number|-|400|
|transitionTimingFunction|吸附动画的过渡效果的动画曲线|String|-|ease-in-out|

### Event

#### toDragEnd

可监听拖拽结束的事件

回调参数
+ width：当前拖拽元素的宽
+ height：当前拖拽元素的宽
+ top：当前拖拽元素的上偏移
+ left：当前拖拽元素的左偏移
+ maxX：当前屏幕的宽度（不包含滚动条）
+ maxY：当前屏幕的高度（不包含滚动条）
