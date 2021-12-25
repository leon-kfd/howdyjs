<template>
  <example-frame
    :main-name="mainName"
    :readme-list="readmeList"
    :example-list="exampleList"
  />
</template>

<script lang="ts">
import ExampleFrame from '../../components/ExampleFrame.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ExampleFrame
  },
  setup() {
    return {
      mainName: 'mouse-menu',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Basic',
          introduce: '基础菜单'
        },
        {
          name: 'Sub Menu',
          introduce: '二级菜单'
        },
        {
          name: 'Icon',
          introduce: '使用图标'
        },
        {
          name: 'Custom Style',
          introduce: '自定义样式'
        },
        {
          name: 'Parent Mount',
          introduce: '父级挂载'
        },
        {
          name: 'Custom params',
          introduce: '传递参数'
        },
        {
          name: 'Dynamic',
          introduce: '动态参数'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped></style>
