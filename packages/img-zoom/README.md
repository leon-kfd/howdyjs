# Img Zoom

**图片放大插件**

## 特性
1. 实现点击图片放大显示
2. 支持设置同组图片，可在放大的模态框进行切换上一张下一张
3. 图片Loading加载效果
4. 可设置点击后加载显示的是另外一张大图
5. 封装了vue指令的形式

## 原生使用
```js
import ImgZoom from '@howdyjs/img-zoom'
new ImgZoom({
  el: '#el', // Selector or Dom
  options: {
    // Your Options
    // 参考下方说明
  }
})
```

+ UMD CDN: <a href="https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/img-zoom/dist/index.umd.js</a>
+ UMD Name: `HowdyImgZoom`
+ UMD Example: <a href="https://codepen.io/leon-kfd/pen/XWNKyLe" target="_blank">Click here</a>

### Options (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|imgSrc|放大后的图片地址, 默认不传会使用原img的src|String|-|-|
|title|显示图片标题|String|-|-|
|group|启用图片分组功能，传一个自定义组名|String|-|-|
|zoomCursor|是否显示放大镜cursor|Boolean|-|false|
|showCloseBtn|是否显示关闭按钮，开启后只能通过点击关闭按钮关闭模态框|Boolean|-|false|
|preventDefault|是否阻止默认行为，例如父元素的A标签跳转|Boolean|-|false|

## 以Vue指令方式使用

```js
import { ImgZoomDirective } from '@howdyjs/resize'
// Vue3全局引入
app.use(ImgZoomDirective)

// Vue2全局引入(对vue2做了兼容)
Vue.use(ImgZoomDirective)

// 组件内引入
export default {
  directive: {
    ImgZoom: ImgZoomDirective
  }
}
```

**指令支持简写**
```html
<img v-img-zoom:example="http://a.com/b.png" />
// 等价于
<img v-img-zoom="{group: 'example', imgSrc: 'http://a.com/b.png'}" />
```






