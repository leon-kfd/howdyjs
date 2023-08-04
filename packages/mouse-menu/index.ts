import { App, DirectiveBinding, createVNode, render, ComponentPublicInstance, ObjectDirective } from 'vue';
import { CustomMouseMenuOptions } from './types';
import MouseMenu from './mouse-menu.vue';
import { createClassDom } from '../shared';

MouseMenu.install = (app: App): void => {
  app.component(MouseMenu.name, MouseMenu);
};

function CustomMouseMenu (options: CustomMouseMenuOptions) {
  const className = '__mouse__menu__container';
  let container:HTMLElement;
  if (document.querySelector(`.${className}`)) {
    container = document.querySelector(`.${className}`) as HTMLElement;
  } else {
    container = createClassDom('div', className);
  }
  const vm = createVNode(MouseMenu, options);
  render(vm, container);
  document.body.appendChild(container);
  return vm.component?.proxy as ComponentPublicInstance<typeof MouseMenu>;
}

type ContextMenuListenFn = (e: MouseEvent) => void
type TouchListenFn = (e: TouchEvent) => void
type PreventCheckFn = (e?: TouchEvent, el?: HTMLElement) => boolean

let MouseMenuCtx: ComponentPublicInstance<typeof MouseMenu>;
let longPressTimer: number;
let longPressTouchStart: TouchListenFn;
let longPressTouchEnd: TouchListenFn;
function addLongPressListener (el: HTMLElement, fn: TouchListenFn, longPressDuration = 500, longPressPreventDefault?: PreventCheckFn | boolean) {
  longPressTouchStart = (e: TouchEvent) => {
    MouseMenuCtx && MouseMenuCtx.close();
    if (typeof longPressPreventDefault === 'function') {
      if (longPressPreventDefault(e, el)) {
        e.preventDefault();
      }
    } else if (typeof longPressPreventDefault === 'boolean') {
      if (longPressPreventDefault) {
        e.preventDefault();
      }
    }
    if (longPressTimer) clearTimeout(longPressTimer);
    longPressTimer = window.setTimeout(() => {
      fn(e);
    }, longPressDuration);
  };
  longPressTouchEnd = () => {
    clearTimeout(longPressTimer);
  };
  el.addEventListener('touchstart', longPressTouchStart);
  el.addEventListener('touchmove', longPressTouchEnd);
  el.addEventListener('touchend', longPressTouchEnd);
  el.addEventListener('touchcancel', longPressTouchEnd);
}
function removeLongPressListener (el: HTMLElement) {
  el.removeEventListener('touchstart', longPressTouchStart);
  el.removeEventListener('touchmove', longPressTouchEnd);
  el.removeEventListener('touchend', longPressTouchEnd);
  el.removeEventListener('touchcancel', longPressTouchEnd);
}

// 指令封装
let contextMenuEvent: ContextMenuListenFn;
let longPressEvent: TouchListenFn;
const mounted = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value } = binding;
  if (value.menuList.length > 0) {
    contextMenuEvent = (e: MouseEvent) => {
      if (typeof value.disabled === 'function' && value.disabled(value.params)) return;
      e.preventDefault();
      MouseMenuCtx = CustomMouseMenu({
        el,
        ...value
      });
      const { x, y } = e;
      MouseMenuCtx.show(x,y);
    };
    el.removeEventListener('contextmenu', contextMenuEvent);
    el.addEventListener('contextmenu', contextMenuEvent);
    if (value.useLongPressInMobile && 'ontouchstart' in window) {
      longPressEvent = (e: TouchEvent) => {
        if (typeof value.disabled === 'function' && value.disabled(value.params)) return;
        MouseMenuCtx = CustomMouseMenu({
          el,
          ...value
        });
        const { touches } = e;
        const { clientX, clientY } = touches[0];
        MouseMenuCtx.show(clientX, clientY);
        document.onmousedown = null;
        el.onmousedown = null;
        setTimeout(() => {
          document.onmousedown = () => MouseMenuCtx.close();
          el.onmousedown = () => MouseMenuCtx.close();
        }, 500);
      };
      removeLongPressListener(el);
      addLongPressListener(
        el, 
        longPressEvent, 
        value.longPressDuration || 500,
        value.longPressPreventDefault
      );
    } 
  } else {
    throw new Error('At least set one menu list!');
  }
};

const unmounted = (el: HTMLElement) => {
  el.removeEventListener('contextmenu', contextMenuEvent);
  if ('touchstart' in window) {
    removeLongPressListener(el);
  }
};

const MouseMenuDirective: ObjectDirective = {
  mounted,
  unmounted
};

export { MouseMenuDirective, CustomMouseMenu, MouseMenuCtx };
export default MouseMenu;