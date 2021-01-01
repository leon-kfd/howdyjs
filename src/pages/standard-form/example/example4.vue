<template>
  <div>
    <h4>Form</h4>
    <standard-form v-model="formData" :formConf="formConf">
      <template #img>
        <div class="img-wrapper">
          <div class="img" 
            :class="{active: formData.imgs.includes(item)}" 
            v-for="item in imgList" 
            :key="item"
            @click="handleSelect(item)">
            <img :src="item" alt="img">
          </div>
        </div>
      </template>
    </standard-form>
    <h4>Data</h4>
    <pre>{{formData}}</pre>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      formConf: {
        img: {
          label: '选择图片',
          slot: 'img'
        }
      },
      formData: {
        imgs: []
      },
      imgList: Array.from({ length: 9 }, (item, index) => require(`@/assets/img/${index + 1}.jpg`))
    }
  },
  methods: {
    handleSelect(item) {
      const index = this.formData.imgs.indexOf(item)
      if (~index) {
        this.formData.imgs.splice(index, 1)
      } else {
        this.formData.imgs.push(item)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.img-wrapper {
  display: flex;
  flex-wrap: wrap;
  .img {
    position: relative;
    margin: 0 10px 10px 0;
    cursor: pointer;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
      transition: all .4s ease-in-out;
    }
    &:not(.active):hover {
      img {
        filter: brightness(1);
      }
    }
    &.active {
      &:after {
        content: "\e6da";
        font-family: element-icons!important;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,.5);
        color: #fff;
        font-size: 30px;
      }
    }
  }
}
</style>
