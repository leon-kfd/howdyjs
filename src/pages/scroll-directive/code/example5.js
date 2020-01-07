export default `
\`\`\`
<template>
  <div id="example2">
    <div class="wrapper">
      <div class="scroll-box"
           v-scroll="scrollSetting"
           ref="scrollBox">
        <p v-for="num in 30"
           class="text"
           :key="num">{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example2',
  data () {
    return {
      scrollSetting: {
        scrollBarWidth: 8,
        scrollBarOffsetX: 3,
        scrollBarOffsetY: 4,
        scrollBarThumbColor: 'rgb(225, 243, 216)',
        scrollBarThumbHoverColor: 'rgb(200, 243, 199)'
      },
      text: \`Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati sit asperiores dignissimos, 
            cupiditate fugiat, libero, doloremque veniam dolorem autem praesentium qui laudantium voluptas omnis. 
            Odit optio nulla quis perspiciatis!\`
    }
  },
  mounted () {
    window.addEventListener('resize', this.scrollUpdate)
  },
  methods: {
    scrollUpdate () {
      this.$refs.scrollBox.$scroll.update()
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.scrollUpdate)
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.scroll-box {
  width: 400px;
  height: calc(90vh - 60px);
  margin: 20px;
  background: #c2c2e0;
  overflow-y: auto;
  padding-right: 10px;
}
.text {
  font-size: 0.8rem;
  text-indent: 1.6rem;
  line-height: 1.5;
  color: #667;
  padding: 5px;
}
</style>
\`\`\`
`
