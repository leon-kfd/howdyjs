<template>
  <div class="wrapper">
    <div
      v-for="num in 9"
      :key="num"
      class="box"
      @click="handleShowDialog"
    >
      <p class="text">
        #{{ num }}
      </p>
    </div>
  </div>
  <AnimationDialog ref="dialog">
    <div>Hello World</div>
  </AnimationDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnimationDialog from '../../../../packages/animation-dialog';
export default defineComponent({
  components: {
    AnimationDialog
  },
  setup() {
    const dialog = ref();
    return {
      dialog,
      handleShowDialog (e: any) {
        dialog.value.open(e.currentTarget);
      }
    };
  }
});
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.box {
  background: #ffe0e0;
  height: 160px;
  width: 160px;
  margin: 20px;
  cursor: pointer;
}
.text {
  font-size: 20px;
  color: #889;
  padding: 5px;
}
</style>
