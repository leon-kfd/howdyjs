<template>
  <div class="wrapper">
    <div class="box"
         v-sizeObserver
         @sizeChange="handleSizeChange">
      <p class="text">{{width}} &times; {{height}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    handleSizeChange (e) {
      const { contentRect } = e
      const { width, height } = contentRect
      this.width = ~~width
      this.height = ~~height
    }
  }
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.box {
  width: 100%;
  height: 100%;
  background: #ffe0e0;
  position: relative;
}
.text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: bold;
  color: #889;
}
</style>
