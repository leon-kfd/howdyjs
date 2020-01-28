<template>
  <div id="Readme">
    <readme-frame :mainName="mainName"></readme-frame>
  </div>
</template>

<script>
import ReadmeFrame from '@/components/ReadmeFrame'
export default {
  name: 'readme',
  components: {
    ReadmeFrame
  },
  data () {
    return {
      mainName: 'size-observer-directive'
    }
  }
}
</script>
