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
        header: {
          operation: [
            {
              label: '用户名',
              type: 'input',
              valueFor: 'userName',
              attrs: {
                placeholder: '搜索用户名',
                clearable: true
              }
            },
            {
              label: '出生',
              type: 'date-picker',
              value: '',
              attrs: {
                type: 'daterange',
                'range-separator': '至',
                'start-placeholder': '开始日期',
                'end-placeholder': '结束日期',
                'value-format': 'yyyy-MM-dd',
                'picker-options': {
                  shortcuts: [{
                    text: '测试-80后',
                    onClick (picker) {
                      picker.$emit('pick', ['1980-01-01', '1989-12-31'])
                    }
                  }, {
                    text: '测试-90后',
                    onClick (picker) {
                      picker.$emit('pick', ['1990-01-01', '1999-12-31'])
                    }
                  }, {
                    text: '测试-00后',
                    onClick (picker) {
                      picker.$emit('pick', ['2000-01-01', '2009-12-31'])
                    }
                  }]
                }
              },
              events: {
                change: (val) => {
                  this.conf.params.startDate = val ? val[0] : ''
                  this.conf.params.endDate = val ? val[1] : ''
                }
              }
            },
            {
              type: 'button',
              text: '查询',
              attrs: {
                type: 'primary',
                icon: 'el-icon-search'
              },
              events: {
                click: () => this.search()
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
        url: '../../page',
        params: {
          userName: '',
          startDate: '',
          endDate: ''
        },
        // axiosMethod: 'post',
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
    this.getData()
  },
  methods: {
    getData () {
      this.$nextTick(() => {
        this.$refs.table.fetch()
      })
    },
    detail (row) {
      alert('Handle click detail, console will show row data')
      console.log(row)
    },
    delete (row) {
      alert('Handle click delete, console will show row data')
      console.log(row)
    },
    search () {
      this.getData()
    }
  }
}
</script>
