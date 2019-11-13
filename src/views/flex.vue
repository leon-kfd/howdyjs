<template>
  <div class="page">
    <div class="wrapper1">
      <div class="box1"
           v-resize:right
           @resize="handleResizeX"></div>
      <div class="box2"
           ref="a"></div>
    </div>
    <div class="wrapper2">
      <div class="box1"
           ref="b"></div>
      <div class="box2"
           v-resize="options"
           @resize="handleResizeWrapper2"></div>
      <div class="box3"
           ref="c"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex',
  data () {
    return {
      options: {
        direction: ['left', 'right']
      }
    }
  },
  methods: {
    handleResizeX (e) {
      console.log(e)
      let el = e.target
      el.style.width = `${e.resizeWidthPercent}%`
      this.$refs.a.style.width = `${100 - e.resizeWidthPercent}%`
    },
    handleResizeWrapper2 (e) {
      console.log(e)
      let el = e.target
      if (e.direction === 'left') {
        el.style.width = `${e.resizeWidthPercent}%`
        this.$refs.b.style.width = `${e.moveOffsetPercent}%`
      } else if (e.direction === 'right') {
        el.style.width = `${e.resizeWidthPercent}%`
        this.$refs.c.style.width = `${100 - e.moveOffsetPercent}%`
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.wrapper1 {
  width: 800px;
  height: 400px;
  margin: 20px auto;
  display: flex;
  .box1 {
    width: 50%;
    height: 100%;
    background: #c2c2e0;
  }
  .box2 {
    width: 50%;
    height: 100%;
    background: #ffe0e0;
  }
}

.wrapper2 {
  width: 800px;
  height: 400px;
  margin: 20px auto;
  display: flex;
  .box1 {
    width: 33.33%;
    height: 100%;
    background: #c2c2e0;
  }
  .box2 {
    width: 33.33%;
    height: 100%;
    background: #ffe0e0;
  }
  .box3 {
    width: 33.33%;
    height: 100%;
    background: #ddf1d5;
  }
}
</style>
