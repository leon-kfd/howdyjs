<template>
  <teleport to="body" :disabled="!appendToBody">
    <div v-show="show" class="animation-dialog-wrapper" @click.self="close">
      <div ref="staticFake" class="dialog-static-fake" :style="{ width, height }"></div>
      <div ref="centerFake" class="dialog-center-fake"></div>
      <div ref="main" class="dialog" :class="customClass">
        <div class="icon-close" @click="close">
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
import { insertAfter } from '../shared';
export default defineComponent({
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
    appendToBody: {
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
  emits: ['beforeClose'],
  setup(props, { emit }) {
    const staticFake = ref();
    const centerFake = ref();
    const main = ref();
    const animationTime = computed(() => props.time / 1000);

    let timer: number | null | NodeJS.Timeout = null;
    const resetSize = () => {
      if (timer) {
        clearTimeout(timer as number);
      }
      timer = setTimeout(async () => {
        const { width: staticWidth, height: staticHeight } = staticFake.value.getBoundingClientRect();
        staticFake.value.style.left = `calc(50% - ${staticWidth / 2}px`;
        staticFake.value.top = `calc(50% - ${staticHeight / 2}px)`;
        await nextTick();
        const { top: afterTop, left: afterLeft, width: afterWidth, height: afterHeight } = staticFake.value.getBoundingClientRect();
        main.value.style.top = `${afterTop}px`;
        main.value.style.left = `${afterLeft}px`;
        main.value.style.width = `${afterWidth}px`;
        main.value.style.height = `${afterHeight}px`;
      }, props.debounceWait);
    };

    onMounted(() => {
      if(props.listenWindowSizeChange) {
        window.addEventListener('resize', resetSize);
      }
    });
    onUnmounted(() => {
      if(props.listenWindowSizeChange) {
        window.removeEventListener('resize', resetSize);
      }
    });

    const show = ref(false);
    let openerEl: HTMLElement | null = null;
    let cloneOpenerEl: HTMLElement | null = null;
    const open = async (el: any) => {
      if (props.animationMode) {
        show.value = true;
        await nextTick();
        const { width: staticWidth, height: staticHeight } = staticFake.value.getBoundingClientRect();
        staticFake.value.style.left = `calc(50% - ${staticWidth / 2}px`;
        staticFake.value.style.top = `calc(50% - ${staticHeight / 2}px)`;
        await nextTick();
        const { top: afterTop, left: afterLeft, width: afterWidth, height: afterHeight } = staticFake.value.getBoundingClientRect();
        main.value.style.cssText = `top:${afterTop}px; 
                                    left: ${afterLeft}px;
                                    width: ${afterWidth}px;
                                    height: ${afterHeight}px;
                                    animation: ${props.animationIn} ${animationTime.value}s`;
      } else {
        show.value = true;
        openerEl = (!el ? centerFake.value : typeof el === 'string' ? document.querySelector(el) : el) as HTMLElement;
        openerEl.classList.add('is-open');
        await nextTick();
        const { top, left, width, height } = openerEl.getBoundingClientRect();
        main.value.classList.add('animating');
        main.value.style.cssText = `top:${top}px; left: ${left}px;width: ${width}px;height: ${height}px;`;
        const { width: staticWidth, height: staticHeight } = staticFake.value.getBoundingClientRect();
        staticFake.value.style.left = `calc(50% - ${staticWidth / 2}px`;
        staticFake.value.style.top = `calc(50% - ${staticHeight / 2}px)`;
        if (props.openFromItself) {
          cloneOpenerEl = openerEl.cloneNode(true) as HTMLElement;
          openerEl.style.visibility = 'hidden';
          insertAfter(cloneOpenerEl, openerEl);
          cloneOpenerEl.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;margin:0;width: auto;height:auto;';
          main.value.querySelector('.dialog-body').appendChild(cloneOpenerEl);
        }
        await nextTick();
        const { top: afterTop, left: afterLeft, width: afterWidth, height: afterHeight } = staticFake.value.getBoundingClientRect();
        main.value.style.cssText = `top:${afterTop}px; 
                                    left: ${afterLeft}px;
                                    width: ${afterWidth}px;
                                    height: ${afterHeight}px;
                                    transition: ${animationTime.value}s all ${props.timingFunction}`;
        setTimeout(() => {
          main.value.classList.remove('animating');
        }, props.time + 100);
      }
    };

    const close = () => {
      if (props.animationMode) {
        main.value.style.animation = `${props.animationOut} ${animationTime.value}s`;
        emit('beforeClose');
        setTimeout(() => {
          show.value = false;
        }, props.time - 100);
      } else {
        if (!openerEl) {
          return;
        }
        const { top, left, width, height } = openerEl.getBoundingClientRect();
        main.value.classList.add('animating');
        main.value.style.cssText = `top:${top}px; 
                                    left: ${left}px;
                                    width: ${width}px;
                                    height: ${height}px;
                                    transition: ${animationTime.value}s all ${props.timingFunction}`;
        emit('beforeClose');
        setTimeout(() => {
          if (openerEl) {
            openerEl.classList.remove('is-open');
            main.value.classList.remove('animating');
            show.value = false;
            if (props.openFromItself) {
              openerEl.style.visibility = 'visible';
              main.value.querySelector('.dialog-body').removeChild(cloneOpenerEl);
            }
          }
        }, props.time + 100);
      }
    };
    return {
      open,
      close,
      staticFake,
      centerFake,
      main,
      show
    };
  }
});
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