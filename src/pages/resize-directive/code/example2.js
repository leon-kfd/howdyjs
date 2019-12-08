export default `
\`\`\`
<template>
  <div class="page"
       id="example2">
    <div class="wrapper">
      <div class="box1"
           ref="box1"></div>
      <div class="box2"
           v-resize="options"
           @resize="handleResize"></div>
      <div class="box3"
           ref="box3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flex',
  data () {
    return {
      options: {
        direction: ['left', 'right'],
        scrollElSelector: '#example1' // Demo中可能会出现滚动条
      }
    }
  },
  methods: {
    handleResize (e) {
      let el = e.target
      if (e.direction === 'left') {
        el.style.width = \`\${e.resizeWidthPercent}%\`
        this.$refs.box1.style.width = \`\${e.moveOffsetPercent}%\`
      } else if (e.direction === 'right') {
        el.style.width = \`\${e.resizeWidthPercent}%\`
        this.$refs.box3.style.width = \`\${100 - e.moveOffsetPercent}%\`
      }
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
}
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
</style>
\`\`\`
`
