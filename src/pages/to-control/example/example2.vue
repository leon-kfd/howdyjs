<template>
  <div class="wrapper">
    <div ref="control" class="control"></div>
    <div class="text">
      Absolute模式: 控制absolute拖拽元素只允许在其父元素下进行拖拽.
    </div>
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
.text {
  text-align: center;
  margin-top: 8rem;
  font-weight: bold;
  font-size: 1.1rem;
  color: #262626;
}
</style>
