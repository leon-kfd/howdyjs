export default `
\`\`\`
<template>
  <div class="wrapper">
    <div class="box"
         v-sizeObserver="options"
         @sizeChange="handleSizeChange">
      <p class="tips">Delay: 1s, Immediate: false</p>
      <p class="text">{{width}} &times; {{height}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        wait: 1000,
        immediate: false
      },
      width: '?',
      height: '?'
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
.tips {
  font-size: 12px;
  color: #889;
  padding: 10px;
}
</style>
\`\`\`
`
