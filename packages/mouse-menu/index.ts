import { App, DirectiveBinding, h, render, ComponentPublicInstance } from 'vue';
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
  const vm = h(MouseMenu, options);
  render(vm, container);
  document.body.appendChild(container);
  return vm.component?.proxy as ComponentPublicInstance<typeof MouseMenu>;
}

// 指令封装
let mouseDownEvent: (e: MouseEvent) => void;
const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const { value } = binding;
  if (value.menuList.length > 0) {
    mouseDownEvent = (e: MouseEvent) => {
      const MouseMenuCtx = CustomMouseMenu({
        el,
        ...value
      });
      if (e.button === 2) {
        e.stopPropagation();
        document.oncontextmenu = (e: MouseEvent) => {
          e.preventDefault();
          const { x, y } = e;
          MouseMenuCtx.show(x,y);
        };
        document.onmousedown = () => {
          document.oncontextmenu = null;
          MouseMenuCtx.close();
        };
      } else {
        MouseMenuCtx.close();
      }
    };
    el.removeEventListener('mousedown', mouseDownEvent);
    el.addEventListener('mousedown', mouseDownEvent);
  } else {
    throw new Error('At least set one menu list!');
  }
};

const unmounted = (el: HTMLElement) => {
  el.removeEventListener('mousedown', mouseDownEvent);
};

const MouseMenuDirective = {
  mounted,
  unmounted
};

export { MouseMenuDirective, CustomMouseMenu };
export default MouseMenu;