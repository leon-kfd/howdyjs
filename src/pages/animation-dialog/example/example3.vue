<template>
  <div class="wrapper">
    <ul class="btn-list">
      <li>
        <button @click="handleShowBounceDialog">
          BounceIn / Out (Default)
        </button>
      </li>
      <li>
        <button @click="handleShowFadeDialog">
          FadeInLeft / FadeOutRight
        </button>
      </li>
      <li>
        <button @click="handleShowZoomDialog">
          ZoomIn / ZoomOut
        </button>
      </li>
      <li>
        <button @click="handleShowFlipDialog">
          FlipInX / FlipOutX
        </button>
      </li>
    </ul>
  </div>
  <AnimationDialog ref="bounce" :animation-mode="true" title="bounceIn / bounceOut">
  </AnimationDialog>
  <AnimationDialog
    ref="fade"
    :animation-mode="true"
    animation-in="fadeInLeft"
    animation-out="fadeOutRight"
    title="fadeInLeft / fadeOutRight"
  >
  </AnimationDialog>
  <AnimationDialog
    ref="zoom"
    :animation-mode="true"
    animation-in="zoomIn"
    animation-out="zoomOut"
    title="zoomIn / zoomOut"
  >
  </AnimationDialog>
  <AnimationDialog
    ref="flip"
    :animation-mode="true"
    animation-in="flipInX"
    animation-out="flipOutX"
    title="flipInX / flipOutX"
  >
  </AnimationDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnimationDialog from '../../../../packages/animation-dialog';
import 'animate.css';
export default defineComponent({
  components: {
    AnimationDialog
  },
  setup() {
    const bounce = ref();
    const fade = ref();
    const zoom = ref();
    const flip = ref();
    return {
      bounce,
      fade,
      zoom,
      flip,
      handleShowBounceDialog () {
        bounce.value.open();
      },
      handleShowFadeDialog () {
        fade.value.open();
      },
      handleShowZoomDialog () {
        zoom.value.open();
      },
      handleShowFlipDialog () {
        flip.value.open();
      }
    };
  }
});
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
