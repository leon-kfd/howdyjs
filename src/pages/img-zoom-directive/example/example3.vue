<template>
  <div class="example-page">
    <div class="wrapper">
      <div class="box"
           v-for="(item,index) in imgList"
           :key="index">
        <img :src="item.thumbImg"
             alt="image"
             v-img-zoom="{
             group: 'example3',
             zoomCursor: true,
             showCloseBtn: true,
             title: item.title,
             imgSrc: item.regularImg
          }">
      </div>
      <div class="fake"
           v-for="num in 9"
           :key="'fake'+num"></div>
    </div>
    <div class="tips">PHOTOS FROM UNSPLAH</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      imgList: []
    }
  },
  created () {
    axios.get('../../photos').then(data => {
      if (data.data.errCode === 200) {
        const list = data.data.data.list.slice(0, 9).map((item, index) => {
          return {
            thumbImg: item.urls.thumb,
            regularImg: item.urls.regular,
            title: `#${index} ${item.description || ''}`
          }
        })
        this.imgList = list
      }
    })
  }
}
</script>
<style lang='scss' scoped>
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
