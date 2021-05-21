<template>
  <div v-mouse-menu="options" class="box">
    <div
      v-for="num in 9"
      :key="num"
      class="box-listitem"
      :data-id="num"
    >
      <p class="text">
        <span>{{ num }}</span>
        <span v-if="[1,5,9].includes(num)">, Hidden Open</span>
        <span v-if="[2,4,6].includes(num)">, Disabled Edit</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MouseMenuDirective } from '../../../../packages/mouse-menu';
export default defineComponent({
  directives: {
    MouseMenu: MouseMenuDirective
  },
  setup() {
    return {
      options: {
        useLongPressInMobile: true,
        menuHiddenFn: (_: any, el: HTMLElement) => !(el.getAttribute('class') && el.getAttribute('class')?.includes('box-listitem')),
        menuList: [
          {
            label: (_: any, currentEl: HTMLElement) => {
              return `#${currentEl.getAttribute('data-id')}`;
            },
            disabled: true
          },
          {
            label: '打开',
            tips: 'Open',
            fn: (...args:[]) => console.log('open', args),
            hidden: (_: any, currentEl: HTMLElement) => ['1', '5', '9'].includes(currentEl.getAttribute('data-id') as string)
          },
          {
            label: '编辑',
            tips: 'Edit',
            fn: (...args:[]) => console.log('edit', args),
            disabled: (_: any, currentEl: HTMLElement) => ['2', '4', '6'].includes(currentEl.getAttribute('data-id') as string)
          },
          {
            label: '删除',
            tips: 'Delete',
            fn: (...args:[]) => console.log('delete', args)
          },
          {
            label: '重命名',
            tips: 'Rename',
            fn: (...args:[]) => console.log('rename', args)
          }
        ]
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-listitem {
  width: 140px;
  height: auto;
  margin: 20px 10px;
  background: #c2c2e0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
