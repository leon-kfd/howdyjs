<template>
  <div id="observeDirective">
    <example-frame :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"></example-frame>
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
      mainName: 'size-observer-directive',
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
          name: 'Options',
          introduce: '配置'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
