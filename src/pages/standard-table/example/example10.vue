<template>
  <standard-table v-model="conf"></standard-table>
</template>

<script>
import Mock from 'mockjs'
export default {
  data () {
    return {
      conf: {
        customColumn: true,
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
            formatter: (row) => row.sex === 1 ? '男' : '女',
            hidden: true
          },
          {
            label: '部门',
            prop: 'department',
            hidden: true
          },
          {
            label: '职位',
            prop: 'position',
            hidden: true
          },
          {
            label: '手机号',
            prop: 'tel'
          },
          {
            label: '邮箱',
            prop: 'email'
          },
          {
            label: '生日',
            prop: 'birth',
            hidden: true
          },
          {
            label: '地址',
            prop: 'address'
          }
        ],
        data: Mock.mock({
          'data|100': [
            {
              'userId|+1': 1,
              'userName': '@cname',
              'position': "@pick('前端', 'JAVA', '测试', '运维')",
              'sex': '@pick(1,2)',
              'department': "@pick('部门A', '部门B', '部门C')",
              'tel': "@pick('13','15','18')@string('number', 9)",
              'birth': '@date',
              'email': '@email',
              'address': '@county(true)'
            }
          ]
        }).data
      }
    }
  }
}
</script>
