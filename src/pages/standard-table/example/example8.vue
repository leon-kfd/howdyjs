<template>
  <standard-table v-model="conf"
                  ref="table"
                  :loading.sync="loading">
    <template slot="userName"
              slot-scope="data">
      <el-input v-model="data.row.userName"
                size="small"></el-input>
    </template>
    <template slot="sex"
              slot-scope="data">
      <el-select v-model="data.row.sex"
                 size="small">
        <el-option label="男"
                   :value="1"></el-option>
        <el-option label="女"
                   :value="2"></el-option>
      </el-select>
    </template>
    <template slot="position"
              slot-scope="data">
      <el-select v-model="data.row.position"
                 size="small">
        <el-option v-for="(item,index) in positionList"
                   :key="index"
                   :label="item"
                   :value="item"></el-option>
      </el-select>
    </template>
    <template slot="birth"
              slot-scope="data">
      <el-date-picker v-model="data.row.birth"
                      style="width: 150px"
                      type="date"
                      value-format="yyyy-MM-dd"></el-date-picker>
    </template>
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
            slot: 'userName'
          },
          {
            label: '性别',
            prop: 'sex',
            slot: 'sex'
          },
          {
            label: '职位',
            prop: 'position',
            slot: 'position'
          },
          {
            label: '生日',
            prop: 'birth',
            slot: 'birth',
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
