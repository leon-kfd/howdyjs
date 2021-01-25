<template>
  <div class="wrapper">
    <div v-size-observer class="box" @sizechange="handleSizeChange">
      <p class="text">
        {{ width }} &times; {{ height }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { SizeObserverDirective, SizeObserverEvent } from '../../../../packages/size-observer';
export default defineComponent({
  directives: {
    SizeObserver: SizeObserverDirective
  },
  setup() {
    const width = ref(0);
    const height = ref(0);
    const handleSizeChange = (e: SizeObserverEvent) => {
      const { contentRect } = e;
      const { width: _width, height: _height } = contentRect;
      width.value = ~~_width;
      height.value = ~~_height;
    };
    return {
      width,height,handleSizeChange
    };
  }
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.box {
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: #ffe0e0;
  position: relative;
}
.text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: bold;
  color: #889;
}
</style>
