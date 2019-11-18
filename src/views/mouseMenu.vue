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
export default {
  name: 'mouseMenu',
  data () {
    return {
      options: {
        hidden: (el) => {
          return !el.getAttribute('class').includes('box-listitem')
        },
        menuList: [
          {
            label: '检查',
            tips: 'Check',
            children: [
              {
                label: '文本',
                fn: (el) => this.detail(el),
                disabled: (el) => {
                  return true
                }
              },
              {
                label: '源码'
              }
            ],
            hidden: (el) => {
              console.log('el', el)
              return el.getAttribute('data-id') == 2
            }
          },
          {
            label: '打开',
            tips: 'Open',
            fn: (el) => this.detail(el)
          },
          {
            label: '删除'
          },
          {
            label: '浏览'
          }
        ],
        menuWrapperCss: {
          'border-radius': 0
        },
        menuItemCss: {
          hoverBackground: 'rgba(240,125,88,.8)',
          hoverLabelColor: '#fff',
          hoverTipsColor: '#fff',
          hoverArrowColor: '#fff'
        }
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
