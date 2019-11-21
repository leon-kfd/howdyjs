import { createDom } from './utils/helper'
import Vue from 'vue'
import MouseMenu from './mouse-menu.vue'
export default {
  inserted: function (el, binding) {
    const { value } = binding
    const options = {
      width: 200,
      menuList: [],
      hasIcon: false,
      IconType: 'font-icon',
      ...value
    }
    const menuWrapperCss = {
      'background': '#c8f2f0',
      'boxShadow': '0 1px 5px #888',
      'padding': '5px 0',
      'borderRadius': '4px',
      ...value.menuWrapperCss
    }
    const menuItemCss = {
      'height': '30px',
      'padding': '0 10px',
      iconSize: '20px',
      iconFontSize: null, // 字体图标时可用
      iconColor: '#484852',
      labelColor: '#484852',
      labelFontSize: '14px',
      tipsColor: '#889',
      tipsFontSize: '12px',
      arrowColor: '#484852',
      arrowSize: '10px',
      hoverBackground: 'rgba(255, 255, 255, 0.8)',
      hoverLabelColor: null,
      hoverTipsColor: null,
      hoverArrowColor: null,
      ...value.menuItemCss
    }
    if (options.menuList.length > 0) {
      el.onmousedown = function (e) {
        e.stopPropagation()
        if (e.button === 2) {
          document.addEventListener('contextmenu', contextmenuEvent)
        } else {
          document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
        }
      }
      document.onmousedown = function (e) {
        document.removeEventListener('contextmenu', contextmenuEvent)
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
      const menu = createDom('div', '__menu__wrapper')
      document.body.appendChild(menu)
      const menuVue = new Vue({
        el: menu,
        data () {
          return {
            menuHiddenFn: options.hidden,
            menuWidth: options.width,
            menuList: options.menuList,
            hasIcon: options.hasIcon,
            IconType: options.IconType,
            menuWrapperCss,
            menuItemCss
          }
        },
        components: {
          MouseMenu
        },
        render (createElement) {
          return createElement('mouse-menu', {
            props: {
              menuHiddenFn: this.menuHiddenFn,
              menuWidth: this.menuWidth,
              menuList: this.menuList,
              hasIcon: this.hasIcon,
              IconType: this.IconType,
              menuWrapperCss: this.menuWrapperCss,
              menuItemCss: this.menuItemCss
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
}
