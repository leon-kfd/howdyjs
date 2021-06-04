# Mouse Menu

![Version](https://img.shields.io/npm/v/@howdyjs/mouse-menu)
![Size](https://img.shields.io/bundlephobia/min/@howdyjs/mouse-menu?color=%2344cc88)

**自定义菜单-VUE3组件/指令**

## 特性
1. 默认封装成Vue指令
2. 支持自定义样式
3. 支持子菜单
4. 支持加入菜单图标
5. *支持移动端长按唤出菜单*(v1.7.0后支持)

## 配置

### Props/指令Value (Objcet)
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|el|触发的Dom元素（以Vue组件方式或CustomMenu函数方式使用时必须传入）|-|-|-|
|menuWidth|菜单宽度|Number|-|200|
|menuList|生成菜单项的数组，具体配置参考下表|Array|-|-|
|hasIcon|是否有菜单图标|Boolean|-|false|
|iconType|菜单图标的类型(目前仅支持字体图标)|String|-|font-icon|
|menuWrapperCss|菜单容器的CSS设置，具体配置参考下表|Object|-|-|
|menuItemCss|菜单项的CSS设置，具体配置参考下表|Object|-|-|
|params|传给处理函数的自定义参数，会注入到下方各回调函数的首个参数中|Any|-|-|
|appendToBody|容器是否挂载到body上|Boolean|-|true|
|disabled|是否禁用整个菜单，接收一个函数|(params: any) => boolean|-|-|
|useLongPressInMobile|移动端下兼容使用长按事件唤出菜单, 但长按模式不支持多级菜单|Boolean|-|false|
|longPressDuration|长按事件需持续时间,单位ms|Number|-|500|

#### menuList-菜单项数组配置
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|fn|点击菜单后执行的回调,回调参数1为用户传入的Params, 参数2为点击右键时所在的HtmlElement元素（使用document.elementFromPoint获取）, 参数3为指令绑定的当前元素|Function|-|-|
|label|菜单名, 可使用函数，回调参数同fn选项|String, Function|-|-|
|tips|菜单辅助文本（处于右侧的文本），可使用函数，回调参数同fn选项|String, Function|-|-|
|icon|菜单图标的类名（字体图标)|String|-|-|
|hidden|菜单项是否隐藏，可使用函数，回调参数同fn选项|Boolean, Function|-|-|
|disabled|菜单项是否不可点击，可使用函数，回调参数同fn选项|Boolean, Function|-|-|
|children|子菜单的菜单项数组（配置与此表一致，但目前仅支持二级菜单）|Array|-|-|
|line|是否为分割线,该值为True时,以上设置均失效|Boolean|-|-|

#### menuWrapperCss-菜单容器CSS设置
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|background|菜单容器背景色|String|-|#c8f2f0|
|boxShadow|菜单容器阴影|String|-|0 1px 5px #888|
|padding|默认padding|String|-|5px 0|
|borderRadius|圆角|String|-|4px|
|lineColor|分割线颜色|String|-|#ccc|
|lineMargin|分割线Margin|String|-|5px 0|

### menuItemCss-菜单项CSS设置
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|height|每项高度|String|-|30px|
|padding|-|String|-|0 10px|
|iconSize|图标大小|String|-|20px|
|iconFontSize|字体图标字体大小(设置类型为字体图标时可用)|String|-|null|
|iconColor|字体图标颜色|String|-|#484852|
|labelColor|菜单项标题颜色|String|-|#484852|
|labelFontSize|菜单项标题字体大小|String|-|14px|
|tipsColor|菜单辅助文字颜色|String|-|#889|
|tipsFontSize|菜单辅助文字字体大小|String|-|12px|
|arrowColor|指示箭头颜色（出现子菜单时生成）|String|-|#484852|
|arrowSize|指示箭头大小（指示箭头为使用border生成的三角形)|String|-|10px|
|disabledColor|菜单禁用状态时的颜色|String|-|#bcc|
|hoverBackground|hover时菜单项的背景色|String|-|rgba(255,255,255,.8)|
|hoverLabelColor|hover时菜单项label的颜色|String|-|null|
|hoverTipsColor|hover时菜单项tips的颜色|String|-|null|
|hoverArrowColor|hover时菜单项arrow的颜色|String|-|null|

> 以上涉及的CSS部分配置使用css3的css变量实现，若需兼容IE请自己定义样式表

### Methods

|方法名|说明|参数|
|:---|:---|:---|
|show|显示菜单，一般不需要自行调用|x:number,y:number|
|close|关闭菜单|-|

> 若以组件方式使用，需要使用上方的show/close方法自行处理鼠标右键菜单行为

## 使用
1. 指令方式使用（推荐）

```html
<template>
  <div v-mouse-menu="options">Dom</div>
</template>
<script>
import { MouseMenuDirective } from '@howdyjs/mouse-menu';
export default {
  directive: {
    MouseMenu: MouseMenuDirective
  },
  setup() {
    return {
      options: {} // Some Options
    }
  }
}
</script>
```

2. 函数方式使用

```html
<template>
  <div ref="dom" @mousedown="showMenu">Dom</div>
</template>
<script>
import { ref } from 'vue'
import { CustomMouseMenu } from '@howdyjs/mouse-menu';
export default {
  setup() {
    const dom = ref()
    const showMenu = (e) => {
      const MouseMenuCtx = CustomMouseMenu({
        el: dom.value,
        // Other Options
      })
      if (e.button === 2) {
        e.stopPropagation();
        document.oncontextmenu = (e: MouseEvent) => {
          e.preventDefault();
          const { x, y } = e;
          MouseMenuCtx.show(x,y);
        };
        document.onmousedown = () => {
          document.oncontextmenu = null;
          MouseMenuCtx.close();
        };
      } else {
        MouseMenuCtx.close();
      }
    }
    return {
      dom,
      showMenu
    }
  }
}
```

3. 组件方式使用

```html
<template>
  <div ref="dom" @mousedown="showMenu">Dom</div>
  <mouse-menu v-bind="options"></mouse-menu>
</template>
<script>
import { ref } from 'vue'
import MouseMenu from '@howdyjs/mouse-menu';
export default {
  components: {
    MouseMenu
  },
  setup () {
    const dom = ref()
    const showMenu = (e) => {
      if (e.button === 2) {
        e.stopPropagation();
        document.oncontextmenu = (e: MouseEvent) => {
          e.preventDefault();
          const { x, y } = e;
          MouseMenuCtx.show(x,y);
        };
        document.onmousedown = () => {
          document.oncontextmenu = null;
          MouseMenuCtx.close();
        };
      } else {
        dom.value.close();
      }
    }
    return {
      dom,
      showMenu,
      options: {
        el: dom.value, //Is Required
        // Other Options...
      } 
    }
  }
}
</script>
```

## 其他说明

为了性能，指令封装模式默认只对mounted钩子进行挂载。  
当使用场景中有params参数传入菜单函数，有可能需要在组件更新时更新菜单，这时可以同时把update也挂载上。可参考以下写法:
```js
import { MouseMenuDirective } from '@howdyjs/mouse-menu';
export default {
  directive: {
    MouseMenu: {
      ...MouseMenuDirective,
      updated: MouseMenuDirective.mounted
    }
  }
}
```

+ UMD Name: `HowdyMouseMenu`

