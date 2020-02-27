<template>
  <standard-table v-model="conf"
                  ref="table"
                  :loading.sync="loading"></standard-table>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
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
        data: [],
        url: '../../page',
        axiosMethod: 'post',
        pagination: {
          requestPage: 'page',
          requestPageSize: 'pageSize'
        },
        responseItems: 'data.data.items',
        responseTotal: 'data.data.total',
        operation: {
          btns: [
            {
              label: '详情',
              fn: (row) => this.detail(row)
            },
            {
              label: '删除',
              fn: (row) => this.delete(row),
              style: (row) => row.canDelete ? 'color: #b22' : 'color: #999',
              disabled: (row) => !row.canDelete
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.table.fetch()
    })
  },
  methods: {
    detail (row) {
      alert('Handle click detail, console will show row data')
      console.log(row)
    },
    delete (row) {
      alert('Handle click delete, console will show row data')
      console.log(row)
    }
  }
}
</script>
