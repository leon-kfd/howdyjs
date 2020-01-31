```vue
<template>
  <div class="page"
       id="example1">
    <div class="wrapper">
      <div class="box1"
           v-resize="options"
           @resize="handleResizeX">
        <p class="text">Set this box default resize</p>
      </div>
      <div class="box2"
           ref="resize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example1',
  data () {
    return {
      options: {
        scrollElSelector: '#example1' // Demo中可能会出现滚动条
      }
    }
  },
  methods: {
    handleResizeX (e) {
      console.log(e)
      let el = e.target
      el.style.width = `${e.resizeWidthPercent}%`
      this.$refs.resize.style.width = `${100 - e.resizeWidthPercent}%`
    }
  }
}
</script>
<style scoped>
.page {
  overflow-x: auto;
}
.wrapper {
  width: 800px;
  height: 500px;
  margin: 20px auto;
  display: flex;
  box-shadow: 0 1px 5px #ccc;
}
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
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>

```