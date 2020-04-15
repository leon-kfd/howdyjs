# Img Zoom Directive

**Vue指令-img-zoom**

## 特性
1. Vue指令实现点击图片放大显示
2. 支持设置同组图片，可在放大的模态框进行切换上一张下一张
3. 图片Loading加载效果
4. 可设置点击后加载显示的是另外一张大图

## 配置

### Value (String/Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|imgSrc|放大后的图片地址, 默认不传会使用原img的src|String|-|-|
|title|显示图片标题|String|-|-|
|group|启用图片分组功能，传一个自定义组名|String|-|-|
|zoomCursor|是否显示放大镜cursor|Boolean|-|false|
|showCloseBtn|是否显示关闭按钮，开启后只能通过点击关闭按钮关闭模态框|Boolean|-|false|

**指令支持简写**
```html
<img v-img-zoom:example="http://a.com/b.png" />
// 等价于
<img v-img-zoom="{group: 'example', imgSrc: 'http://a.com/b.png'}" />
```

