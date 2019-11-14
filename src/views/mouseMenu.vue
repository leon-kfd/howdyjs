<template>
  <div id="mouseMenu">
    <div class="wrapper">
      <div class="box1"
           v-mouseMenu="options">
        <div class="box-listitem"
             v-for="num in 9"
             :key="num"
             :data-id="num"></div>
      </div>
    </div>
  </div>
</template>

<script>
import '../directives-mouse-menu/mouse-menu.css'
export default {
  name: 'mouseMenu',
  data () {
    return {
      options: {
        hoverBgColor: 'rgba(255,255,255,.8)',
        menuList: [
          {
            label: '检查',
            tips: 'Check',
            fn: (el) => this.detail(el),
            children: [
              {
                label: '文本'
              },
              {
                label: '源码'
              }
            ]
          },
          {
            label: '打开',
            tips: 'Open'
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
    detail (el) {
      console.log('Click view', el)
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .box-listitem {
      width: 200px;
      height: auto;
      margin: 30px;
      background: #c2c2e0;
    }
  }
}
</style>
