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
      mainName: 'to-drag',
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
          name: 'Adsorb Mode1',
          introduce: '左右吸附'
        },
        {
          name: 'Adsorb Mode2',
          introduce: '四方向吸附'
        },
        {
          name: 'Other Options',
          introduce: '其他配置'
        },
        {
          name: 'Drag End Event',
          introduce: '事件回调'
        },
        {
          name: 'Absoulte Mode',
          introduce: 'Absolute模式'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped></style>
