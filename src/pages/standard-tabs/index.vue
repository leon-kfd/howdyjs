<template>
  <div id="animationDialog">
    <example-frame :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame'
// import { StandardTabs } from '@/howdy/index.js'
// Vue.use(StandardTabs)
export default {
  components: {
    ExampleFrame
  },
  data () {
    return {
      mainName: 'standard-tabs',
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
          name: 'Fixed',
          introduce: '固定标签栏'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
