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
      mainName: 'scroll-directive',
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
};
</script>

<style lang="scss" scoped></style>
