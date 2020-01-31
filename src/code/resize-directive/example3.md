```vue
<template>
  <div class="page"
       id="example3">
    <div class="container">
      <div class="wrapper x">
        <div class="box1"
             v-resize:right="options"
             @resize="handleResizeX">
          <p class="text">Set this box -> resize:right</p>
        </div>
        <div class="box2"
             ref="a"></div>
      </div>
      <div class="wrapper y">
        <div class="box1"
             v-resize:bottom="options"
             @resize="handleResizeY">
          <p class="text">Set this box -> resize:bottom</p>
        </div>
        <div class="box2"
             ref="b"></div>
      </div>
      <div class="wrapper x">
        <div class="box1"
             ref="c"></div>
        <div class="box2"
             v-resize:left="options"
             @resize="handleResizeX1">
          <p class="text">Set this box -> resize:left</p>
        </div>
      </div>
      <div class="wrapper y">
        <div class="box1"
             ref="d"></div>
        <div class="box2"
             v-resize:top="options"
             @resize="handleResizeY1">
          <p class="text">Set this box -> resize:top</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example3',
  data () {
    return {
      options: {
        scrollElSelector: '#example3' // Demo中可能会出现滚动条
      }
    }
  },
  methods: {
    handleResizeX (e) {
      console.log(e)
      let el = e.target
      let resizeWidth = e.resizeWidth
      el.style.width = `${resizeWidth}px`
      this.$refs.a.style.width = `${600 - resizeWidth}px`
    },
    handleResizeY (e) {
      console.log(e)
      let el = e.target
      let resizeHeight = e.resizeHeight
      el.style.height = `${resizeHeight}px`
      this.$refs.b.style.height = `${400 - resizeHeight}px`
    },
    handleResizeX1 (e) {
      console.log(e)
      let el = e.target
      let resizeWidth = e.resizeWidth
      el.style.width = `${resizeWidth}px`
      this.$refs.c.style.width = `${600 - resizeWidth}px`
    },
    handleResizeY1 (e) {
      console.log(e)
      let el = e.target
      let resizeHeight = e.resizeHeight
      el.style.height = `${resizeHeight}px`
      this.$refs.d.style.height = `${400 - resizeHeight}px`
    }
  }
}
</script>
<style scoped>
.page {
  height: calc(100vh - 60px);
  overflow: auto;
}
.container {
  min-width: 700px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.wrapper {
  width: 600px;
  height: 400px;
  margin: 20px;
  position: relative;
  box-shadow: 0 1px 5px #ccc;
}
.wrapper .box1 {
  background: #c2c2e0;
  position: absolute;
}
.wrapper .box2 {
  background: #ffe0e0;
  position: absolute;
}
.x .box1 {
  width: 300px;
  height: 100%;
  left: 0;
  top: 0;
}
.x .box2 {
  width: 300px;
  height: 100%;
  right: 0;
  top: 0;
}
.y .box1 {
  width: 100%;
  height: 200px;
  left: 0;
  top: 0;
}
.y .box2 {
  width: 100%;
  height: 200px;
  left: 0;
  bottom: 0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>

```