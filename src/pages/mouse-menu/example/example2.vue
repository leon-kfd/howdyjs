<template>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      {{ !isMobile ? 'Right click this box' : 'Long press this box, but it don not support children menu' }}.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { MouseMenuDirective } from '../../../../packages/mouse-menu';
import type { CustomMouseMenuOptions} from '../../../../packages/mouse-menu';
// Setup语法下的指令写法, 以小写v开头
const vMouseMenu = MouseMenuDirective
// 右键菜单配置, TS下导入CustomMouseMenuOptions定义类型
const options: CustomMouseMenuOptions = {
  useLongPressInMobile: true,
  menuWidth: 180,
  menuItemCss: {
    arrowSize: '8px'
  },
  menuList: [
    {
      label: '刷新',
      tips: 'Refresh',
      fn: (...args:[]) => console.log('refresh', args)
    },
    {
      label: '查看',
      tips: 'Check',
      fn: (...args:[]) => console.log('check', args),
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
          fn: (...args:[]) => console.log('edit', args)
        },
        {
          label: '删除',
          tips: 'Delete',
          fn: (...args:[]) => console.log('delete', args)
        },
        {
          label: '重命名',
          tips: 'Rename',
          fn: (...args:[]) => console.log('rename', args),
          hidden: () => true
        }
      ]
    },
    {
      label: '设置',
      tips: 'Setting',
      fn: (...args:[]) => console.log('setting', args),
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
