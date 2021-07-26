<template>
  <div ref="control" class="control"></div>
  <div class="text">
    请拖拽屏幕上的浮块更改位置，拖拽浮块右下角可更改大小
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ToControl from '../../../../packages/to-control';
export default defineComponent({
  setup() {
    const control = ref();
    onMounted(() => {
      new ToControl({
        el: control.value
      });
    });
    return {
      control
    };
  }
});
</script>
<style lang="scss" scoped>
.control {
  position: fixed;
  width: 100px;
  height: 100px;
  border: 4px solid #dd9944;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  z-index: 99999;
  background: rgb(204, 226, 252);
}
.text {
  text-align: center;
  margin-top: 8rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: #262626;
}
</style>
