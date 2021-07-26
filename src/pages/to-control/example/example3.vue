<template>
  <div class="wrapper">
    <div v-to-control="{ isAbsolute: true }" class="control"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ToControlDirective } from '../../../../packages/to-control';
export default defineComponent({
  directives: {
    'to-control': ToControlDirective
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
