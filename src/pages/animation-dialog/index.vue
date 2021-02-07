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
      mainName: 'animation-dialog',
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
          name: 'Self Open',
          introduce: '以自身作为打开元素'
        },
        {
          name: 'Animation Mode',
          introduce: 'Animate.css动画模式'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped></style>
