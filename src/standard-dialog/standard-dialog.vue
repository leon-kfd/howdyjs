<template>
  <div class="standard-dialog-wrapper"
       v-show="visible"
       @click.self="close">
    <div class="dialog-static-fake"
         :style="{width, height}"
         ref="staticFake"></div>
    <div class="dialog-center-fake"
         ref="centerFake"></div>
    <div class="dialog"
         :style="{...customStyle}"
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
export default {
  name: 'StandardDialog',
  props: {
    width: {
      type: String,
      default: '50vw'
    },
    height: {
      type: String,
      default: '70vh'
    },
    time: {
      type: Number,
      default: 500
    },
    customStyle: Object
  },
  data () {
    return {
      openerEl: null,
      visible: false
    }
  },
  computed: {
    animateTime () {
      return this.time / 1000
    }
  },
  methods: {
    open (el) {
      this.visible = true
      this.openerEl = !el ? this.$refs.centerFake : (typeof el === 'string' ? document.querySelector(el) : el)
      this.openerEl.classList.add('is-open')
      this.$nextTick(() => {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = this.openerEl
        this.$refs.main.style.cssText = `top:${offsetTop}px; left: ${offsetLeft}px;width: ${offsetWidth}px;height: ${offsetHeight}px;`
        const { offsetWidth: staticWidth, offsetHeight: staticHeight } = this.$refs.staticFake
        this.$refs.staticFake.style.left = `calc(50% - ${staticWidth / 2}px`
        this.$refs.staticFake.style.top = `calc(50% - ${staticHeight / 2}px)`
        this.$nextTick(() => {
          const { offsetTop: afterOffsetTop, offsetLeft: afterOffsetLeft, offsetWidth: afterOffsetWidth, offsetHeight: afterOffsetHeight } = this.$refs.staticFake
          this.$refs.main.style.cssText = `top:${afterOffsetTop}px; 
                                          left: ${afterOffsetLeft}px;
                                          width: ${afterOffsetWidth}px;
                                          height: ${afterOffsetHeight}px;
                                          transition: ${this.animateTime}s all cubic-bezier(0.55,-0.15, 0.71, 1.35);`
        })
      })
    },
    close () {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = this.openerEl
      this.$refs.main.style.cssText = `top:${offsetTop}px; 
                                      left: ${offsetLeft}px;
                                      width: ${offsetWidth}px;
                                      height: ${offsetHeight}px;
                                      transition: ${this.animateTime}s all cubic-bezier(0.55,-0.15, 0.71, 1.35)`
      setTimeout(() => {
        this.openerEl.classList.remove('is-open')
        this.visible = false
      }, this.time + 100)
    }
  }
}
</script>
<style scoped lang="scss">
.standard-dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
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
