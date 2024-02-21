<template>
  <div class="wrapper">
    <div class="tips">Now observeAutoUpdate default is true, you don't need to call `update()` manual</div>
    <div ref="scrollBox" v-scroll="scrollSetting" class="scroll-box">
      <p v-for="num in 60" :key="num" class="text">Change box size from right-bottom arrow...</p>
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
      scrollSetting: {
        scrollBarWidth: 8,
        scrollBarOffsetX: 3,
        scrollBarOffsetY: 4,
        scrollBarThumbColor: 'rgb(225, 243, 216)',
        scrollBarThumbHoverColor: 'rgb(200, 243, 199)'
      }
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
  resize: both;
}
.text {
  font-size: 0.8rem;
  line-height: 1.5;
  color: #667;
  padding: 5px;
}

.tips {
  padding: 8px;
  background: rgb(255, 223, 193);
  color: rgb(170, 86, 8);
  border-radius: 4px;
}
</style>
