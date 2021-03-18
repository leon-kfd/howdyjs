<template>
  <div class="wrapper">
    <div v-for="(item,index) in imgList" :key="index" class="box">
      <img
        v-img-zoom="{
          group: 'example4',
          zoomCursor: true,
          showCloseBtn: true,
          title: item.title,
          imgSrc: item.regularImg,
          customLoading
        }"
        :src="item.thumbImg"
        alt="image"
      >
    </div>
    <div v-for="num in 9" :key="'fake'+num" class="fake"></div>
  </div>
  <div class="tips">
    PHOTOS FROM UNSPLAH
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ImgZoomDirective } from '../../../../packages/img-zoom';
import { apiURL } from '../../../global';
export default defineComponent({
  directives: {
    ImgZoom: ImgZoomDirective
  },
  setup () {
    const imgList = ref([]);
    onMounted(async () => {
      const res = await fetch(`${apiURL}/photos?type=mirror`);
      const { data, errCode } = await res.json();
      if (errCode === 200) {
        imgList.value = data.list.slice(0, 9).map((item: Record<string,any>, index:number) => {
          return {
            thumbImg: item.urls.thumb,
            regularImg: item.urls.regular,
            title: `#${index} ${item.description || ''}`
          };
        });
      }
    });
    return {
      imgList,
      customLoading: () => {
        const text = document.createElement('div');
        text.innerText = 'Loading...';
        text.style.cssText = 'font-size: 20px;color: #c8c9d0;';
        return text;
      }
    };
  }
});
</script>
<style scoped>
.tips {
  text-align: center;
  margin: 20px 0;
  color: #778;
  font-weight: bold;
}
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
