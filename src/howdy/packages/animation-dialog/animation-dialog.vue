<template>
  <div class="animation-dialog-wrapper"
       v-show="show"
       @click.self="close">
    <div class="dialog-static-fake"
         :style="{ width, height }"
         ref="staticFake"></div>
    <div class="dialog-center-fake"
         ref="centerFake"></div>
    <div class="dialog"
         :class="customClass"
         ref="main">
      <div class="icon-close"
           @click="close">
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { insertAfter } from './utils/helper'
import 'animate.css'
export default {
  name: 'AnimationDialog',
  props: {
    width: {
      type: String,
      default: '60vw'
    },
    height: {
      type: String,
      default: '70vh'
    },
    animationMode: {
      type: Boolean,
      default: false
    },
    animationIn: {
      type: String,
      default: 'bounceIn'
    },
    animationOut: {
      type: String,
      default: 'bounceOut'
    },
    time: {
      type: Number,
      default: 500
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.55,-0.15, 0.71, 1.35)'
    },
    openFromItself: {
      type: Boolean,
      default: false
    },
    customClass: String,
    listenWindowSizeChange: {
      type: Boolean,
      default: false
    },
    debounceWait: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      openerEl: null,
      cloneOpenerEl: null,
      show: false,
      timer: null
    }
  },
  computed: {
    animationTime () {
      return this.time / 1000
    }
  },
  mounted () {
    if (this.listenWindowSizeChange) {
      window.addEventListener('resize', this.resetSize)
    }
  },
  beforeDestroy () {
    if (this.listenWindowSizeChange) {
      window.removeEventListener('resize', this.resetSize)
    }
  },
  methods: {
    resetSize () {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        const {
          width: staticWidth,
          height: staticHeight
        } = this.$refs.staticFake.getBoundingClientRect()
        this.$refs.staticFake.style.left = `calc(50% - ${staticWidth / 2}px`
        this.$refs.staticFake.style.top = `calc(50% - ${staticHeight / 2}px)`
        this.$nextTick(() => {
          const {
            top: afterTop,
            left: afterLeft,
            width: afterWidth,
            height: afterHeight
          } = this.$refs.staticFake.getBoundingClientRect()
          this.$refs.main.style.top = `${afterTop}px`
          this.$refs.main.style.left = `${afterLeft}px`
          this.$refs.main.style.width = `${afterWidth}px`
          this.$refs.main.style.height = `${afterHeight}px`
        })
      }, this.debounceWait)
    },
    open (el) {
      if (this.animationMode) {
        this.show = true
        this.$nextTick(() => {
          const {
            width: staticWidth,
            height: staticHeight
          } = this.$refs.staticFake.getBoundingClientRect()
          console.log(staticWidth, staticHeight)
          this.$refs.staticFake.style.left = `calc(50% - ${staticWidth / 2}px`
          this.$refs.staticFake.style.top = `calc(50% - ${staticHeight / 2}px)`
          this.$nextTick(() => {
            const {
              top: afterTop,
              left: afterLeft,
              width: afterWidth,
              height: afterHeight
            } = this.$refs.staticFake.getBoundingClientRect()
            this.$refs.main.style.cssText = `top:${afterTop}px; 
                                            left: ${afterLeft}px;
                                            width: ${afterWidth}px;
                                            height: ${afterHeight}px;
                                            animation: ${this.animationIn} ${this.animationTime}s`
          })
        })
      } else {
        this.show = true
        this.openerEl = !el
          ? this.$refs.centerFake
          : typeof el === 'string'
            ? document.querySelector(el)
            : el
        this.openerEl.classList.add('is-open')
        this.$nextTick(() => {
          const {
            top,
            left,
            width,
            height
          } = this.openerEl.getBoundingClientRect()
          this.$refs.main.classList.add('animating')
          this.$refs.main.style.cssText = `top:${top}px; left: ${left}px;width: ${width}px;height: ${height}px;`
          const {
            width: staticWidth,
            height: staticHeight
          } = this.$refs.staticFake.getBoundingClientRect()
          this.$refs.staticFake.style.left = `calc(50% - ${staticWidth / 2}px`
          this.$refs.staticFake.style.top = `calc(50% - ${staticHeight / 2}px)`
          if (this.openFromItself) {
            this.cloneOpenerEl = this.openerEl.cloneNode(true)
            this.openerEl.style.visibility = 'hidden'
            insertAfter(this.cloneOpenerEl, this.openerEl)
            this.cloneOpenerEl.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;margin:0;width: auto;height:auto;'
            this.$refs.main
              .querySelector('.dialog-body')
              .appendChild(this.cloneOpenerEl)
          }
          this.$nextTick(() => {
            const {
              top: afterTop,
              left: afterLeft,
              width: afterWidth,
              height: afterHeight
            } = this.$refs.staticFake.getBoundingClientRect()
            this.$refs.main.style.cssText = `top:${afterTop}px; 
                                          left: ${afterLeft}px;
                                          width: ${afterWidth}px;
                                          height: ${afterHeight}px;
                                          transition: ${this.animationTime}s all ${this.timingFunction}`
            setTimeout(() => {
              this.$refs.main.classList.remove('animating')
            }, this.time + 100)
          })
        })
      }
    },
    close () {
      if (this.animationMode) {
        this.$refs.main.style.animation = `${this.animationOut} ${this.animationTime}s`
        this.$emit('beforeClose')
        setTimeout(() => {
          this.show = false
        }, this.time - 100)
      } else {
        const {
          top,
          left,
          width,
          height
        } = this.openerEl.getBoundingClientRect()
        this.$refs.main.classList.add('animating')
        this.$refs.main.style.cssText = `top:${top}px; 
                                      left: ${left}px;
                                      width: ${width}px;
                                      height: ${height}px;
                                      transition: ${this.animationTime}s all ${this.timingFunction}`
        this.$emit('beforeClose')
        setTimeout(() => {
          this.openerEl.classList.remove('is-open')
          this.$refs.main.classList.remove('animating')
          this.show = false
          if (this.openFromItself) {
            this.openerEl.style.visibility = 'visible'
            this.$refs.main
              .querySelector('.dialog-body')
              .removeChild(this.cloneOpenerEl)
          }
        }, this.time + 100)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.animation-dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 100001;
  .dialog-static-fake {
    position: absolute;
    visibility: hidden;
  }
  .dialog-center-fake {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .dialog {
    position: absolute;
    background: #fff;
    cursor: default;
    box-shadow: 0 0 5px #888;
    width: 50%;
    overflow: hidden;
    .dialog-body {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding: 20px;
      text-align: left;
    }
    &.animating {
      .dialog-body {
        overflow: hidden;
      }
    }
    .icon-close {
      width: 36px;
      height: 36px;
      position: absolute;
      right: 12px;
      top: 10px;
      background: transparent;
      cursor: pointer;
      z-index: 9999;
      .line {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        top: 17px;
        right: 8px;
        transform-origin: center;
        border-radius: 1px;
        background: #99a;
        &:nth-child(1) {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
      }
      &:hover {
        .line {
          background: #667;
        }
      }
    }
  }
}
</style>
