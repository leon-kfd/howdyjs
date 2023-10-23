<template>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      {{ !isMobile ? 'Right click this box' : 'Long press this box' }}.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { MouseMenuDirective } from '../../../../packages/mouse-menu';
import type { CustomMouseMenuOptions} from '../../../../packages/mouse-menu';
const vMouseMenu = MouseMenuDirective
onMounted(() => {
  const cssLink = document.createElement('link');
  cssLink.id = 'fontawesomeCDN';
  cssLink.rel  = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = 'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  document.querySelector('head')?.appendChild(cssLink);
})
onUnmounted(() => {
  const cssLink = document.querySelector('#fontawesomeCDN');
  cssLink?.parentNode?.removeChild(cssLink);
})
const isMobile = 'ontouchstart' in window
const options: CustomMouseMenuOptions = {
  useLongPressInMobile: true,
  hasIcon: true,
  iconType: 'font-icon',
  menuList: [
    {
      label: '打开',
      tips: 'Open',
      icon: 'fas fa-folder-open',
      fn: (...args:[]) => console.log('open', args)
    },
    {
      label: '编辑',
      tips: 'Edit',
      icon: 'fas fa-pencil-alt',
      fn: (...args:[]) => console.log('edit', args)
    },
    {
      label: '删除',
      tips: 'Delete',
      icon: 'fas fa-trash-alt',
      fn: (...args:[]) => console.log('delete', args)
    },
    {
      label: '重命名',
      tips: 'Rename',
      fn: (...args:[]) => console.log('rename', args)
    }
  ]
}
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
