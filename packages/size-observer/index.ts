import ResizeObserver from 'resize-observer-polyfill';
import { App, DirectiveHook, DirectiveBinding, ObjectDirective } from 'vue';
interface DOMRectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void
}

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

export interface SizeObserverElement extends HTMLElement {
  $sizeObserver?: SizeObserver
}

export interface SizeObserverOptions {
  wait?: number,
  immediate?: boolean
}

export interface SizeObserverEvent extends Event {
  contentRect: DOMRectReadOnly
}

class SizeObserver {
  private el: SizeObserverElement
  private options: SizeObserverOptions
  private timer: null | number
  private instance?: null | ResizeObserver
  constructor({ el, options } : {el: string | HTMLElement, options?: SizeObserverOptions }) {
    if (el instanceof HTMLElement) {
      this.el = el;
    } else {
      this.el = document.querySelector(el) as HTMLElement;
    }
    this.options = {
      wait: 0,
      immediate: true,
      ...options
    };
    this.timer = null;
    this.el.$sizeObserver = this;
  }


  init () {
    let firstFlag = this.options.immediate;
    const sizeChange = document.createEvent('HTMLEvents') as SizeObserverEvent;
    sizeChange.initEvent('sizechange', false, false);
    const callback: ResizeObserverCallback = (e)  => {
      if (!firstFlag) {
        firstFlag = true;
        return;
      }
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = window.setTimeout(() => {
        const { contentRect } = e && e[0];
        sizeChange.contentRect = contentRect;
        this.el.dispatchEvent(sizeChange);
      }, this.options.wait);
    };
    this.instance = new ResizeObserver(callback);
    this.instance.observe(this.el);
  }

  destroy () {
    this.instance?.unobserve(this.el);
  }
}

const mounted = (el: HTMLElement, binding: DirectiveBinding, userOptions?:SizeObserverOptions):void => {
  const { value } = binding;
  const customGlobalOptions = userOptions || {};
  const options: SizeObserverOptions = {
    ...customGlobalOptions,
    ...value
  };
  const resizeObserve = new SizeObserver({ el, options });
  resizeObserve.init();
};
const unmounted: DirectiveHook = (el: SizeObserverElement) => {
  el.$sizeObserver && el.$sizeObserver.destroy();
};

export const SizeObserverDirective: ObjectDirective = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => mounted(el, binding),
  unmounted,
  // @ts-ignore
  inserted: (el, binding) => mounted(el, binding),
  unbind: unmounted,
  install: (Vue: App, userOptions: SizeObserverOptions):void => {
    Vue.directive('SizeObserver', {
      mounted: (el, binding) => mounted(el, binding, userOptions),
      unmounted,
      // @ts-ignore
      inserted: (el, binding) => mounted(el, binding, userOptions),
      unbind: unmounted
    });
  }
};

export default SizeObserver;