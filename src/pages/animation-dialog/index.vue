<template>
  <div id="animationDialog">
    <example-frame :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame'
export default {
  components: {
    ExampleFrame
  },
  data () {
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
