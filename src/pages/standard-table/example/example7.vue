<template>
  <standard-table v-model="conf"
                  ref="table"
                  :loading.sync="loading"
                  height="80vh"></standard-table>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      conf: {
        fixedRender: {
          length: 50
        },
        header: {
          operation: [
            {
              type: 'input',
              value: '',
              attrs: {
                placeholder: 'Index'
              }
            },
            {
              type: 'button',
              text: 'Jump',
              attrs: {
                type: 'primary'
              },
              events: {
                click: () => this.jump()
              }
            }
          ]
        },
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
        url: '../../bigData',
        axiosMethod: 'get'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.table.fetch()
    })
  },
  methods: {
    jump () {
      let index = this.conf.header.operation[0].value
      this.$refs.table.fixedRenderJump(index)
    }
  }
}
</script>
