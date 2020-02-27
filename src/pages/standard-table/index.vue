<template>
  <div id="standardTable">
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
          name: 'Custom Column',
          introduce: '自定义列'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
