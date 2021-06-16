<template>
  <div class="page">
    <div class="wrapper">
      <div ref="box1" class="box1"></div>
      <div v-resize="options" class="box2" @resize="handleResize">
        <p class="text">
          Set this box resize left & right
        </p>
      </div>
      <div ref="box3" class="box3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { ResizeEvent, ResizeDirective } from '../../../../packages/resize';
export default defineComponent({
  directives: {
    resize: ResizeDirective
  },
  setup() {
    const box1 = ref();
    const box3 = ref();
    return {
      box1,
      box3,
      options: {
        direction: ['left', 'right']
      },
      handleResize (e: ResizeEvent) {
        console.log('resizeEvent', e);
        let el = e.target as HTMLElement;
        if (e.direction === 'left') {
          el.style.width = `${e.resizeWidthPercent}%`;
          box1.value.style.width = `${e.moveOffsetPercent}%`;
        } else if (e.direction === 'right') {
          el.style.width = `${e.resizeWidthPercent}%`;
          box3.value.style.width = `${100 - e.moveOffsetPercent}%`;
        }
      }
    };
  }
});
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
  box-shadow: 0 1px 5px #ccc;
  position: relative;
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
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
