<template>
  <div class="wrapper">
    <div v-for="(item,index) in imgList" :key="index" class="box">
      <img v-img-zoom :src="item" alt="image">
    </div>
    <div v-for="num in 9" :key="'fake'+num" class="fake"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ImgZoomDirective } from '../../../../packages/img-zoom';
import { baseURL } from '../../../global';
export default defineComponent({
  directives: {
    ImgZoom: ImgZoomDirective
  },
  setup () {
    return {
      imgList: Array.from({ length: 9 }, (item, index) => `${baseURL}images/img/${index + 1}.jpg`)
    };
  }
});
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.box {
  background: linear-gradient(45deg, #bdc3c7, #2c3e50);
  height: 160px;
  width: 160px;
  margin: 20px;
  cursor: pointer;
}
.fake {
  width: 160px;
  margin: 0 20px;
  height: 0;
  visibility: hidden;
}
.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
