<template>
  <div id="standardForm">
    <example-frame v-if="canLoad"
                   :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame'
import { loadScriptSync } from '@/utils/helper'
import { StandardForm } from '@/howdy/index.js'
export default {
  components: {
    ExampleFrame
  },
  data () {
    return {
      canLoad: false,
      mainName: 'standard-form',
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
          name: 'Label & Value',
          introduce: '列表数据映射'
        },
        {
          name: 'Attrs & Events',
          introduce: '原生属性与事件'
        },
        {
          name: 'Slot (Template)',
          introduce: '自定义表单组件'
        },
        {
          name: 'Slot (JSX)',
          introduce: '自定义表单组件'
        },
        {
          name: 'Rule',
          introduce: '表单验证'
        }
      ]
    }
  },
  async created () {
    await Promise.all([
      process.env.NODE_ENV === 'production' && loadScriptSync('https://cdn.bootcss.com/element-ui/2.12.0/index.js')
    ])
    if (process.env.NODE_ENV === 'production') {
      Vue.use(ELEMENT, {
        size: 'small',
        zIndex: 88888
      })
      Vue.use(StandardForm)
    } else {
      const { default: Vue } = await import('vue')
      const { default: Element } = await import('element-ui')
      Vue.use(Element, {
        size: 'small',
        zIndex: 88888
      })
      Vue.use(StandardForm)
    }
    this.canLoad = true
  }
}
</script>

<style lang="scss" scoped></style>
