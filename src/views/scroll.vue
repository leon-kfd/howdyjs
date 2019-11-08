<template>
  <div id="Scroll">
    <div class="wrapper">
      <div class="scroll-box box1">
        <div class="content">
          <p v-for="num in 30"
             class="text"
             :key="num">{{text}}</p>
        </div>
      </div>
      <div class="scroll-box box2"
           v-scroll:all="scrollOptions">
        <div class="content">
          <p v-for="num in 30"
             class="text"
             :key="num">{{text}}</p>
        </div>
        <div class="content2">
          Second Element
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      scrollOptions: {
        scrollBarOffsetX: 2,
        scrollBarOffsetY: 8
      },
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati sit asperiores dignissimos, 
            cupiditate fugiat, libero, doloremque veniam dolorem autem praesentium qui laudantium voluptas omnis. 
            Odit optio nulla quis perspiciatis!`
    }
  }
}
</script>
<style scoped lang='scss'>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.box1 {
  overflow-y: auto;
}
.scroll-box {
  width: 600px;
  height: 500px;
  margin: 20px;
  background: #c2c2e0;
}
.content {
  padding: 10px;
  width: 1000px;
}
.text {
  font-size: 0.8rem;
  text-indent: 1.6rem;
  line-height: 1.5;
  color: #667;
}
.box2 {
  position: relative;
}
.a {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateY(200px);
  .track {
    position: absolute;
    right: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background: #f0f0f0;
    .thumb {
      position: relative;
      top: 0;
      right: 0;
      width: 6px;
      height: 30px;
      border-radius: 3px;
      background: #aab;
    }
  }
}
</style>
