import { DirectiveHook, App, DirectiveBinding, ObjectDirective } from 'vue';

function getComputedStyleList (el: HTMLElement, names: string[], formatToNumber = false) {
  const results: Record<string, string | number> = {};
  const styles = window.getComputedStyle(el);
  names.map(name => {
    let result: string | number = styles[name as any];
    if (formatToNumber) {
      const match = result.match(/\d+/);
      if (match) result = ~~match[0];
    }
    results[name] = result;
  });
  return results;
}

export interface ToDragOptions {
  isAbsolute?: boolean,
  adsorbOffset: number,
  moveCursor?: boolean,
  adsorb?: number,
  transitionDuration?: number,
  transitionTimingFunction?: string,
  forbidBodyScroll?: boolean,
  parentSelector?: string,
  positionMode?: 1 | 2 | 3 | 4,
  disabled?: () => boolean,
  needComputeBorder?: boolean
}

export type ToDragEventString = 'todraginit' | 'todragstart' | 'todragmove' | 'todragend'
export interface ToDragEvent extends Event {
  left?: number,
  top?: number,
  width?: number,
  height?: number,
  maxX?: number,
  maxY?: number,
  right?: number,
  bottom?: number
}


export class ToDrag {
  el: HTMLElement
  isTouch: boolean
  isDrag: boolean
  parent: HTMLElement
  left = 0
  top = 0
  right = 0
  bottom = 0
  width = 0
  height = 0
  maxX = 0
  maxY = 0
  needComputeAdsorb = true // 是否需要计算吸附, 只有产生了Move才需要计算
  private options: ToDragOptions
  private scrollbarWidth: number
  private startX = 0
  private startY = 0
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
      positionMode: 1,
      needComputeBorder: true,
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
    this.setLimit();
    this.handleAdsorb();
    this.handlePositionMode();
    setTimeout(() => {
      this.emitEvent('todraginit');
    });
  }

  handleMousedown (e: MouseEvent) {
    if (typeof this.options.disabled === 'function' && this.options.disabled()) {
      return;
    }
    const { x, y } = e;
    this.setStartInfo(x, y, e);
    document.addEventListener('mousemove', this.moveEvent);
    document.addEventListener('mouseup', this.endEvent);
  }

  handleTouchStart (e: TouchEvent | MouseEvent) {
    if (typeof this.options.disabled === 'function' && this.options.disabled()) {
      return;
    }
    const x = this.isTouch ? (e as TouchEvent).changedTouches[0].clientX : (e as MouseEvent).x;
    const y = this.isTouch ? (e as TouchEvent).changedTouches[0].clientY : (e as MouseEvent).y;
    this.setStartInfo(x, y, e);
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

  setStartInfo (x: number, y: number, e?: TouchEvent | MouseEvent) {
    this.needComputeAdsorb = false
    this.setPosition();
    this.setLimit();
    this.startX = x - this.left;
    this.startY = y - this.top;
    this.isDrag = true;
    this.el.style.transition = '';
    document.body.style.userSelect = 'none';
    if (this.options.forbidBodyScroll) {
      document.body.style.overflow = 'hidden';
    }
    this.emitEvent('todragstart', e);
  }

  moveEvent (e: TouchEvent | MouseEvent) {
    if (!this.isDrag) {
      return;
    }
    e.preventDefault();
    this.needComputeAdsorb = true
    let dragX, dragY;
    const x = this.isTouch ? (e as TouchEvent).changedTouches[0].clientX : (e as MouseEvent).x;
    const y = this.isTouch ? (e as TouchEvent).changedTouches[0].clientY : (e as MouseEvent).y;
    if (!this.options.isAbsolute) {
      dragX = x - this.startX;
      dragY = y - this.startY;
    } else {
      const parentDomRect = this.parent.getClientRects()[0];
      dragX = x - parentDomRect.x - this.startX - this.borderInfo[1];
      dragY = y - parentDomRect.y - this.startY - this.borderInfo[2];
    }
    this.left = this.setBetween(dragX, 0, this.maxX - this.borderInfo[1] - this.borderInfo[3]);
    this.top = this.setBetween(dragY, 0, this.maxY - this.borderInfo[2] - this.borderInfo[0]);
    this.el.style.left = this.left + 'px';
    this.el.style.top = this.top + 'px';
    this.emitEvent('todragmove', e);
  }

  endEvent (e: TouchEvent | MouseEvent) {
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
    this.handlePositionMode();
    this.emitEvent('todragend', e);
  }

  handleAdsorb () {
    // if (this.options.isAbsolute) return;
    if (!this.needComputeAdsorb) return
    const endPoint = [this.left + this.width / 2, this.top + this.height / 2];
    let maxX = 0
    let maxY = 0
    if (this.options.isAbsolute) {
      const parentDomRect = this.parent.getClientRects()[0];
      maxX = parentDomRect.width
      maxY = parentDomRect.height
    } else {
      maxX = window.innerWidth
      maxY = window.innerHeight
    }
    const maxPoint = [maxX, maxY]
    this.el.style.transition = `left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`;
    if (this.options.adsorb === 1) {
      // 左右吸附
      if (endPoint[0] <= maxX / 2) {
        // left
        this.left = this.options.adsorbOffset;
      } else {
        // right
        this.left = this.maxX - this.options.adsorbOffset - this.borderInfo[1] - this.borderInfo[3];
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
        this.left = this.maxX - this.options.adsorbOffset - this.borderInfo[1] - this.borderInfo[3];
      } else if (k1 < k3 && k2 >= k4) {
        // bottom
        this.top = this.maxY - this.options.adsorbOffset - this.borderInfo[2] - this.borderInfo[0];
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
    this.el.style.left = this.left + 'px';
    this.el.style.top = this.top + 'px';
  }

  handlePositionMode() {
    if (this.options.adsorb) return;
    const left = this.options.isAbsolute ? this.el.offsetLeft : this.left;
    const top = this.options.isAbsolute ? this.el.offsetTop : this.top;
    this.right = this.maxX - left - this.borderInfo[1] - this.borderInfo[3];
    this.bottom = this.maxY - top - this.borderInfo[2] - this.borderInfo[0]; 
    if (this.options.positionMode === 2) {
      this.el.style.left = 'auto';
      this.el.style.right = this.right + 'px';
    } else if (this.options.positionMode === 3) {
      this.el.style.top = 'auto';
      this.el.style.bottom = this.bottom + 'px';
    } else if (this.options.positionMode === 4) {
      this.el.style.left = 'auto';
      this.el.style.top = 'auto';
      this.el.style.right = this.right + 'px';
      this.el.style.bottom = this.bottom + 'px';
    }
  }

  emitEvent (type: ToDragEventString, e?: TouchEvent | MouseEvent) {
    const event = document.createEvent('HTMLEvents') as ToDragEvent;
    event.initEvent(type, false, false);
    const { left, top, right, bottom, width, height, maxX, maxY } = this;
    event['left'] = left;
    event['top'] = top;
    event['width'] = width;
    event['height'] = height;
    event['maxX'] = maxX;
    event['maxY'] = maxY;
    event['right'] = right;
    event['bottom'] = bottom;
    if (e) {
      event['sourceEvent'] = e;
    }
    this.el.dispatchEvent(event);
  }

  destroy () {
    if (this.isTouch) {
      this.el.removeEventListener('touchstart', this.handleTouchStart);
    } else {
      this.el.removeEventListener('mousedown', this.handleMousedown);
    }
  }

  // absolute limit add border, padding size control
  borderInfo = [0, 0, 0, 0] // [top, right, bottom, left]
  private setLimit() {
    if (!this.options.isAbsolute || !this.options.needComputeBorder) return;
    const position = ['top', 'right', 'bottom', 'left'];
    const borderInfo = getComputedStyleList(this.parent, [
      ...position.map(p => `border-${p}-width`),
    ], true) as Record<string, number>;
    this.borderInfo = position.map(p => borderInfo[`border-${p}-width`]);
  }
}

const mounted = (el: HTMLElement, binding: DirectiveBinding, userOptions?: ToDragOptions):void => { 
  const { value }:{ value: ToDragOptions } = binding;
  const customGlobalOptions = userOptions || {};
  const options = {
    ...customGlobalOptions,
    ...value
  };
  (el as any).$toDrag = new ToDrag({
    el,
    options
  });
};

const unmounted: DirectiveHook = (el: any) => {
  el.$toDrag && el.$toDrag.destroy();
};

export const ToDragDirective: ObjectDirective = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => mounted(el, binding),
  unmounted,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted,
  install: (Vue: App, userOptions: ToDragOptions):void => {
    Vue.directive('to-drag', {
      mounted: ((el, binding) => mounted(el, binding, userOptions)),
      unmounted,
      // @ts-ignore
      inserted: ((el, binding) => mounted(el, binding, userOptions)),
      unbind: unmounted
    });
  }
};

export default ToDrag;
