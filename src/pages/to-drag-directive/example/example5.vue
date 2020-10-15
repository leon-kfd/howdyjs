<template>
  <div class="page">
    <div class="text">请拖拽屏幕上的紫色浮块</div>
    <div class="compass-box">
      <div class="img-wrapper"
           :style="{transform: `rotate(${rotate}deg)`}">
        <img :src="require('@/assets/compass.svg')"
             alt="compass"
             class="compass"
             ref="compass">
      </div>
    </div>
    <div class="move-box"
         ref="move"
         v-to-drag="options"
         @todraginit="setCompassRotate"
         @todragstart="handleToDragStart"
         @todragmove="setCompassRotate"
         @todragend="handleToDragEnd">DRAG</div>
  </div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      options: {
        immediateEvent: true,
        forbidBodyScroll: false // 自行处理滚动穿透
      },
      rotate: 0
    }
  },
  methods: {
    setCompassRotate (e) {
      const { top: compassTop, left: compassLeft, width: compassWidth, height: compassHeight } = this.$refs.compass.getBoundingClientRect()
      const compassPoint = [compassLeft - compassWidth / 2, compassTop - compassHeight / 2]
      const { top, left, width, height } = e
      const movePoint = [left - width / 2, top - height / 2]
      const deg = Math.atan2(movePoint[1] - compassPoint[1], movePoint[0] - compassPoint[0]) / Math.PI * 180
      this.rotate = deg + 90
    },
    handleToDragStart () {
      document.body.style.overflow = 'hidden'
    },
    handleToDragEnd () {
      document.body.style.overflow = 'visible'
    }
  }
}
</script>

<style lang='scss' scoped>
.move-box {
  position: fixed;
  bottom: 80px;
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
.compass-box {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .compass {
    width: 64px;
    height: 64px;
    filter: drop-shadow(0 0 16px #ccc);
    animation: bounce 2s ease-in-out 1s infinite;
  }
}
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
