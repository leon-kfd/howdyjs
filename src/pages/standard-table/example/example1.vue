<template>
  <standard-table v-model="conf"></standard-table>
</template>

<script>
import Mock from 'mockjs'
export default {
  data () {
    return {
      conf: {
        row: [
          {
            label: '用户Id',
            prop: 'userId'
          },
          {
            label: '用户名',
            prop: 'userName'
          },
          {
            label: '性别',
            prop: 'sex',
            formatter: (row) => row.sex === 1 ? '男' : '女'
          },
          {
            label: '职位',
            prop: 'position'
          },
          {
            label: '生日',
            prop: 'birth'
          }
        ],
        data: Mock.mock({
          'data|100': [
            {
              'userId|+1': 1,
              'userName': '@cname',
              'position': `@pick('前端', 'JAVA', '测试', '运维')`,
              'sex': '@pick(1,2)',
              'birth': '@date'
            }
          ]
        }).data
      }
    }
  }
}
</script>
