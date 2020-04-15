<template>
  <div class="wrapper">
    <div class="box"
         v-for="(item,index) in imgList"
         :key="index">
      <img :src="item"
           alt="image"
           v-img-zoom>
    </div>
    <div class="fake"
         v-for="num in 9"
         :key="'fake'+num"></div>
  </div>
</template>

<script>
// import imgZoom from '@/howdy/packages/img-zoom-directive'
export default {
  data () {
    return {
      imgList: Array.from({ length: 9 }, (item, index) => require(`@/assets/img/${index + 1}.jpg`))
    }
  }
  // directives: {
  //   imgZoom
  // }
}
</script>
<style lang='scss' scoped>
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
