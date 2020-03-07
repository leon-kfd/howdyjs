import StandardTable from './src/standard-table.vue'
StandardTable.install = function (Vue, opt = {}) {
  const defaultOption = {
    requestPage: 'page',
    requestPageSize: 'pageSize',
    responseItems: 'data.items',
    responseTotal: 'data.total',
    pageSize: 20,
    pageSizes: [10, 20, 30, 40, 50],
    pageLayout: 'total, sizes, prev, pager, next, jumper',
    axiosMethod: 'post',
    axiosConfig: {
      headers: {
        'Content-Type': 'application/json'
      }
    },
    axiosInstance: null
  }
  Vue.prototype.$STANDARD = Object.assign(defaultOption, opt)
  Vue.component(StandardTable.name, StandardTable)
}
export default StandardTable
