<template>
  <div class="page">
    <div class="text">请拖拽屏幕上的紫色浮块</div>
    <div class="move-box"
         v-to-drag="options">DRAG</div>
  </div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      options: {
        adsorb: 2,
        adsorbOffset: 10,
        transitionDuration: 800,
        transitionTimingFunction: `cubic-bezier(0.34, -0.37, 0.73, 1.38)`
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.move-box {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  background: linear-gradient(45deg, rgb(174, 79, 252), rgb(137, 64, 253));
  box-shadow: 0 0 30px rgb(43, 58, 73);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  user-select: none;
}
.text {
  text-align: center;
  margin-top: 8rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: #262626;
}
</style>
