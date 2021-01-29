<template>
  <div id="Readme">
    <readme-frame :readme="readme"></readme-frame>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ReadmeFrame from './ReadmeFrame.vue';
export default defineComponent({
  name: 'PageReadme',
  components: {
    ReadmeFrame
  },
  setup() {
    const route = useRoute();
    const name = (route.name as string).replace('-readme', '');
    const readme = ref('');
    onMounted(async () => {
      const readmeText = await import(`../../packages/${name}/README.md`);
      readme.value = readmeText.default;
    });
    return {
      readme
    };
  }
});
</script>
<style lang="scss" scoped>
</style>
