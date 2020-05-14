<template>
  <div id="imgZoomDirective">
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
      mainName: 'img-zoom-directive',
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
          name: 'Group',
          introduce: '分组切换图片'
        },
        {
          name: 'All Options',
          introduce: '全配置'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
