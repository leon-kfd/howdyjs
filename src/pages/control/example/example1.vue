<template>
  <div class="wrapper">
    <div ref="control" class="control"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Control from '../../../../packages/control';
export default defineComponent({
  setup() {
    const control = ref();
    onMounted(() => {
      new Control({
        el: control.value,
        options: {
          isAbsolute: true,
          arrowOptions: {
            size: 10,
            padding: 4
          }
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
.wrapper {
  width: 100%;
  height: 600px;
  border: 4px solid #262626;
  position: relative;
  padding: 10px;
  color: #889;
  background: #eaffe0;
}
.control {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 4px solid #dd9944;
  background: rgb(184, 202, 235);
}
</style>
