import Vue from 'vue'
import MouseMenu from './mouse-menu.vue'
import { createDom } from './utils/helper'

const inserted = (el, binding, userOptions) => {
  const { value } = binding
  const options = {
    width: 200,
    menuList: [],
    hasIcon: false,
    IconType: 'font-icon',
    ...value
  }
  const menuWrapperCss = {
    ...value.menuWrapperCss
  }
  const menuItemCss = {
    arrowSize: '10px',
    ...value.menuItemCss
  }
  if (options.menuList.length > 0) {
    el.onmousedown = function (e) {
      e.stopPropagation()
      if (e.button === 2) {
        document.addEventListener('contextmenu', contextmenuEvent)
      } else {
        if (document.querySelector('.__menu__wrapper')) {
          document.querySelector('.__menu__wrapper').style.visibility = 'hidden'
        }
      }
    }
    document.onmousedown = function (e) {
      document.removeEventListener('contextmenu', contextmenuEvent)
      if (document.querySelector('.__menu__wrapper')) {
        document.querySelector('.__menu__wrapper').style.visibility = 'hidden'
      }
    }
    const menu = document.querySelector('.__menu__wrapper') || createDom('div', '__menu__wrapper')
    document.body.appendChild(menu)
    const menuVue = new Vue({
      el: menu,
      components: {
        MouseMenu
      },
      render (createElement) {
        return createElement('mouse-menu', {
          props: {
            menuHiddenFn: options.hidden,
            menuWidth: options.width,
            menuList: options.menuList,
            hasIcon: options.hasIcon,
            IconType: options.IconType,
            menuWrapperCss,
            menuItemCss,
            activeEl: el
          },
          ref: 'MouseMenu'
        })
      },
      methods: {
        handleShowMenu (x, y) {
          this.$refs.MouseMenu.handleShowMenu(x, y)
        }
      }
    })
    const contextmenuEvent = function (e) {
      e.preventDefault()
      const { x, y } = e
      menuVue.handleShowMenu(x, y)
    }
  } else {
    throw new Error('At least set one menu list!')
  }
}
export default {
  inserted,
  install (Vue, userOptions) {
    Vue.directive('mouse-menu', {
      inserted
    })
  }
}
