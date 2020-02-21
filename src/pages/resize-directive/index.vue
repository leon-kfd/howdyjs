<template>
  <div id="resizeDirective">
    <example-frame :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"
                   disabledMobile></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame';
export default {
  components: {
    ExampleFrame
  },
  data () {
    return {
      mainName: 'resize-directive',
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
};
</script>

<style lang="scss" scoped></style>
