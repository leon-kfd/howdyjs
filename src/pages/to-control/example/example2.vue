<template>
  <div ref="control" class="control"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ToControl from '../../../../packages/to-control';
export default defineComponent({
  setup() {
    const control = ref();
    onMounted(() => {
      new ToControl({
        el: control.value,
        options: {
          isAbsolute: false
        }
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
</style>
