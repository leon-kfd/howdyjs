<template>
  <div id="resizeDirective">
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
      mainName: 'to-drag-directive',
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
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
