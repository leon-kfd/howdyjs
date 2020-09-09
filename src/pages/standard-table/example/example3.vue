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
        url: `${this.$baseURL}/static`,
        axiosMethod: 'get',
        pagination: {
          static: true
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.table.fetch()
    })
  }
}
</script>
