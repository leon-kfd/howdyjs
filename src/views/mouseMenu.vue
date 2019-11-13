<template>
  <div id="mouseMenu">
    <div class="wrapper">
      <div class="box1"
           v-mouseMenu="options"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mouseMenu',
  data () {
    return {
      options: {
        hoverBgColor: 'rgba(255,255,255,.8)',
        menuList: [
          {
            label: '详情',
            fn: () => this.detail()
          },
          {
            label: '打开'
          },
          {
            label: '删除'
          },
          {
            label: '浏览'
          }
        ]
      }
    }
  },
  methods: {
    detail () {
      console.log('Click view')
    }
  }
}
</script>
<style scoped lang='scss'>
.wrapper {
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  .box1 {
    width: 800px;
    height: 600px;
    background: #ddd5f1;
    box-shadow: 0 1px 10px #ccc;
  }
}
</style>
