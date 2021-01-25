<template>
  <example-frame
    :main-name="mainName"
    :readme-list="readmeList"
    :example-list="exampleList"
    disabled-mobile
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
      mainName: 'scroll',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Basic',
          introduce: '默认'
        },
        {
          name: 'Custom Style',
          introduce: '自定义样式'
        },
        {
          name: 'Hover Mode',
          introduce: '悬停展示'
        },
        {
          name: 'Drag Scroll',
          introduce: '拖拽滚动'
        },
        {
          name: 'Update',
          introduce: '更新滚动条'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped></style>
