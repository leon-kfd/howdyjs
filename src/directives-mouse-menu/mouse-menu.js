import { createDom } from './utils/dom'
import Vue from 'vue'
import MouseMenu from './mouse-menu.vue'
export default {
  inserted: function (el, binding) {
    const { value } = binding
    const options = {
      width: 200,
      menuList: [],
      hasIcon: false,
      ...value
    }
    const menuWrapperCss = {
      'width': '200px',
      'background': '#c8f2f0',
      'box-shadow': '0 1px 5px #888',
      'padding': '5px 0',
      'border-radius': '4px',
      ...value.menuWrapperCss
    }
    const menuItemCss = {
      'height': '30px',
      'padding': '0 10px',
      iconSize: '20px',
      labelColor: '#484852',
      labelFontSize: '14px',
      tipsColor: '#889',
      tipsSize: '12px',
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
            menuList: options.menuList,
            hasIcon: options.hasIcon,
            clickDomEl: null,
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
              menuList: this.menuList,
              hasIcon: this.hasIcon,
              clickDomEl: this.clickDomEl,
              menuWrapperCss: this.menuWrapperCss,
              menuItemCss: this.menuItemCss
            }
          })
        }
      })
      const contextmenuEvent = function (e) {
        e.preventDefault()
        const { x, y } = e
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window
        const {
          width: menuWidth
        } = options
        menuVue.clickDomEl = document.elementFromPoint(x - 1, y - 1)
        let menu = document.querySelector('.__menu__wrapper')
        let menuHeight = menu.offsetHeight
        let menuLeft = x + menuWidth + 1 > windowWidth ? windowWidth - menuWidth - 5 : x + 1
        let menuTop = y + menuHeight + 1 > windowHeight ? windowHeight - menuHeight - 5 : y + 1
        menu.style.top = `${menuTop}px`
        menu.style.left = `${menuLeft}px`
        menu.style.visibility = 'visible'
      }
    } else {
      throw new Error('At least set one menu list!')
    }
  }
}
