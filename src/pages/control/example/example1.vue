<template>
  <div style="width: 400px;height: 400px;position: relative;border: 20px solid #262626;padding: 20px;">
    <div ref="control" style="position: absolute;width: 100px;height: 100px;border: 4px solid #dd9944;"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Control } from '../../../../packages/control';
export default defineComponent({
  setup() {
    const control = ref();
    onMounted(() => {
      new Control({
        el: control.value,
        options: {
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
</style>
