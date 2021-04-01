<template>
  <div class="wrapper">
    <div
      v-for="(item,index) in imgList"
      :key="index"
      class="box"
      @click="handleShowDialog($event, index)"
    >
      <img :src="item" alt="image">
    </div>
    <div v-for="num in 9" :key="'fake'+num" class="fake"></div>
  </div>
  <AnimationDialog
    ref="dialog"
    :open-from-itself="true"
    :listen-window-size-change="true"
  >
    <div class="dialog-content">
      #{{ active }}
    </div>
  </AnimationDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AnimationDialog from '../../../../packages/animation-dialog';
import { baseURL } from '../../../global';
export default defineComponent({
  components: {
    AnimationDialog
  },
  setup() {
    const dialog = ref();
    const active = ref(0);
    return {
      dialog,
      imgList: Array.from({ length: 9 }, (item, index) => `${baseURL}images/img/${index + 1}.jpg`),
      active: 0,
      handleShowDialog ($event: any, index:number) {
        active.value = index + 1;
        dialog.value.open($event.currentTarget);
      }
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
.text {
  font-size: 20px;
  color: #889;
  padding: 5px;
}
.dialog-content {
  position: absolute;
  z-index: 10;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 0 3px #ffaa00, 0 0 5px #262626;
}

/* 关闭按钮颜色 */
.animation-dialog-wrapper:deep() .icon-close .line {
  background: #ccc !important;
}
.animation-dialog-wrapper:deep() .icon-close:hover .line {
  background: #eee !important;
}
</style>
