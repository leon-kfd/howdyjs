<template>
  <div class="__tab-wrapper" :style="`width: ${tabContentRealWidth}px`">
    <div
      class="__tab-list"
      :style="`width:${tabListMaxWidth}px;transform: translateX(${tabListMove}px);${tabCustomStyle};${transition && computedTabTransitionStr};`"
      @touchstart="listTouchStart"
      @touchmove="listTouchMove"
      @touchend="listTouchEnd"
    >
      <div
        v-for="(item,index) in tabList"
        :key="item" 
        class="__tab-list-item"
        :style="`width: ${tabWidth}px`" 
        :class="{active: preActive === index}"
        @click="setActive(index)"
      >
        {{ item }}
      </div>
      <div
        class="__line-wrapper" 
        :class="{'deny-transition': denyLineTransition}" 
        :style="`width: ${tabWidth}px;transform: translateX(${lineLeft}px);${transition && computedMainTransitionStr}`"
      >
        <div
          class="__line" 
          :style="`width: ${lineWidth + lineDynamicWidth}px;${isDragRight ? 'left' : 'right'}: ${lineSpacing}px;${transition && computedMainTransitionStr};`"
        >
        </div>
      </div>
    </div>
    <div
      class="__tab-content" 
      :style="`width:${tabList.length * 100}vw;transform: translateX(${tabContentMove}px);${transition && computedMainTransitionStr}`"
      @touchstart="contentTouchStart"
      @touchmove="contentTouchMove"
      @touchend="contentTouchEnd"
    >
      <div
        v-for="(item,index) in tabList"
        :key="item"
        class="__tab-content-item"
        :style="`width: ${tabContentRealWidth}px;min-height: ${tabContentMinHeight}`"
        :class="{active: active === index}"
      >
        <slot :name="`tab${index + 1}`"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick, PropType, watch } from 'vue';
export default defineComponent({
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
      type: [Number, String],
      default: '100vw'
    },
    tabContentMinHeight: {
      type: String,
      default: '100px' 
    },
    tabList: {
      type: Array as PropType<string[]>,
      required: true
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
  emits: [
    'tabActiveChange',
    'contentTouchStart',
    'contentTouchMove',
    'contentTouchEnd'
  ],
  setup(props, { emit }) {
    let startX = 0;
    let startX1 = 0, saveStartX1 = 0, saveStartY1 = 0, saveTabContentMove = 0;
    let isFastSlide = false;
    let isStart = false;
    // state
    const active = ref(0);
    const preActive = ref(0);
    const lineDynamicWidth = ref(0);
    const tabListMove = ref(0);
    const tabContentMove = ref(0);
    const transition = ref(false);
    const denyLineTransition = ref(false);
    const isDragRight = ref(false);
    const isYScroll = ref(false);
    // computed
    const tabListMaxWidth = computed(() => props.tabWidth * props.tabList.length);
    const tabContentRealWidth = computed(() => {
      if (typeof props.tabContentWidth === 'number') {
        return props.tabContentWidth;
      } else if (typeof props.tabContentWidth === 'string' && /\d+vw/.test(props.tabContentWidth)) {
        const precent = ~~props.tabContentWidth.replace('vw', '');
        return (precent * window.innerWidth) / 100;
      } else {
        console.error('[StandardTabs]Props Error: tabContentWidth is invalid, it will reset to 100vw!');
        return window.innerWidth;
      }
    });
    const lineSpacing = computed(() => (props.tabWidth - props.lineWidth) / 2);
    const computedMainTransitionStr = computed(() => `transition: all ${props.transitionDuration / 1000}s ${props.mainTransitionTimingFunction}`);
    const computedTabTransitionStr = computed(() => `transition: all ${props.transitionDuration / 1000}s ${props.tabTransitionTimingFunction}`);
    const lineLeft = computed(() => {
      let lineLeft = active.value * props.tabWidth;
      let lineLeftMax = props.tabWidth * (props.tabList.length - 1);
      if (lineLeft < 0) {
        lineLeft = 0;
      } else if(lineLeft > lineLeftMax) {
        lineLeft = lineLeftMax;
      }
      return lineLeft;
    });

    // watch
    watch(active, (val) => {
      emit('tabActiveChange', val);
    });

    // tabListEvent
    const listTouchStart = (e: TouchEvent) => {
      const { clientX } = e.touches[0];
      startX = clientX;
    };
    const listTouchMove = (e: TouchEvent) => {
      const { clientX } = e.touches[0];
      const move = clientX - startX;
      const maxLeft = tabListMaxWidth.value - tabContentRealWidth.value;
      tabListMove.value = tabListMove.value + move;
      if (tabListMove.value > 0) {
        tabListMove.value = 0;
      } else if (tabListMove.value < -maxLeft) {
        tabListMove.value = -maxLeft;
      }
      startX = clientX;
    };
    const listTouchEnd = (e: TouchEvent) => {
      console.log('touchEnd', e);
    };
    // tabContentEvent
    const contentTouchStart = (e: TouchEvent) => {
      const { clientX, clientY } = e.touches[0];
      startX1 = saveStartX1 = clientX;
      saveStartY1 = clientY;
      saveTabContentMove = tabContentMove.value;
      lineDynamicWidth.value = 0;
      denyLineTransition.value = true;
      isFastSlide = true;
      setTimeout(() => {
        isFastSlide = false;
      }, 300);
      emit('contentTouchStart', e);
      props.stopPropagation && e.stopPropagation();
    };
    const contentTouchMove = (e: TouchEvent) => {
      const rate = props.tabWidth / tabContentRealWidth.value;
      const { clientX, clientY } = e.touches[0];
      // 判断是否是纵向滚动
      const move = clientX - startX1;
      if (!isStart) {
        isStart = true;
        isYScroll.value = (Math.abs(clientY - saveStartY1) / Math.abs(clientX - saveStartX1)) > 1;
      }
      isDragRight.value = clientX - saveStartX1 < 0;
      if (isYScroll.value) {
        return;
      }
      if (props.moveEventPrevent) {
        e.preventDefault();
      }
      const maxLeft = tabContentRealWidth.value * (props.tabList.length - 1);
      tabContentMove.value = tabContentMove.value + move;
      if (isDragRight.value) {
        if (active.value !== props.tabList.length - 1) {
          lineDynamicWidth.value += -move * rate;
        }
      } else {
        if (active.value !== 0) {
          lineDynamicWidth.value += +move * rate;
        }
      }
      if (lineDynamicWidth.value < 0) {
        lineDynamicWidth.value = 0;
      }
      if (tabContentMove.value > 0) {
        tabContentMove.value = 0;
      } else if (tabContentMove.value < -maxLeft) {
        tabContentMove.value = -maxLeft;
      } else {
        const saveMove = clientX - saveStartX1;
        const absSaveMove = Math.abs(saveMove);
        if (absSaveMove > tabContentRealWidth.value / 2) {
          if (saveMove < 0) {
            if(preActive.value !== active.value + 1) {
              preActive.value++;
            }
          } else {
            if(preActive.value !== active.value - 1) {
              preActive.value--;
            }
          }
        } else {
          preActive.value = active.value;
        }
      }
      startX1 = clientX;
      emit('contentTouchMove', e);
      props.stopPropagation && e.stopPropagation();
    };
    const contentTouchEnd = async (e: TouchEvent) => {
      isStart = false;
      if (isYScroll.value) {
        return;
      }
      const { clientX } = e.changedTouches[0];
      const move = clientX - saveStartX1;
      const absMove = Math.abs(move);
      transition.value = true;
      denyLineTransition.value = false;
      await nextTick();
      if ((isFastSlide && absMove > 10) || (absMove > (tabContentRealWidth.value / 2))) {
        if (move > 0) {
          if (active.value === 0) {
            return;
          }
          tabContentMove.value = saveTabContentMove + tabContentRealWidth.value;
          active.value--;
        } else {
          if (active.value === props.tabList.length - 1) {
            return;
          }
          tabContentMove.value = saveTabContentMove - tabContentRealWidth.value;
          active.value++;
        }
        preActive.value = active.value;
        setTabCenter(active.value);
      } else {
        tabContentMove.value = saveTabContentMove;
      }
      lineDynamicWidth.value = 0;
      setTimeout(() => {
        transition.value = false;
      }, 500);
      emit('contentTouchEnd', e);
      props.stopPropagation && e.stopPropagation();
    };

    const setTabCenter = (index: number) => {
      const left = index * props.tabWidth - tabContentRealWidth.value / 2 + props.tabWidth / 2;
      const maxLeft = tabListMaxWidth.value - tabContentRealWidth.value;
      if (maxLeft < 0) {
        return;
      }
      if (left < 0) {
        tabListMove.value = 0;
      } else if (left > maxLeft) {
        tabListMove.value = -maxLeft;
      } else {
        tabListMove.value = -left; 
      }
    };

    const setActive = async (index: number) => {
      transition.value = true;
      await nextTick();
      active.value = preActive.value = index;
      setTabCenter(index);
      tabContentMove.value = -active.value * tabContentRealWidth.value;
      setTimeout(() => {
        transition.value = false;
      }, 500);
    };
    

    return {
      active,
      preActive,
      lineDynamicWidth,
      tabListMove,
      tabContentMove,
      transition,
      denyLineTransition,
      isDragRight,
      isYScroll,
      tabListMaxWidth,
      tabContentRealWidth,
      lineSpacing,
      computedMainTransitionStr,
      computedTabTransitionStr,
      lineLeft,
      listTouchStart,
      listTouchMove,
      listTouchEnd,
      contentTouchStart,
      contentTouchMove,
      contentTouchEnd,
      setActive
    };
  }
});
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
