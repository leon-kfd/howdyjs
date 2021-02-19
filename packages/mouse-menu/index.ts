import { App, createApp, DirectiveBinding } from 'vue';
import MouseMenu from './mouse-menu.vue';
import { createClassDom } from '../shared';

MouseMenu.install = (app: App): void => {
  app.component(MouseMenu.name, MouseMenu);
};

// 指令封装
const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const { value } = binding;
  const options = {
    width: 200,
    menuList: [],
    hasIcon: false,
    IconType: 'font-icon',
    ...value
  };
  const menuWrapperCss = {
    ...value.menuWrapperCss
  };
  const menuItemCss = {
    arrowSize: '10px',
    ...value.menuItemCss
  };
  if (options.menuList.length > 0) {
    const menu = document.querySelector('.__menu__wrapper') || createClassDom('div', '__menu__wrapper');
    document.body.appendChild(menu);
    const menuVue = createApp(MouseMenu, {
      menuHiddenFn: options.hidden,
      menuWidth: options.width,
      menuList: options.menuList,
      hasIcon: options.hasIcon,
      IconType: options.IconType,
      menuWrapperCss,
      menuItemCss,
      activeEl: el
    }) as any;
    menuVue.mount(menu);
    const contextmenuEvent = function (e: any) {
      e.preventDefault();
      const { x, y } = e;
      menuVue.show(x, y);
    };
    el.onmousedown = function (e) {
      e.stopPropagation();
      if (e.button === 2) {
        document.addEventListener('contextmenu', contextmenuEvent);
      } else {
        menuVue.close();
      }
    };
    document.onmousedown = function () {
      document.removeEventListener('contextmenu', contextmenuEvent);
      menuVue.close();
    };
  } else {
    throw new Error('At least set one menu list!');
  }
};

const MouseMenuDirective = {
  mounted
};

export { MouseMenuDirective };
export default MouseMenu;