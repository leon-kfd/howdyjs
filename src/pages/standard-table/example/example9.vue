<template>
  <standard-table v-model="conf"
                  ref="table"
                  :loading.sync="loading">
  </standard-table>
</template>

<script>
export default {
  data () {
    return {
      positionList: ['前端', 'JAVA', '测试', '运维'],
      loading: false,
      conf: {
        row: [
          {
            label: '用户Id',
            prop: 'userId'
          },
          {
            label: '用户名',
            prop: 'userName',
            slot: (h, data) => <el-input vModel={data.row.userName} size="small"></el-input>
          },
          {
            label: '性别',
            prop: 'sex',
            slot: (h, data) => {
              return (
                <el-select vModel={data.row.sex} size="small">
                  <el-option label="男" value={1}></el-option>
                  <el-option label="女" value={2}></el-option>
                </el-select>
              )
            }
          },
          {
            label: '职位',
            prop: 'position',
            slot: (h, data) => {
              return (
                <el-select vModel={data.row.position} size="small">
                  {this.positionList.map(item => <el-option key={item} label={item} value={item}></el-option>)}
                </el-select>
              )
            }
          },
          {
            label: '生日',
            prop: 'birth',
            slot: (h, data) => {
              return (
                <el-date-picker vModel={data.row.birth} 
                  style="width: 150px"
                  size="small"
                  type="date"
                  value-format="yyyy-MM-dd"></el-date-picker>
              )
            },
            width: 220
          }
        ],
        data: [],
        url: `${this.$baseURL}/page`,
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
              label: '保存',
              fn: (row) => this.save(row)
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
    save (row) {
      alert('Handle click save, console will show row data')
      console.log(row)
    },
    delete (row) {
      alert('Handle click delete, console will show row data')
      console.log(row)
    }
  }
}
</script>
