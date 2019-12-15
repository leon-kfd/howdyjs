export default `
\`\`\`
<template>
  <div class="page"
       id="example5">
    <div class="flex-wrapper">
      <div class="box1"
           v-resize="options"
           @resize="handleResizeX">
        <p class="text">Set this box default resize<br>immediate: true</p>
      </div>
      <div class="box2"
           ref="resize"></div>
    </div>
    <div class="outer-box">
      <div class="inner-box"
           v-resize:all="options"
           @resize="handleResizeAll">
        <p class="text">Set this box -> resize:all<br>immediate: true</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example5',
  data () {
    return {
      options: {
        immediate: true,
        scrollElSelector: '#example5' // Demo中可能会出现滚动条
      }
    }
  },
  methods: {
    handleResizeX (e) {
      let el = e.target
      el.style.width = \`\${e.resizeWidthPercent}%\`
      this.$refs.resize.style.width = \`\${100 - e.resizeWidthPercent}%\`
    },
    handleResizeAll (e) {
      let el = e.target
      let { direction } = e
      if (direction === 'right') {
        let resizeWidthPercent = e.resizeWidthPercent
        el.style.width = \`\${resizeWidthPercent}%\`
      } else if (direction === 'bottom') {
        let resizeHeightPercent = e.resizeHeightPercent
        el.style.height = \`\${resizeHeightPercent}%\`
      } else if (direction === 'left') {
        let { moveOffsetPercent, resizeWidthPercent } = e
        el.style.width = \`\${resizeWidthPercent}%\`
        el.style.left = \`\${moveOffsetPercent}%\`
      } else if (direction === 'top') {
        let { moveOffsetPercent, resizeHeightPercent } = e
        el.style.height = \`\${resizeHeightPercent}%\`
        el.style.top = \`\${moveOffsetPercent}%\`
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.page {
  overflow-x: auto;
  overflow-y: auto;
  height: calc(100vh - 80px);
}
.flex-wrapper {
  width: 600px;
  height: 400px;
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
.outer-box {
  width: 600px;
  height: 400px;
  margin: 20px auto;
  box-shadow: 0 1px 5px #ccc;
  position: relative;
  background: #c2c2e0;
}
.inner-box {
  position: absolute;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
  background: #ffe0e0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>

\`\`\`
`
