<template>
  <div class="wrapper">
    Absolute模式: 控制absolute拖拽元素只允许在其父元素下进行拖拽.
    <div v-to-drag="options" class="move-box">
      DRAG
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ToDragDirective } from '../../../../packages/to-drag';
export default defineComponent({
  directives: {
    'to-drag': ToDragDirective
  },
  setup() {
    return {
      options: {
        isAbsolute: true,
        needComputeBorder: true // default is true, will compute parent border width
      }
    };
  }
});
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  height: 600px;
  border: 4px solid #262626;
  position: relative;
  padding: 10px;
  color: #889;
  background: #ffe0e0;
}
.move-box {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  background: linear-gradient(45deg, rgb(174, 79, 252), rgb(137, 64, 253));
  box-shadow: 0 0 30px rgb(43, 58, 73);
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  user-select: none;
}
</style>
