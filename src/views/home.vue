<template>
  <div id="Home">
    <readme-frame :readme="readme" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReadmeFrame from '../components/ReadmeFrame.vue';
import readme from '../../README.md';
export default defineComponent({
  name: 'Home',
  components: {
    ReadmeFrame
  },
  setup() {
    return {
      readme: (import.meta as any).env.PROD ? readme : readme.replace(/https:\/\/kongfandong.cn\/howdy/g, '.')
    };
  }
});
</script>
<style lang="scss" scoped>
</style>
