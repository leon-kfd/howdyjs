<template>
  <div class="wrapper">
    <div v-scroll="scrollSetting1" class="scroll-box">
      <p v-for="num in 20" :key="num" class="text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ScrollDirective } from '../../../../packages/scroll';
export default defineComponent({
  directives: {
    scroll: ScrollDirective
  },
  setup() {
    return {
      scrollSetting1: {
        scrollBarWidth: 8,
        scrollBarOffsetX: 3,
        scrollBarOffsetY: 4,
        scrollBarThumbColor: 'rgb(225, 243, 216)',
        scrollBarThumbHoverColor: 'rgb(200, 243, 199)',
        thumbShow: 'hover'
      },
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In obcaecati sit asperiores dignissimos, 
            cupiditate fugiat, libero, doloremque veniam dolorem autem praesentium qui laudantium voluptas omnis. 
            Odit optio nulla quis perspiciatis!`
    };
  }
});
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.scroll-box {
  width: 500px;
  height: 500px;
  margin: 20px;
  background: #c2c2e0;
  overflow-y: auto;
  padding-right: 10px;
  resize: both;
}
.text {
  font-size: 0.8rem;
  text-indent: 1.6rem;
  line-height: 1.5;
  color: #667;
  padding: 5px;
}
</style>
