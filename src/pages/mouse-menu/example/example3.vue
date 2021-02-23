<template>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      Right Click This box.
    </p>
  </div>
</template>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.min.css';
import { defineComponent } from 'vue';
import { MouseMenuDirective } from '../../../../packages/mouse-menu';
export default defineComponent({
  directives: {
    MouseMenu: MouseMenuDirective
  },
  setup() {
    return {
      options: {
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
