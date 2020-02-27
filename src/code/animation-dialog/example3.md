```vue
<template>
  <div id="example">
    <div class="wrapper">
      <ul class="btn-list">
        <li><button @click="handleShowBounceDialog">BounceIn / Out (Default)</button></li>
        <li><button @click="handleShowFadeDialog">FadeInLeft / FadeOutRight</button></li>
        <li><button @click="handleShowZoomDialog">ZoomIn / ZoomOut</button></li>
        <li><button @click="handleShowFlipDialog">FlipInX / FlipOutX</button></li>
      </ul>
    </div>
    <AnimationDialog ref="bounce"
                     :animationMode="true">
      <div>bounceIn / bounceOut</div>
    </AnimationDialog>
    <AnimationDialog ref="fade"
                     :animationMode="true"
                     animationIn="fadeInLeft"
                     animationOut="fadeOutRight">
      <div>fadeInLeft / fadeOutRight</div>
    </AnimationDialog>
    <AnimationDialog ref="zoom"
                     :animationMode="true"
                     animationIn="zoomIn"
                     animationOut="zoomOut">
      <div>zoomIn / zoomOut</div>
    </AnimationDialog>
    <AnimationDialog ref="flip"
                     :animationMode="true"
                     animationIn="flipInX"
                     animationOut="flipOutX">
      <div>flipInX / flipOutX</div>
    </AnimationDialog>
  </div>
</template>

<script>
import AnimationDialog from '@/packages/animation-dialog'
export default {
  components: {
    AnimationDialog
  },
  methods: {
    handleShowBounceDialog () {
      this.$refs.bounce.open()
    },
    handleShowFadeDialog () {
      this.$refs.fade.open()
    },
    handleShowZoomDialog () {
      this.$refs.zoom.open()
    },
    handleShowFlipDialog () {
      this.$refs.flip.open()
    }
  }
}
</script>

<style scoped>
.btn-list {
  padding-left: 30px;
}
.btn-list li {
  margin: 15px 0;
}
.btn-list li button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>

```
