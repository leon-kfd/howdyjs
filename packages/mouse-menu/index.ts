import { App, createApp, DirectiveBinding } from 'vue';
import MouseMenu from './mouse-menu.vue';
import { createClassDom } from '../shared';

MouseMenu.install = (app: App): void => {
  app.component(MouseMenu.name, MouseMenu);
};

let menuApp: App;
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
    if (!document.querySelector('.__mouse__menu__directive')) {
      const menu = createClassDom('div', '__mouse__menu__directive');
      document.body.append(menu);
    }
    menuApp = createApp(MouseMenu, {
      menuHiddenFn: options.hidden,
      menuWidth: options.width,
      menuList: options.menuList,
      hasIcon: options.hasIcon,
      iconType: options.iconType,
      params: options.params,
      menuWrapperCss,
      menuItemCss,
      activeEl: el
    });
    menuApp.mount('.__mouse__menu__directive');
  } else {
    throw new Error('At least set one menu list!');
  }
};

const unmounted = () => {
  menuApp && menuApp.unmount('.__mouse__menu__directive');
};

const MouseMenuDirective = {
  mounted,
  unmounted
};

export { MouseMenuDirective };
export default MouseMenu;