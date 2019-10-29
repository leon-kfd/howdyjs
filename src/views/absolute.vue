<template>
  <div class="page">
    <div class="wrapper-x">
      <div class="box1 text"
           v-resize:right
           @resize="handleResizeX">Set this box -> resize:right</div>
      <div class="box2"
           ref="a"></div>
    </div>
    <div class="wrapper-y">
      <div class="box1 text"
           v-resize:bottom
           @resize="handleResizeY">Set this box -> resize:bottom</div>
      <div class="box2"
           ref="b"></div>
    </div>
    <div class="wrapper-x">
      <div class="box1"
           ref="c"></div>
      <div class="box2 text"
           v-resize:left
           @resize="handleResizeX1">Set this box -> resize:left</div>
    </div>
    <div class="wrapper-y">
      <div class="box1"
           ref="d"></div>
      <div class="box2 text"
           v-resize:top
           @resize="handleResizeY1">Set this box -> resize:top</div>
    </div>
    <div class="wrapper-all">
      <div class="box1">
        <div class="box2 text"
             v-resize="allOption"
             @resize="handleResizeAll">Set this box -> resize:all</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'absolute',
  data () {
    return {
      allOption: {
        direction: ['right', 'bottom', 'left', 'top']
      }
    }
  },
  methods: {
    handleResizeX (e) {
      console.log(e)
      let el = e.target
      let resizeWidth = e.resizeWidth
      el.style.width = `${resizeWidth}px`
      this.$refs.a.style.width = `${800 - resizeWidth}px`
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
      this.$refs.c.style.width = `${800 - resizeWidth}px`
    },
    handleResizeY1 (e) {
      console.log(e)
      let el = e.target
      let resizeHeight = e.resizeHeight
      el.style.height = `${resizeHeight}px`
      this.$refs.d.style.height = `${400 - resizeHeight}px`
    },
    handleResizeAll (e) {
      let el = e.target
      console.log(e)
      let { direction } = e
      if (direction === 'right') {
        let resizeWidthPercent = e.resizeWidthPercent
        el.style.width = `${resizeWidthPercent}%`
      } else if (direction === 'bottom') {
        let resizeHeightPercent = e.resizeHeightPercent
        el.style.height = `${resizeHeightPercent}%`
      } else if (direction === 'left') {
        let { moveOffsetPercent, resizeWidthPercent } = e
        el.style.width = `${resizeWidthPercent}%`
        el.style.left = `${moveOffsetPercent}%`
      } else if (direction === 'top') {
        let { moveOffsetPercent, resizeHeightPercent } = e
        el.style.height = `${resizeHeightPercent}%`
        el.style.top = `${moveOffsetPercent}%`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.wrapper-x {
  width: 800px;
  height: 400px;
  position: relative;
  margin: 20px;
  .box1 {
    width: 400px;
    height: 100%;
    background: #c2c2e0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box2 {
    width: 400px;
    height: 100%;
    right: 0;
    top: 0;
    background: #ffe0e0;
    position: absolute;
  }
}
.wrapper-y {
  width: 800px;
  height: 400px;
  position: relative;
  margin: 20px;
  .box1 {
    width: 100%;
    height: 200px;
    background: #c2c2e0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box2 {
    width: 100%;
    height: 200px;
    background: #ffe0e0;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.wrapper-all {
  width: 800px;
  height: 400px;
  margin: 20px;
  .box1 {
    width: 100%;
    height: 100%;
    position: relative;
    background: #c2c2e0;
    .box2 {
      position: absolute;
      width: 50%;
      height: 50%;
      top: 25%;
      left: 25%;
      background: #ffe0e0;
    }
  }
}
.text {
  padding: 10px;
  font-size: 13px;
  color: #667;
}
</style>
