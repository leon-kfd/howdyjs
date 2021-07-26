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
      mainName: 'to-control',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Fixed',
          introduce: 'Fixed定位'
        },
        {
          name: 'Absolute',
          introduce: 'Absolute定位'
        },
        {
          name: 'Vue Directive',
          introduce: 'Vue指令方式'
        },
        {
          name: 'Custom Icon',
          introduce: '自定义图标'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped></style>
