import { DirectiveHook, App, DirectiveBinding, ObjectDirective } from 'vue';
import ToDrag, { ToDragEvent as ToControlEvent } from '@howdyjs/to-drag';
export type ControlOptions = {
  moveCursor?: boolean,
  forbidBodyScroll?: boolean,
  parentSelector?: string,
  disabled?: () => boolean,
  arrowOptions?: ArrowOptions,
  isAbsolute?: boolean
}

export type ArrowOptions = {
  size?: number,
  lineWidth?: number,
  lineColor?: string,
  padding?: number;
  background?: string;
}

export type ToControlEventString = 'tocontrolstart' | 'tocontrolmove' | 'tocontrolend'
export { ToControlEvent };
class ToControl extends ToDrag {
  arrowCtx: HTMLElement | null = null
  private controlOptions: ControlOptions
  constructor({ el, options }: { el: string | HTMLElement, options?: ControlOptions }) {
    super({
      el,
      options: {
        adsorb: 0,
        adsorbOffset: 0,
        isAbsolute: false,
        positionMode: 1,
        ...options
      }
    });
    this.controlOptions = options || {};
    this.initControl();
  }

  initControl() {
    const { position } = getComputedStyle(this.el);
    if (!['fixed', 'absolute'].includes(position)) {
      throw new Error('Control just work in the element which position is fixed or absolute.');
    }
    this.arrowCtx = this.createResizeArrow(this.controlOptions?.arrowOptions);
    this.el.appendChild(this.arrowCtx);
  }

  updateArrow() {
    if (this.arrowCtx) {
      this.el.removeChild(this.arrowCtx);
    }
    this.arrowCtx = this.createResizeArrow(this.controlOptions?.arrowOptions);
    this.el.appendChild(this.arrowCtx);
  }

  arrowStartX = 0
  arrowStartY = 0
  elWidth = 0
  elHeight = 0
  resizeFlag = false
  arrowMouseDownEvent = (e: MouseEvent | TouchEvent) => {
    if (typeof this.controlOptions.disabled === 'function' && this.controlOptions.disabled()) {
      return;
    }
    const x = this.isTouch ? (e as TouchEvent).changedTouches[0].clientX : (e as MouseEvent).x;
    const y = this.isTouch ? (e as TouchEvent).changedTouches[0].clientY : (e as MouseEvent).y;
    const { width, height, left, top } = this.el.getBoundingClientRect();
    const { width: parentWidth, height: parentHeight } = this.parent.getBoundingClientRect();
    this.arrowStartX = x;
    this.arrowStartY = y;
    this.elWidth = width;
    this.elHeight = height;
    this.resizeFlag = true;
    let maxWidth: number, maxHeight: number;
    if (this.controlOptions.isAbsolute) {
      maxWidth = parentWidth - this.el.offsetLeft - this.borderInfo[1] - this.borderInfo[3];
      maxHeight = parentHeight - this.el.offsetTop - this.borderInfo[0] - this.borderInfo[2];
    } else {
      maxWidth = window.innerWidth - left;
      maxHeight = window.innerHeight - top;
    }
    setTimeout(() => {
      this.isDrag = false;
    });
    this.el.style.left = `${this.controlOptions.isAbsolute ? this.el.offsetLeft : left}px`;
    this.el.style.top = `${this.controlOptions.isAbsolute ? this.el.offsetTop : top}px`;
    this.el.style.right = 'auto';
    this.el.style.bottom = 'auto';
    this.emitControlEvent('tocontrolstart');
    if (this.isTouch) {
      // 移动端
      document.ontouchmove = (e: TouchEvent) => {
        if (!this.resizeFlag || !e.changedTouches) return;
        const { clientX: x, clientY: y } = e.changedTouches[0];
        this.el.style.width = `${Math.min(this.elWidth + x - this.arrowStartX, maxWidth)}px`;
        this.el.style.height = `${Math.min(this.elHeight + y - this.arrowStartY, maxHeight)}px`;
        this.emitControlEvent('tocontrolmove');
      };
      document.ontouchend = () => {
        this.setPosition();
        this.resizeFlag = false;
        document.ontouchmove = null;
        document.ontouchend = null;
        this.emitControlEvent('tocontrolend');
      };
    } else {
      // PC端
      document.onmousemove = (e: MouseEvent) => {
        if (!this.resizeFlag) return;
        const { x, y } = e;
        this.el.style.width = `${Math.min(this.elWidth + x - this.arrowStartX, maxWidth)}px`;
        this.el.style.height = `${Math.min(this.elHeight + y - this.arrowStartY, maxHeight)}px`;
        this.emitControlEvent('tocontrolmove');
      };
      document.onmouseup = () => {
        this.setPosition();
        this.resizeFlag = false;
        document.onmousemove = null;
        document.onmouseup = null;
        this.emitControlEvent('tocontrolend');
      };
    }
  }

  private createResizeArrow(arrowOptions?: ArrowOptions) {
    const isDisabled = typeof this.controlOptions.disabled === 'function' && this.controlOptions.disabled();
    const options = {
      size: 8,
      lineWidth: 2,
      lineColor: '#9a9a9a',
      padding: 2,
      ...arrowOptions
    };
    const arrow = document.createElement('div') as HTMLElement;
    const cssText = `
      position: absolute;
      right: ${options.padding}px; 
      bottom: ${options.padding}px;
      width: ${options.size}px;
      height: ${options.size}px;
      border-bottom: ${options.lineWidth}px solid ${options.lineColor};
      border-right: ${options.lineWidth}px solid ${options.lineColor};
      cursor: se-resize;
      background: ${options.background || 'none'};
      display: ${isDisabled ? 'none' : 'block'}
    `;
    arrow.className = 'to-control-arrow';
    arrow.style.cssText = cssText;
    if (this.isTouch) {
      arrow.addEventListener('touchstart', this.arrowMouseDownEvent);
    } else {
      arrow.addEventListener('mousedown', this.arrowMouseDownEvent);
    }
    return arrow;
  }

  destroyControl() {
    this.destroy();
    if (this.isTouch) {
      this.arrowCtx?.removeEventListener('touchstart', this.arrowMouseDownEvent);
    } else {
      this.arrowCtx?.removeEventListener('mousedown', this.arrowMouseDownEvent);
    }
  }

  emitControlEvent(type: ToControlEventString) {
    const event = document.createEvent('HTMLEvents') as ToControlEvent;
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
    this.el.dispatchEvent(event);
  }
}

const mounted = (el: HTMLElement, binding: DirectiveBinding, userOptions?: ControlOptions): void => {
  const { value }: { value: ControlOptions } = binding;
  const customGlobalOptions = userOptions || {};
  const options = {
    ...customGlobalOptions,
    ...value
  };
  (el as any).$toControl = new ToControl({
    el,
    options
  });
};

const beforeUpdate: DirectiveHook = (el: any) => {
  el.$toControl && el.$toControl.updateArrow();
};

const unmounted: DirectiveHook = (el: any) => {
  el.$toControl && el.$toControl.destroy();
};

export const ToControlDirective: ObjectDirective = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => mounted(el, binding),
  unmounted,
  beforeUpdate,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted,
  update: beforeUpdate,
  install: (Vue: App, userOptions: ControlOptions): void => {
    Vue.directive('to-control', {
      mounted: ((el, binding) => mounted(el, binding, userOptions)),
      unmounted,
      beforeUpdate,
      // @ts-ignore
      inserted: ((el, binding) => mounted(el, binding, userOptions)),
      unbind: unmounted,
      update: beforeUpdate,
    });
  }
};

export default ToControl;
