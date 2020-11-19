<template>
  <div id="standardTable">
    <example-frame v-if="canLoad"
                   :mainName="mainName"
                   :readmeList="readmeList"
                   :exampleList="exampleList"></example-frame>
  </div>
</template>

<script>
import ExampleFrame from '@/components/ExampleFrame'
import { loadScriptSync } from '@/utils/helper'
import { StandardTable } from '@/howdy/index.js'
export default {
  components: {
    ExampleFrame
  },
  async created () {
    await Promise.all([
      process.env.NODE_ENV === 'production' && loadScriptSync('https://cdn.bootcss.com/element-ui/2.12.0/index.js'),
      loadScriptSync('https://cdn.bootcss.com/Mock.js/1.0.1-beta3/mock-min.js'),
      loadScriptSync('https://cdn.bootcss.com/axios/0.19.2/axios.min.js')
    ])
    if (process.env.NODE_ENV === 'production') {
      Vue.use(ELEMENT, {
        size: 'small',
        zIndex: 8888
      })
      Vue.use(StandardTable, {
        responseItems: 'data.data.items',
        responseTotal: 'data.data.total',
        pageSize: 15,
        pageSizes: [10, 15, 20, 50, 100]
      })
    } else {
      const { default: Vue } = await import('vue')
      const { default: Element } = await import('element-ui')
      Vue.use(Element)
      Vue.use(StandardTable, {
        responseItems: 'data.data.items',
        responseTotal: 'data.data.total',
        pageSize: 15,
        pageSizes: [10, 15, 20, 50, 100]
      })
    }
    this.canLoad = true
  },
  data () {
    return {
      canLoad: false,
      mainName: 'standard-table',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档'
        }
      ],
      exampleList: [
        {
          name: 'Basic',
          introduce: '基本表格'
        },
        {
          name: 'Fetch',
          introduce: '自动获取后端数据'
        },
        {
          name: 'Static Pagination',
          introduce: '数据前端分页'
        },
        {
          name: 'Auto Pagination',
          introduce: '数据后端分页'
        },
        {
          name: 'Operation',
          introduce: '右侧操作栏'
        },
        {
          name: 'Filter Form',
          introduce: '生成搜索条件表单'
        },
        {
          name: 'Big Data',
          introduce: '大数据表格'
        },
        {
          name: 'Slot',
          introduce: '表格Slot'
        },
        {
          name: 'JSX Slot',
          introduce: 'JSX Slot'
        },
        {
          name: 'Custom Column',
          introduce: '自定义列'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
