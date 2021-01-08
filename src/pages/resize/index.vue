<template>
  <div id="resizeDirective">
    <example-frame
      :main-name="mainName"
      :readme-list="readmeList"
      :example-list="exampleList"
      disabled-mobile
    />
  </div>
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
      mainName: 'resize',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Flex Basic',
          introduce: 'Flex布局-默认'
        },
        {
          name: 'Flex Multiple',
          introduce: 'Flex布局-两列'
        },
        {
          name: 'Absolute Basic',
          introduce: 'Absolute定位布局'
        },
        {
          name: 'All Direction',
          introduce: 'Abosulute-全方向'
        },
        {
          name: 'Immediate',
          introduce: '直接更改宽高'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped></style>
