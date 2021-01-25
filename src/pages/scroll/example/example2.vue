<template>
  <div class="wrapper">
    <div v-scroll="scrollSetting1" class="scroll-box1">
      <p v-for="num in 20" :key="num" class="text">
        {{ text }}
      </p>
    </div>
    <div v-scroll="scrollSetting2" class="scroll-box2">
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
        scrollBarThumbHoverColor: 'rgb(200, 243, 199)'
      },
      scrollSetting2: {
        scrollBarWidth: 8,
        scrollBarOffsetY: 2,
        scrollBarTrackColor: '#eee',
        scrollBarThumbColor: `linear-gradient(45deg, #ff80ab 5%, #ffc400 5%, #ffc400 15%, #ff80ab 15%, #ff80ab 25%, #ffc400 25%,
                              #ffc400 35%, #ff80ab 35%, #ff80ab 45%, #ffc400 45%, #ffc400 55%, #ff80ab 55%, #ff80ab 65%, #ffc400 65%,
                              #ffc400 75%, #ff80ab 75%, #ff80ab 85%, #ffc400 85%, #ffc400 95%, #ff80ab 95%, #ff80ab)`
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
.scroll-box1,
.scroll-box2 {
  width: 400px;
  height: 500px;
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
<style>
.scroll-box2 .scroll__thumb .scroll__thumb_inner {
  background-position: 0 0;
  background-size: 100% 200%;
}
.scroll-box2 .scroll__thumb:hover .scroll__thumb_inner {
  animation: move 2s linear infinite;
  animation-fill-mode: backwards;
}
@keyframes move {
  to {
    background-position: 0 -200%;
  }
}
</style>
