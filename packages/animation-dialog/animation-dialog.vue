<template>
  <teleport to="body" :disabled="!appendToBody">
    <div
      v-show="show"
      class="animation-dialog-wrapper"
      :class="customWrapperClass"
      @click.self="clickOutside"
    >
      <div ref="staticFake" class="dialog-static-fake" :style="{ width, height }"></div>
      <div ref="centerFake" class="dialog-center-fake"></div>
      <div ref="main" class="dialog" :class="customClass">
        <div class="icon-close" @click="close">
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div v-if="$slots.title || title" class="dialog-title">
          <slot name="title">
            <div class="dialog-static-title">
              {{ title }}
            </div>
          </slot>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="dialog-footer">
          <slot name="footer"></slot>
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
      default: 'ease-in-out'
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
    customWrapperClass: String,
    listenWindowSizeChange: {
      type: Boolean,
      default: false
    },
    debounceWait: {
      type: Number,
      default: 200
    },
    title: {
      type: String
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
  },
  emits: ['beforeClose', 'close'],
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
                                    animation: ${props.animationIn} ${animationTime.value}s forwards`;
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
        }, props.time + 10);
      }
    };

    const clickOutside = () => {
      if (props.closeOnClickOutside) {
        close();
      }
    };

    const close = () => {
      if (props.animationMode) {
        main.value.style.animation = `${props.animationOut} ${animationTime.value}s forwards`;
        emit('beforeClose');
        setTimeout(() => {
          show.value = false;
          emit('close');
        }, props.time - 10);
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
                                    transition: ${animationTime.value}s all ${props.timingFunction};`;
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
          emit('close');
        }, props.time + 100);
      }
    };
    return {
      open,
      close,
      staticFake,
      centerFake,
      main,
      show,
      clickOutside
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
    display: flex;
    flex-direction: column;
    .dialog-body {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding: 20px;
      flex: 1;
    }
    .dialog-title {
      .dialog-static-title {
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        font-weight: bold;
        position: relative;
        padding-left: 20px;
        &:after {
          content: '';
          position: absolute;
          border-left: 4px solid #88aaff;
          height: 20px;
          top: 20px;
          left: 10px;
        }
      }
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
<style>
/* Inject default animate css mode */
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__bounceIn {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
/* Bouncing exits  */
@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.animate__bounceOut {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}
</style>
