<template>
  <div class="__tab-wrapper" :style="`width: ${tabContentRealWidth}px`">
    <div class="__tab-list"
      :style="`width:${tabListMaxWidth}px;transform: translateX(${tabListMove}px);${tabCustomStyle};${transition && computedTabTransitionStr};`"
      @touchstart="tabListEvent.touchStart"
      @touchmove="tabListEvent.touchMove"
      @touchend="tabListEvent.touchEnd">
      <div class="__tab-list-item" :style="`width: ${tabWidth}px`" 
        :class="{active: preActive === index}" v-for="(item,index) in tabList" 
        :key="item"
        @click="setActive(index)">{{item}}</div>
      <div class="__line-wrapper" 
        :class="{'deny-transition': denyLineTransition}" 
        :style="`width: ${tabWidth}px;transform: translateX(${lineLeft}px);${transition && computedMainTransitionStr}`">
        <div class="__line" 
          :style="`width: ${lineWidth + lineDynamicWidth}px;${isDragRight ? 'left' : 'right'}: ${lineSpacing}px;${transition && computedMainTransitionStr};`">
        </div>
      </div>
    </div>
    <div class="__tab-content" 
      :style="`width:${tabList.length * 100}vw;transform: translateX(${tabContentMove}px);${transition && computedMainTransitionStr}`"
      @touchstart="tabContentEvent.touchStart"
      @touchmove="tabContentEvent.touchMove"
      @touchend="tabContentEvent.touchEnd">
      <div class="__tab-content-item" :style="`width: ${tabContentRealWidth}px;min-height: ${tabContentMinHeight}`" :class="{active: active === index}" v-for="(item,index) in tabList" :key="item">
        <slot :name="`tab${index + 1}`"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StandardTabs',
  props: {
    tabWidth: {
      type: Number,
      default: 80
    },
    lineWidth: {
      type: Number,
      default: 30
    },
    tabContentWidth: {
      type: Number|String,
      default: '100vw'
    },
    tabContentMinHeight: {
      type: String,
      default: '100px' 
    },
    tabList: {
      type: Array[String],
      require: true
    },
    transitionDuration: {
      type: Number,
      default: 400
    },
    mainTransitionTimingFunction: {
      type: String,
      default: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
    },
    tabTransitionTimingFunction: {
      type: String,
      default: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    },
    tabCustomStyle: {
      type: String,
      default: ''
    },
    stopPropagation: {
      type: Boolean,
      default: false
    },
    moveEventPrevent: {
      type: Boolean,
      default: true
    }
  },
  data () {
    let startX,startY
    let startX1, startY1, saveStartX1, saveStartY1, saveTabContentMove
    let isFastSlide = false
    let isStart = false
    return {
      active: 0,
      preActive: 0,
      lineDynamicWidth: 0,
      tabListMove: 0,
      tabContentMove: 0,
      transition: false,
      denyLineTransition: false,
      isDragRight: false,
      isYScroll: false,
      tabListEvent: {
        touchStart: (e) => {
          const { clientX, clientY } = e.touches[0]
          startX = clientX
          startY = clientY
        },
        touchMove: (e) => {
          const { clientX, clientY } = e.touches[0]
          const move = clientX - startX
          const maxLeft = this.tabListMaxWidth - this.tabContentRealWidth
          this.tabListMove = this.tabListMove + move
          if (this.tabListMove > 0) {
            this.tabListMove = 0
          } else if (this.tabListMove < -maxLeft) {
            this.tabListMove = -maxLeft
          }
          startX = clientX
          startY = clientY
        },
        touchEnd: (e) => {
          // console.log('end', e)
        }
      },
      tabContentEvent: {
        touchStart: (e) => {
          const { clientX, clientY } = e.touches[0]
          startX1 = saveStartX1 = clientX
          startY1 = saveStartY1 = clientY
          saveTabContentMove = this.tabContentMove
          this.lineDynamicWidth = 0
          this.denyLineTransition = true
          isFastSlide = true
          setTimeout(() => {
            isFastSlide = false
          }, 300)
          this.$emit('contentTouchStart', e)
          this.stopPropagation && e.stopPropagation()
        },
        touchMove: (e) => {
          const rate = this.tabWidth /this.tabContentRealWidth
          const { clientX, clientY } = e.touches[0]
          // 判断是否是纵向滚动
          const move = clientX - startX1
          if (!isStart) {
            isStart = true
            this.isYScroll = (Math.abs(clientY - saveStartY1) / Math.abs(clientX - saveStartX1)) > 1
          }
          this.isDragRight = clientX - saveStartX1 < 0
          if (this.isYScroll) return
          if (this.moveEventPrevent) e.preventDefault()
          const maxLeft =this.tabContentRealWidth * (this.tabList.length - 1)
          this.tabContentMove = this.tabContentMove + move
          if (this.isDragRight) {
            if (this.active !== this.tabList.length - 1) {
              this.lineDynamicWidth += -move * rate
            }
          } else {
            if (this.active !== 0) {
              this.lineDynamicWidth += +move * rate
            }
          }
          if (this.lineDynamicWidth < 0) this.lineDynamicWidth = 0
          if (this.tabContentMove > 0) {
            this.tabContentMove = 0
          } else if (this.tabContentMove < -maxLeft) {
            this.tabContentMove = -maxLeft
          } else {
            const saveMove = clientX - saveStartX1
            const absSaveMove = Math.abs(saveMove)
            if (absSaveMove > this.tabContentRealWidth / 2) {
              if (saveMove < 0) {
                if(this.preActive!== this.active + 1) this.preActive++
              } else {
                if(this.preActive!== this.active - 1) this.preActive--
              }
            } else {
              this.preActive = this.active
            }
          }
          startX1 = clientX
          startY1 = clientY
          this.$emit('contentTouchMove', e)
          this.stopPropagation && e.stopPropagation()
        },
        touchEnd: (e) => {
          isStart = false
          if (this.isYScroll) return
          const { clientX, clientY } = e.changedTouches[0]
          const move = clientX - saveStartX1
          const absMove = Math.abs(move)
          this.transition = true
          this.denyLineTransition = false       
          this.$nextTick(() => {
            if ((isFastSlide && absMove > 10) || (absMove > (this.tabContentRealWidth / 2))) {
              if (move > 0) {
                if (this.active === 0) return
                this.tabContentMove = saveTabContentMove + this.tabContentRealWidth
                this.active--
              } else {
                if (this.active === this.tabList.length - 1) return
                this.tabContentMove = saveTabContentMove - this.tabContentRealWidth
                this.active++
              }
              this.preActive = this.active
              this.setTabCenter(this.active)
            } else {
              this.tabContentMove = saveTabContentMove
            }
            this.lineDynamicWidth = 0
            setTimeout(() => {
              this.transition = false
            }, 500)
            this.$emit('contentTouchEnd', e)
          })
          this.stopPropagation && e.stopPropagation()
        }
      }
    }
  },
  computed: {
    tabContentRealWidth () {
      if (typeof this.tabContentWidth === 'number') {
        return this.tabContentWidth
      } else if (typeof this.tabContentWidth === 'string' && /\d+vw/.test(this.tabContentWidth)) {
        const precent = ~~this.tabContentWidth.replace('vw', '')
        return (precent * window.innerWidth) / 100
      } else {
        console.error('[StandardTabs]Props Error: tabContentWidth is invalid, it will reset to 100vw!')
        return window.innerWidth
      }
    },
    lineLeft () {
      let lineLeft = this.active * this.tabWidth
      let lineLeftMax = this.tabWidth * (this.tabList.length - 1)
      if (lineLeft < 0) {
        lineLeft = 0
      } else if(lineLeft > lineLeftMax) {
        lineLeft = lineLeftMax
      }
      return lineLeft
    },
    tabListMaxWidth () {
      return this.tabWidth * this.tabList.length
    },
    lineSpacing () {
      return (this.tabWidth - this.lineWidth) / 2
    },
    computedMainTransitionStr () {
      return `transition: all ${this.transitionDuration / 1000}s ${this.mainTransitionTimingFunction}`
    },
    computedTabTransitionStr () {
      return `transition: all ${this.transitionDuration / 1000}s ${this.tabTransitionTimingFunction}`
    }
  },
  watch: {
    active (val) {
      this.$emit('tabActiveChange', val)
    }
  },
  methods: {
    setActive (index) {
      this.transition = true
      this.$nextTick(() => {
        this.active = this.preActive = index
        this.setTabCenter(index)
        this.tabContentMove = -this.active * this.tabContentRealWidth
        setTimeout(() => {
          this.transition = false
        }, 500)
      })
    },
    setTabCenter (index) {
      const left = index * this.tabWidth - this.tabContentRealWidth / 2 + this.tabWidth / 2
      const maxLeft = this.tabListMaxWidth - this.tabContentRealWidth
      if (maxLeft < 0) return
      if (left < 0) {
        this.tabListMove = 0
      } else if (left > maxLeft) {
        this.tabListMove = -maxLeft
      } else {
        this.tabListMove = -left 
      }
    }
  }
}
</script>

<style scoped lang="scss">
.deny-transition {
  transition: none !important;
}
.__tab-wrapper {
  width: 100vw;
  overflow: hidden;
  .__tab-list {
    width: 999999px;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    margin-bottom: 10px;
    z-index: 9;
    .__tab-list-item {
      width: 80px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.active {
        font-weight: bold;
        color: #262626;
      }
    }
    .__line-wrapper {
      position: absolute;
      bottom: -2px;
      .__line {
        position: absolute;
        width: 30px;
        height: 4px;
        border-radius: 2px;
        background: linear-gradient(75deg, rgb(233, 132, 101), rgb(245, 97, 11));
      }
    }
  }
  .__tab-content {
    width: 999999px;
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
