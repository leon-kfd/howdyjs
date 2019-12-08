export default `
# resize-directive

**Vue指令-resize**

## 特性
1. 通过vue指令为box加入更改大小功能
2. 目前仅支持position:absolute的布局或者简单Flex布局
3. 可配置resize立即生效或者延迟生效

## 配置
### Arg
1. top、left、bottom、right(默认),可以进行resize的方向
2. all，全部方向可resize

> *v-resize:left | v-resize:top | v-resize:all ...*

### Value (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|direction|与上方Arg中的一致，resize方向数组|Array|left/right/top/bottom|right|
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

> *Width属性的单位为px*
`
