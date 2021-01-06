<template>
  Hello world.
  <div
    v-resize:right
    style="width:200px;height:200px;background:#aa99f8"
    @resize="handleResize"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import md from './m.md';
export default defineComponent({
  setup() {
    console.log(md);
    return {
      handleResize(e: Event) {
        console.log(e);
      }
    };
  }
});
</script>

<style>
</style>