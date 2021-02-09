# Animation Dialog

**VUE3组件-AnimationDialog**

## 特性
1. 可实现从点击元素打开Dialog的动画交互
2. 可使用animate.css动画进行dialog的打开与关闭
3. [animate.css](https://daneden.github.io/animate.css/)  
> 为了优化包大小，使用animate.css模式时请自行引入animate.css样式文件

## 配置

### 1 Attrs 属性
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|width|Dialog宽度|String|-|50vw|
|height|Dialog高度|String|-|70vh|
|animationMode|是否为animate.css模式打开，需自行引入animate.css|Boolean|-|false|
|animationIn|当animationMode为true时有效，Dialog进入动画,参考animate.css|String|-|bounceIn|
|animationOut|当animationMode为true时有效，Dialog离开动画,参考animate.css|String|-|bounceOut|
|time|动画执行时间|Number|-|500|
|timingFunction|当animationMode为false时有效，过渡动画曲线|String|-|cubic-bezier(0.55,-0.15, 0.71, 1.35)|
|openFromItself|是否使用自身作为Dialog，即Dialog为点击的元素(但打开的其实为Clone的Dom)|Boolean|-|false|
|appendToBody|是否将Dom插入到body中，防止父元素样式造成的异常|Boolean|-|false|
|customClass|自定义Dialog的类名|String|-|-|
|listenWindowSizeChange|是否需要监听Window宽度变化而改变dialog宽度,默认不监听|Boolean|-|false|
|debounceWait|监听Window宽度变化的延迟时间|Number|-|200|

### 2 Methods 方法
|方法名|说明|参数|
|:---|:---|:---|
|open|打开Dialog|el (在默认模式下，需要传实现交互的Dom，即点击元素，不传默认从中间打开)|
|close|关闭Dialog|-|


### 3 Events 事件
|事件名|说明|回调参数|
|:---|:---|:---|
|beforeClose|关闭动画前执行事件|-|

> Package umd name: `HowdyAnimationDialog`