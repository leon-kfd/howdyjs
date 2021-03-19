import { DirectiveHook, App, DirectiveBinding } from 'vue';
import { CompatibleDirective } from '../shared';
export interface ToDragOptions {
  isAbsolute?: boolean,
  adsorbOffset: number,
  moveCursor?: boolean,
  adsorb?: number,
  transitionDuration?: number,
  transitionTimingFunction?: string,
  forbidBodyScroll?: boolean,
  parentSelector?: string
}

export type toDragEventString = 'todraginit' | 'todragstart' | 'todragmove' | 'todragend'
export interface toDragEvent extends Event {
  left?: number,
  top?: number,
  width?: number,
  height?: number,
  maxX?: number,
  maxY?: number
}


class ToDrag {
  private el: HTMLElement
  private parent: HTMLElement
  private options: ToDragOptions
  private scrollbarWidth: number
  private isTouch: boolean
  private isDrag: boolean
  private left = 0
  private top = 0
  private startX = 0
  private startY = 0
  private width = 0
  private height = 0
  private maxX = 0
  private maxY = 0
  private getScrollbarWidth = () => {
    const el = document.createElement('div');
    el.style.cssText = 'width:100px;height:100px;overflow-y:scroll';
    document.body.appendChild(el);
    const scrollbarWidth = el.offsetWidth - el.clientWidth;
    document.body.removeChild(el);
    return scrollbarWidth;
  }
  private setBetween = (num: number, min: number, max:number) => {
    if (num < min) return min;
    if (num > max) return max;
    return num;
  }
  

  constructor({ el, options } : { el: string | HTMLElement, options?: ToDragOptions }) {
    this.el = el instanceof HTMLElement ? el : document.querySelector(el) as HTMLElement;
    this.scrollbarWidth = this.getScrollbarWidth();
    this.isTouch = 'ontouchstart' in document.documentElement;
    this.isDrag = false;
    this.options = {
      moveCursor: true,
      adsorb: 0,
      adsorbOffset: 0,
      transitionDuration: 400,
      transitionTimingFunction: 'ease-in-out',
      forbidBodyScroll: true,
      isAbsolute: false,
      ...options
    };
    this.parent = (this.options.parentSelector && document.querySelector(this.options.parentSelector)) || this.el.parentNode as HTMLElement;
    if (this.options.transitionDuration) {
      this.options.transitionDuration = this.options.transitionDuration / 1000;
    }

    // init
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
    this.moveEvent = this.moveEvent.bind(this);
    this.endEvent = this.endEvent.bind(this);
    this.init();
  }

  init () {
    if (this.isTouch) {
      this.el.addEventListener('touchstart', this.handleTouchStart);
    } else {
      this.el.addEventListener('mousedown', this.handleMousedown);
    }
    if (this.options.moveCursor) {
      this.el.style.cursor = 'move';
    }
    this.setPosition();
    if (!this.options.isAbsolute && this.options.adsorb) {
      this.handleAdsorb();
    }
    setTimeout(() => {
      this.emitEvent('todraginit');
    });
  }

  handleMousedown (e: MouseEvent) {
    const { x, y } = e;
    this.setStartInfo(x, y);
    document.addEventListener('mousemove', this.moveEvent);
    document.addEventListener('mouseup', this.endEvent);
  }

  handleTouchStart (e: TouchEvent | MouseEvent) {
    const x = this.isTouch ? (e as TouchEvent).changedTouches[0].clientX : (e as MouseEvent).x;
    const y = this.isTouch ? (e as TouchEvent).changedTouches[0].clientY : (e as MouseEvent).y;
    this.setStartInfo(x, y);
    document.addEventListener('touchmove', this.moveEvent, { passive: false });
    document.addEventListener('touchend', this.endEvent);
  }

  setPosition() {
    const { left, top, width, height } = this.el.getBoundingClientRect();
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    if (!this.options.isAbsolute) {
      this.maxX = document.body.scrollWidth > window.innerWidth ? window.innerWidth - this.width - this.scrollbarWidth : window.innerWidth - this.width;
      this.maxY = document.body.scrollHeight > window.innerHeight ? window.innerHeight - this.height - this.scrollbarWidth : window.innerHeight - this.height;
    } else {
      this.maxX = this.parent.offsetWidth - this.width;
      this.maxY = this.parent.offsetHeight - this.height;
    }
  }

  setStartInfo (x: number, y: number) {
    this.setPosition();
    this.startX = x - this.left;
    this.startY = y - this.top;
    this.isDrag = true;
    this.el.style.transition = '';
    document.body.style.userSelect = 'none';
    if (this.options.forbidBodyScroll) {
      document.body.style.overflow = 'hidden';
    }
    this.emitEvent('todragstart');
  }

  moveEvent (e: TouchEvent | MouseEvent) {
    if (!this.isDrag) {
      return;
    }
    e.preventDefault();
    let dragX, dragY;
    const x = this.isTouch ? (e as TouchEvent).changedTouches[0].clientX : (e as MouseEvent).x;
    const y = this.isTouch ? (e as TouchEvent).changedTouches[0].clientY : (e as MouseEvent).y;
    if (!this.options.isAbsolute) {
      dragX = x - this.startX;
      dragY = y - this.startY;
    } else {
      const parentDomRect = this.parent.getClientRects()[0];
      dragX = x - parentDomRect.x - this.startX;
      dragY = y - parentDomRect.y - this.startY;
    }
    this.left = this.setBetween(dragX, 0, this.maxX);
    this.top = this.setBetween(dragY, 0, this.maxY);
    this.el.style.left = this.left + 'px';
    this.el.style.top = this.top + 'px';
    this.emitEvent('todragmove');
  }

  endEvent () {
    this.isDrag = false;
    document.removeEventListener('mousemove', this.moveEvent);
    document.removeEventListener('mouseup', this.endEvent);
    document.removeEventListener('touchmove', this.moveEvent);
    document.removeEventListener('touchend', this.endEvent);
    document.body.style.userSelect = 'auto';
    if (this.options.forbidBodyScroll) {
      document.body.style.overflow = 'visible';
    }
    this.handleAdsorb();
    this.emitEvent('todragend');
  }


  handleAdsorb () {
    if (this.options.isAbsolute) return;
    const endPoint = [this.left + this.width / 2, this.top + this.height / 2];
    const maxPoint = [window.innerWidth, window.innerHeight];
    this.el.style.transition = `left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`;
    if (this.options.adsorb === 1) {
      // 左右吸附
      if (endPoint[0] <= window.innerWidth / 2) {
        // left
        this.left = this.options.adsorbOffset;
      } else {
        // right
        this.left = this.maxX - this.options.adsorbOffset;
      }
    } else if (this.options.adsorb === 2) {
      // 四方向吸附
      const k1 = maxPoint[1] / maxPoint[0];
      const k2 = maxPoint[1] / -maxPoint[0];
      const k3 = endPoint[1] / endPoint[0];
      const k4 = endPoint[1] / (endPoint[0] - maxPoint[0]);
      if (k1 >= k3 && k2 < k4) {
        // top
        this.top = this.options.adsorbOffset;
      } else if (k1 >= k3 && k2 >= k4) {
        // right
        this.left = this.maxX - this.options.adsorbOffset;
      } else if (k1 < k3 && k2 >= k4) {
        // bottom
        this.top = this.maxY - this.options.adsorbOffset;
      } else {
        // left
        this.left = this.options.adsorbOffset;
      }
      if (this.options.adsorbOffset) {
        if (this.top === 0) {
          this.top = this.options.adsorbOffset;
        }
        if (this.top === this.maxY) {
          this.top = this.maxY - this.options.adsorbOffset;
        }
        if (this.left === 0) {
          this.left = this.options.adsorbOffset;
        }
        if (this.left === this.maxX) {
          this.left = this.maxX - this.options.adsorbOffset;
        }
      }
    }
    console.log('this.left', this.left);
    this.el.style.left = this.left + 'px';
    this.el.style.top = this.top + 'px';
  }

  emitEvent (type: toDragEventString) {
    const event = document.createEvent('HTMLEvents') as toDragEvent;
    event.initEvent(type, false, false);
    const { left, top, width, height, maxX, maxY } = this;
    event['left'] = left;
    event['top'] = top;
    event['width'] = width;
    event['height'] = height;
    event['maxX'] = maxX;
    event['maxY'] = maxY;
    this.el.dispatchEvent(event);
  }

  destroy () {
    if (this.isTouch) {
      this.el.removeEventListener('touchstart', this.handleTouchStart);
    } else {
      this.el.removeEventListener('mousedown', this.handleMousedown);
    }
  }
}

const mounted = (el: HTMLElement, binding: DirectiveBinding<any>, userOptions?: ToDragOptions):void => { 
  const { value }:{ value: ToDragOptions } = binding;
  const customGlobalOptions = userOptions || {};
  const options = {
    ...customGlobalOptions,
    ...value
  };
  (el as any).$toDarg = new ToDrag({
    el,
    options
  });
};

const unmounted: DirectiveHook = (el: any) => {
  el.$toDarg && el.$toDarg.destroy();
};

export const ToDragDirective: CompatibleDirective = {
  install: (Vue: App, userOptions: ToDragOptions):void => {
    Vue.directive('to-drag', {
      mounted: ((el, binding) => mounted(el, binding, userOptions)),
      unmounted,
      // @ts-ignore
      inserted: ((el, binding) => mounted(el, binding, userOptions)),
      unbind: unmounted
    });
  },
  mounted: (el: HTMLElement, binding: DirectiveBinding<any>) => mounted(el, binding),
  unmounted,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted
};

export default ToDrag;
