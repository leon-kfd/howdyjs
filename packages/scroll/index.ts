import { DirectiveHook, App, DirectiveBinding, ObjectDirective } from 'vue';
export interface ScrollBarElement extends HTMLElement {
  $scroll?: CustomScrollBar
  onmousewheel?: EventListener,
  mouseenterEvent?: EventListener,
  mouseleaveEvent?: EventListener
}

export interface ScrollBarOptions {
  direction: 'x' | 'y' | 'all',
  scrollBarWidth: number,
  scrollBarOffsetX: number,
  scrollBarOffsetY: number,
  scrollBarThumbColor: string,
  scrollBarThumbBorderRadius: boolean | number,
  scrollBarTrackColor: string,
  enableTrackClickScroll: boolean,
  scrollSpeed: number,
  dragScroll: boolean,
  thumbShow: 'always' | 'hover',
  scrollBarThumbHoverColor?: string
}

export type Direction = 'x' | 'y'

class CustomScrollBar {
  private el: ScrollBarElement
  private options: ScrollBarOptions
  private directionArr: Direction[]
  private timer: number | null | NodeJS.Timeout
  private scrollWrapper?: HTMLElement | null
  constructor({ el, options }: { el: string | HTMLElement, options?: ScrollBarOptions }) {
    if (el instanceof HTMLElement) {
      this.el = el;
    } else {
      this.el = document.querySelector(el) as HTMLElement;
    }
    this.options = {
      direction: 'y',
      scrollBarWidth: 6,
      scrollBarOffsetX: 0,
      scrollBarOffsetY: 0,
      scrollBarThumbColor: '#aab',
      scrollBarThumbBorderRadius: true,
      scrollBarTrackColor: 'transparent',
      enableTrackClickScroll: true,
      scrollSpeed: 20,
      dragScroll: false,
      thumbShow: 'always',
      ...options
    };
    this.directionArr = this.options.direction === 'all' ? ['x', 'y'] : ['x', 'y'].includes(this.options.direction) ? [this.options.direction] : ['y'];
    this.timer = null;
    this.el.$scroll = this;
  }

  init (defaultX = 0, defaultY = 0) {
    this.scrollWrapper = document.createElement('div') as HTMLElement;
    this.scrollWrapper.style.cssText = `position: absolute;top:0;left:0;bottom:0;right:0;transform:translate(${defaultX}px,${defaultY}px)`;
    this.scrollWrapper.setAttribute('class', 'scroll__wrapper');
    this.el.appendChild(this.scrollWrapper);
    this.el.style.position = 'relative';
    this.el.style.overflow = 'hidden';
    this.directionArr.map(item => {
      this.createScrollBarTrack(item);
    });
    if (this.options.dragScroll) {
      this.setDragScroll(this.el, this.directionArr);
    }
    if (this.options.thumbShow === 'hover') {
      this.setDisplayForHover(this.el);
    }
  }

  private createScrollBarTrack (direction: Direction) {
    const isY = direction === 'y';
    let {
      scrollBarWidth,
      scrollBarOffsetX,
      scrollBarOffsetY,
      scrollBarThumbColor,
      scrollBarThumbHoverColor,
      scrollBarThumbBorderRadius,
      scrollBarTrackColor,
      enableTrackClickScroll,
      scrollSpeed
    } = this.options;
    const scrollBarThumbColorIsGradient = scrollBarThumbColor.includes('gradient');
    scrollBarThumbBorderRadius = scrollBarThumbBorderRadius ? scrollBarWidth / 2 : 0;
    const track = document.createElement('div');
    track.setAttribute('direction', direction);
    const trackCssText = isY
      ? `position: absolute;right: 0;top: 0;height: 100%; width: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
      : `position: absolute;left: 0;bottom: 0;width: 100%; height: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`;
    track.style.cssText = trackCssText;
    track.setAttribute('class', `scroll__track_${direction}`);
    if (this.scrollWrapper) {
      this.scrollWrapper.appendChild(track);
    }
    const thumb = document.createElement('div');
    let thumbCssText = isY
      ? `position: relative;top: 0;right: 0;width: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetY}px ${scrollBarOffsetX}px;box-sizing:border-box;cursor: pointer;`
      : `position: relative;bottom: 0;left: 0;height: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetX}px ${scrollBarOffsetY}px;box-sizing:border-box;cursor: pointer;`;
    const thumbInner = document.createElement('div');
    let thumbInnerCssText = `width: 100%;height:100%;border-radius: ${scrollBarThumbBorderRadius}px;`;
    if (scrollBarThumbColorIsGradient) {
      thumbInnerCssText += `background-image: ${scrollBarThumbColor};`;
    } else {
      thumbInnerCssText += `background: ${scrollBarThumbColor};`;
    }
    const { offsetHeight, scrollHeight, offsetWidth, scrollWidth, scrollTop, scrollLeft } = this.el;
    const offsetSize = isY ? offsetHeight : offsetWidth;
    const scrollSize = isY ? scrollHeight : scrollWidth;
    if (scrollSize <= offsetSize) { // Don't need show overflow scroll
      return;
    }
    const thumbSize = offsetSize / scrollSize * offsetSize;
    thumbCssText += isY ? `height: ${thumbSize}px;` : `width: ${thumbSize}px`;
    thumb.style.cssText = thumbCssText;
    thumb.setAttribute('class', 'scroll__thumb');
    thumbInner.style.cssText = thumbInnerCssText;
    thumbInner.setAttribute('class', 'scroll__thumb_inner');
    thumb.appendChild(thumbInner);
    track.appendChild(thumb);
    let elScrollTop = isY ? scrollTop : scrollLeft;
    const thumbScrollTop = elScrollTop / scrollSize * offsetSize;
    thumb.style.transform = isY ? `translateY(${thumbScrollTop}px)` : `translateX(${thumbScrollTop}px)`;
    let isInThumbMouseMove = false;
    const elScrollTopMax = scrollSize - offsetSize;
    const thumbScrollTopMax = offsetSize - thumbSize;
    if (isY) {
      this.el.onmousewheel = function (wheel: any) {
        const deltaY = -wheel.wheelDelta || wheel.deltaY;
        if (!isInThumbMouseMove) {
          elScrollTop = deltaY < 0
            ? elScrollTop < -deltaY
              ? 0
              : elScrollTop + deltaY
            : elScrollTop >= elScrollTopMax - deltaY
              ? elScrollTopMax
              : elScrollTop + deltaY;
          __scroll__(track, elScrollTop / scrollSize * offsetSize);
        }
        return false;
      };
    }
    if (scrollBarThumbHoverColor) {
      thumb.onmouseenter = function () {
        if (scrollBarThumbHoverColor) {
          thumbInner.style.background = scrollBarThumbHoverColor;
        }
      };
      thumb.onmouseleave = function () {
        thumbInner.style.background = scrollBarThumbColor;
      };
    }
    thumb.onmousedown = function (downEvent) {
      downEvent.stopPropagation();
      const thumbEl = (<HTMLElement>downEvent.target).parentNode as HTMLElement;
      const beforeClientY = isY ? downEvent.clientY : downEvent.clientX;
      const [thumbBeforeOffset] = thumbEl.style.transform.match(/\d+(\.\d+)?/) || [0];
      const _thumbBeforeOffset = ~~thumbBeforeOffset;
      isInThumbMouseMove = true;
      document.onmousemove = function (moveEvent) {
        document.body.style.userSelect = 'none';
        const { clientY, clientX } = moveEvent;
        let thumbMoveOffset = (isY ? clientY : clientX) - beforeClientY + _thumbBeforeOffset;
        elScrollTop = thumbMoveOffset / offsetSize * scrollSize;
        if (elScrollTop < 0) {
          thumbMoveOffset = 0;
          elScrollTop = 0;
        } else if (elScrollTop > elScrollTopMax) {
          thumbMoveOffset = thumbScrollTopMax;
          elScrollTop = elScrollTopMax;
        }
        __scroll__(track, thumbMoveOffset);
      };
      document.onmouseup = function () {
        isInThumbMouseMove = false;
        document.body.style.userSelect = 'auto';
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    // 允许点击轨道进行滚动
    if (enableTrackClickScroll) {
      track.onmousedown = function (e) {
        const trackEl = e.target as HTMLElement;
        if (trackEl) {
          const clickPosition = isY ? (e.clientY - trackEl.getBoundingClientRect().top) : (e.clientX - trackEl.getBoundingClientRect().left);
          let thumbMoveOffset = clickPosition - thumbSize / 2;
          if (thumbMoveOffset < 0) {
            thumbMoveOffset = 0;
          } else if (thumbMoveOffset > thumbScrollTopMax) {
            thumbMoveOffset = thumbScrollTopMax;
          }
          __scroll__(trackEl, thumbMoveOffset);
        }
      };
    }

    // 滚动函数，使用requestAnimationFrame实现滚动动画
    let animateScroll: FrameRequestCallback;
    let rAF: number;
    const __scroll__ = (trackEl: HTMLElement, thumbMoveOffset: number) => {
      if (rAF) {
        window.cancelAnimationFrame(rAF);
      }
      animateScroll = () => {
        let thumbScrollTop, breakAnimation;
        let [thumbBeforeOffset] = (trackEl.childNodes[0] as HTMLElement).style.transform.match(/\d+(\.\d+)?/) || [0];
        thumbBeforeOffset = ~~thumbBeforeOffset;
        if (thumbMoveOffset > thumbBeforeOffset) {
          thumbBeforeOffset += scrollSpeed;
          if (thumbBeforeOffset < thumbMoveOffset) {
            elScrollTop = thumbBeforeOffset / offsetSize * scrollSize;
            thumbScrollTop = thumbBeforeOffset;
            breakAnimation = false;
          } else {
            elScrollTop = thumbBeforeOffset > thumbScrollTopMax ? elScrollTopMax : (thumbMoveOffset / offsetSize * scrollSize);
            thumbScrollTop = thumbBeforeOffset > thumbScrollTopMax ? thumbScrollTopMax : thumbMoveOffset;
            breakAnimation = true;
          }
        } else {
          thumbBeforeOffset -= scrollSpeed;
          if (thumbBeforeOffset > thumbMoveOffset) {
            elScrollTop = thumbBeforeOffset / offsetSize * scrollSize;
            thumbScrollTop = thumbBeforeOffset;
            breakAnimation = false;
          } else {
            elScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset / offsetSize * scrollSize;
            thumbScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset;
            breakAnimation = true;
          }
        }
        this.setTranslate(direction, elScrollTop);
        thumb.style.transform = isY ? `translateY(${thumbScrollTop}px)` : `translateX(${thumbScrollTop}px)`;
        if (isY) {
          this.el.scrollTop = elScrollTop;
        } else {
          this.el.scrollLeft = elScrollTop;
        }
        if (breakAnimation) {
          window.cancelAnimationFrame(rAF);
        } else {
          rAF = window.requestAnimationFrame(animateScroll);
        }
      };
      rAF = window.requestAnimationFrame(animateScroll);
    };
  }

  update (wait = 200) {
    if (this.timer !== null) {
      clearTimeout(this.timer as number);
    }
    this.timer = setTimeout(() => {
      if (this.scrollWrapper) {
        const { transform } = window.getComputedStyle(this.scrollWrapper);
        const [, , , , x, y] = transform.match(/-?\d+\.?\d{0,}/g) as RegExpMatchArray;
        const _x = ~~x;
        const _y = ~~y;
        this.destroy();
        this.init(_x, _y);
      }
    }, wait);
  }

  destroy () {
    if (this.scrollWrapper) {
      this.scrollWrapper.parentNode?.removeChild(this.scrollWrapper);
      this.scrollWrapper = null;
    }
    if (this.el.mouseenterEvent) {
      this.el.addEventListener('mouseenter', this.el.mouseenterEvent);
    }
    if (this.el.mouseleaveEvent) {
      this.el.addEventListener('mouseleave', this.el.mouseleaveEvent);
    }
  }

  private setTranslate (direction: Direction, value: number) {
    if (this.scrollWrapper) {
      const { transform } = window.getComputedStyle(this.scrollWrapper);
      const [a, b, c, d, x, y] = transform.match(/-?\d+\.?\d{0,}/g) as RegExpMatchArray;
      if (direction === 'x') {
        this.scrollWrapper.style.transform = `matrix(${a},${b},${c},${d},${value},${y})`;
      } else if (direction === 'y') {
        this.scrollWrapper.style.transform = `matrix(${a},${b},${c},${d},${x},${value})`;
      }
    }
  }

  private setDisplayForHover (el: ScrollBarElement) {
    const thumbAppendCss = 'opacity: 0;transition: opacity .4s ease-in-out';
    const scrollThumb = Array.from(el.querySelectorAll('.scroll__thumb')) as HTMLElement[];
    scrollThumb.map(item => {
      item.style.cssText = item.style.cssText + thumbAppendCss;
    });
    el.mouseenterEvent = function () {
      scrollThumb.map(item => {
        item.style.opacity = '1';
      });
    };
    el.mouseleaveEvent = function () {
      scrollThumb.map(item => {
        item.style.opacity = '0';
      });
    };
    el.addEventListener('mouseenter', el.mouseenterEvent);
    el.addEventListener('mouseleave', el.mouseleaveEvent);
  }

  private setDragScroll (el: HTMLElement, directionArr: Direction[]) {
    el.onmousedown = function (e) {
      // const { top: elClientRectTop, left: elClientRectLeft } = el.getBoundingClientRect()
      const { scrollTop, scrollLeft, scrollHeight, offsetHeight, scrollWidth, offsetWidth } = el;
      const { clientX: beforeClientX, clientY: beforeClientY } = e;
      const [elScrollLeftMax, elScrollTopMax] = [scrollWidth - offsetWidth, scrollHeight - offsetHeight];
      const [thumbScrollLeftMax, thumbScrollTopMax] = [offsetWidth - (offsetWidth / scrollWidth * offsetWidth), offsetHeight - (offsetHeight / scrollHeight * offsetHeight)];
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'pointer';
      document.onmousemove = function (moveEvent) {
        const { clientX, clientY } = moveEvent;
        let [elScrollLeft, elScrollTop] = [beforeClientX - clientX + scrollLeft, beforeClientY - clientY + scrollTop];
        let [thumbMoveOffsetX, thumbMoveOffsetY] = [elScrollLeft / scrollWidth * offsetWidth, elScrollTop / scrollHeight * offsetHeight];
        if (elScrollLeft < 0) {
          thumbMoveOffsetX = 0;
          elScrollLeft = 0;
        } else if (elScrollLeft > elScrollLeftMax) {
          thumbMoveOffsetX = thumbScrollLeftMax;
          elScrollLeft = elScrollLeftMax;
        }
        if (elScrollTop < 0) {
          thumbMoveOffsetY = 0;
          elScrollTop = 0;
        } else if (elScrollTop > elScrollTopMax) {
          thumbMoveOffsetY = thumbScrollTopMax;
          elScrollTop = elScrollTopMax;
        }
        (el.querySelector('.scroll__wrapper') as HTMLElement).style.transform = `translate(${elScrollLeft}px, ${elScrollTop}px)`;
        if (directionArr.includes('x')) {
          (el.querySelector('.scroll__track_x .scroll__thumb') as HTMLElement).style.transform = `translateX(${thumbMoveOffsetX}px)`;
        }
        if (directionArr.includes('y')) {
          (el.querySelector('.scroll__track_y .scroll__thumb') as HTMLElement).style.transform = `translateY(${thumbMoveOffsetY}px)`;
        }
        el.scrollTop = elScrollTop;
        el.scrollLeft = elScrollLeft;
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        document.body.style.userSelect = 'default';
        document.body.style.cursor = 'default';
      };
    };
  }
}

const mounted = (el: HTMLElement, binding: DirectiveBinding, userOptions?: ScrollBarOptions):void => { 
  const { arg, value } = binding;
  const isMobile = /(Android|iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
  const customGlobalOptions = userOptions || {};
  if (!isMobile) {
    const options = {
      ...customGlobalOptions,
      ...value,
      direction: arg
    };
    const scroll = new CustomScrollBar({
      el,
      options
    });
    scroll.init();
  }
};

const unmounted: DirectiveHook = (el: ScrollBarElement) => {
  el.$scroll && el.$scroll.destroy();
};

export const ScrollDirective: ObjectDirective = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => mounted(el, binding),
  unmounted,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted,
  install: (Vue: App, userOptions: ScrollBarOptions):void => {
    Vue.directive('scroll', {
      mounted: ((el, binding) => mounted(el, binding, userOptions)),
      unmounted,
      // @ts-ignore
      inserted: ((el, binding) => mounted(el, binding, userOptions)),
      unbind: unmounted
    });
  }
};

export default CustomScrollBar;