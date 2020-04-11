<template>
  <div id="Home">
    <readme-frame :readme="readme"></readme-frame>
  </div>
</template>

<script>
import ReadmeFrame from '@/components/ReadmeFrame'
import readme from '@/howdy/README.md'
export default {
  name: 'Home',
  components: {
    ReadmeFrame
  },
  data () {
    return {
      readme
    }
  }
}
</script>
