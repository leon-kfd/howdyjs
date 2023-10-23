<template>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      {{ !isMobile ? 'Right click this box' : 'Long press this box, but it don not support children menu' }}.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { MouseMenuDirective, CustomMouseMenuOptions } from '../../../../packages/mouse-menu';
const vMouseMenu = MouseMenuDirective
const options: CustomMouseMenuOptions = {
  useLongPressInMobile: true,
  customClass: 'custom-howdy-menu', // 通过注入类名实现更多样式效果
  menuWrapperCss: {
    background: '#ffffff',
    borderRadius: '6px',
    padding: '8px 6px',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)',
    lineColor: '#eee',
    lineMargin: '5px 10px',
  },
  menuItemCss: {
    arrowSize: '10px',
    iconFontSize: '18px',
    labelColor: '#5E6370',
    iconColor: '#5E6370',
  },
  menuList: [
    {
      label: '刷新',
      tips: 'Refresh',
      fn: (...args:[]) => console.log('open', args)
    },
    {
      label: '查看',
      tips: 'Check',
      fn: (...args:[]) => console.log('open', args),
      disabled: () => true
    },
    {
      line: true
    },
    {
      label: '操作',
      tips: 'Operation',
      children: [
        {
          label: '打开',
          tips: 'Open',
          fn: (...args:[]) => console.log('open', args)
        },
        {
          label: '编辑',
          tips: 'Edit',
          disabled: () => true,
          fn: (...args:[]) => console.log('open', args)
        },
        {
          label: '删除',
          tips: 'Delete',
          customClass: 'delete', // 自定义样式
          fn: (...args:[]) => console.log('open', args)
        },
        {
          label: '重命名',
          tips: 'Rename',
          fn: (...args:[]) => console.log('open', args),
          hidden: () => true
        }
      ]
    },
    {
      label: '设置',
      tips: 'Setting'
    }
  ]
}
const isMobile = 'ontouchstart' in window
</script>

<style scoped>
.box {
  width: 500px;
  width: min(90vw, 500px);
  height: 500px;
  background: #ffe0e0;
  margin: 0 auto;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>

<style lang="scss">
// 覆盖菜单CSS
.__menu__wrapper.custom-howdy-menu {
  .__menu__item,
  .__menu__sub__item{
    border-radius: 6px;
    &:not(.disabled):hover {
      color: rgb(31, 54, 128) !important;
      background: rgba(31, 54, 128, 0.1) !important;
    }
    &.delete {
      &:hover {
        color: rgb(216, 94, 94) !important;
        background: rgba(216, 94, 94, 0.2) !important;
      }
    }
  }
}
</style>
