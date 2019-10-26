<template>
  <div class="page">
    <div class="wrapper">
      <div class="box1"
           v-resize:right="options"
           @resize="handleResizeX"></div>
      <div class="box2"
           ref="a"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex',
  data () {
    return {
      options: {
        lineColor: '#b22'
      }
    }
  },
  methods: {
    handleResizeX (e) {
      console.log(e)
      let el = e.target
      el.style.width = `${e.resizeWidthPercent}%`
      this.$refs.a.style.width = `${100 - e.resizeWidthPercent}%`
    }
  }
}
</script>
<style scoped lang='scss'>
.wrapper {
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
</style>
