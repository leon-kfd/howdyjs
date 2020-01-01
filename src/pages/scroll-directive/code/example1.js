export default `
\`\`\`
<template>
  <div id="example1">
    <div class="wrapper">
      <div class="scroll-box1"
           v-scroll>
        <p v-for="num in 20"
           class="text"
           :key="num">{{text}}</p>
      </div>
      <div class="scroll-box2"
           v-scroll:all>
        <p v-for="num in 20"
           class="text"
           style="width: 800px"
           :key="num">{{text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'example1',
  data () {
    return {
      text: \`Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati sit asperiores dignissimos, 
            cupiditate fugiat, libero, doloremque veniam dolorem autem praesentium qui laudantium voluptas omnis. 
            Odit optio nulla quis perspiciatis!\`
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.scroll-box1,
.scroll-box2 {
  width: 400px;
  height: 500px;
  margin: 20px;
  background: #c2c2e0;
  overflow: auto;
  padding-right: 10px;
}
.scroll-box2 {
  padding: 10px;
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
