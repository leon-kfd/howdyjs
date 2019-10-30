<template>
  <div class="page">
    <div class="wrapper x">
      <div class="box1"
           v-resize:right="options"
           @resize="handleResizeX">Set this box -> resize:right</div>
      <div class="box2"
           ref="a"></div>
    </div>
    <div class="wrapper y">
      <div class="box1"
           v-resize:bottom
           @resize="handleResizeY">Set this box -> resize:bottom</div>
      <div class="box2"
           ref="b"></div>
    </div>
    <div class="wrapper x">
      <div class="box1"
           ref="c"></div>
      <div class="box2"
           v-resize:left
           @resize="handleResizeX1">Set this box -> resize:left</div>
    </div>
    <div class="wrapper y">
      <div class="box1"
           ref="d"></div>
      <div class="box2"
           v-resize:top
           @resize="handleResizeY1">Set this box -> resize:top</div>
    </div>
    <div class="outer-box">
      <div class="inner-box"
           v-resize="allOption"
           @resize="handleResizeAll">Set this box -> resize:all</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'absolute',
  data () {
    return {
      options: {
        immediate: true
      },
      allOption: {
        immediate: true,
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
.wrapper {
  width: 800px;
  height: 400px;
  margin: 20px;
  position: relative;
  box-shadow: 0 1px 5px #ccc;
  .box1 {
    background: #c2c2e0;
    position: absolute;
  }
  .box2 {
    background: #ffe0e0;
    position: absolute;
  }
}
.x {
  .box1,
  .box2 {
    width: 400px;
    height: 100%;
  }
  .box1 {
    left: 0;
    top: 0;
  }
  .box2 {
    right: 0;
    top: 0;
  }
}
.y {
  .box1,
  .box2 {
    width: 100%;
    height: 200px;
  }
  .box1 {
    left: 0;
    top: 0;
  }
  .box2 {
    left: 0;
    bottom: 0;
  }
}
.outer-box {
  width: 800px;
  height: 400px;
  margin: 20px;
  box-shadow: 0 1px 5px #ccc;
  position: relative;
  background: #c2c2e0;
  .inner-box {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    background: #ffe0e0;
  }
}
.box1,
.box2,
.inner-box {
  padding: 10px;
  font-size: 13px;
  color: #667;
}
</style>
