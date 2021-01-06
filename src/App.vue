<template>
Hello world.
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import md from './m.md'
export default defineComponent({
  setup() {
    console.log(md);
  }
})
</script>

<style>
</style>