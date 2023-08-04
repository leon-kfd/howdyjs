<template>
  <div v-mouse-menu="options" class="box" @scroll="onScroll">
    <p class="text" style="height: 900px">
      {{ !isMobile ? 'Right click this box' : 'Long press this box' }}.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MouseMenuDirective, MouseMenuCtx } from '../../../../packages/mouse-menu';
export default defineComponent({
  directives: {
    MouseMenu: MouseMenuDirective
  },
  setup() {
    return {
      isMobile: 'ontouchstart' in window,
      onScroll: () => {
        if(MouseMenuCtx) MouseMenuCtx.close()
      },
      options: {
        params: { a: 1 },
        menuList: [
          {
            label: '打开',
            tips: 'Open',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => {
              console.log('open', params, currentEl, bindingEl, e)
            }
          },
          {
            label: '编辑',
            tips: 'Edit',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => {
              console.log('edit', params, currentEl, bindingEl, e)
            }
          },
          {
            label: '删除',
            tips: 'Delete',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => {
              console.log('delete', params, currentEl, bindingEl, e)
            }
          },
          {
            label: '重命名',
            tips: 'Rename',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => {
              console.log('rename', params, currentEl, bindingEl, e)
            }
          }
        ],
        // 菜单Open回调
        onOpen: () => {
          console.log('onOpen')
        },
        // 菜单Close回调
        onClose: () => {
          console.log('onClose')
        },
        // 移动端长按配置
        useLongPressInMobile: true,
        longPressDuration: 300,
        longPressPreventDefault: (e: Event, el: HTMLElement) => {
          console.log({ e, el })
          return false
        }
      }
    };
  }
});
</script>

<style scoped>
.box {
  width: 500px;
  width: min(90vw, 500px);
  height: 500px;
  background: #ffe0e0;
  margin: 0 auto;
  overflow-y: auto;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
