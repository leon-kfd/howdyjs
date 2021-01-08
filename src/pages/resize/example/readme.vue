<template>
  <div id="Readme">
    <readme-frame :readme="readme" />
  </div>
</template>

<script>
import ReadmeFrame from '../../../components/ReadmeFrame.vue';
import readme from '../../../../packages/resize/README.md';
export default {
  name: 'Readme',
  components: {
    ReadmeFrame
  },
  setup() {
    return {
      readme
    };
  }
};
</script>
