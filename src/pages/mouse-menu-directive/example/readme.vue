<template>
  <div id="Readme">
    <readme-frame :mainName="mainName"
                  :readme="readme"></readme-frame>
  </div>
</template>

<script>
import ReadmeFrame from '@/components/ReadmeFrame'
import readme from '@/packages/directive-mouse-menu/README.md'
export default {
  name: 'readme',
  components: {
    ReadmeFrame
  },
  data () {
    return {
      mainName: 'mouse-menu-directive',
      readme
    };
  }
};
</script>
