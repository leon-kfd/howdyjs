<template>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      Right Click This box.
    </p>
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
    };
  }
});
</script>

<style scoped>
.box {
  width: 500px;
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
