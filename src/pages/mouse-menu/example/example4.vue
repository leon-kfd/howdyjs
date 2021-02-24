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
        menuWrapperCss: {
          background: 'linear-gradient(45deg, #3439e6, #EC6EAD)',
          boxShadow: '0 0 10px #ccc'
        },
        menuItemCss: {
          labelColor: '#fff',
          tipsColor: '#ccc',
          arrowColor: '#aaa',
          disabledColor: '#aaa'
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
