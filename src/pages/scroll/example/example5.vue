<template>
  <div class="wrapper">
    <div ref="scrollBox" v-scroll="scrollSetting" class="scroll-box">
      <p v-for="num in 30" :key="num" class="text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { ScrollDirective } from '../../../../packages/scroll';
export default defineComponent({
  directives: {
    scroll: ScrollDirective
  },
  setup() {
    const scrollBox = ref();
    const scrollUpdate = () => {
      scrollBox.value.$scroll.update();
    };
    onMounted(() => {
      window.addEventListener('resize', scrollUpdate);
    });
    onUnmounted(() => {
      window.removeEventListener('resize', scrollUpdate);
    });
    return {
      scrollBox,
      scrollSetting: {
        scrollBarWidth: 8,
        scrollBarOffsetX: 3,
        scrollBarOffsetY: 4,
        scrollBarThumbColor: 'rgb(225, 243, 216)',
        scrollBarThumbHoverColor: 'rgb(200, 243, 199)'
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
