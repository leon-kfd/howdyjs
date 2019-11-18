<template>
  <div class="__menu__wrapper"
       v-show="showMenu"
       ref="MenuWrapper"
       :style="{...menuWrapperCss, width: `${menuWidth}px`, top: `${menuTop}px`, left: `${menuLeft}px`}">
    <template v-for="(item,index) in calcMenuList">
      <div class="__menu__item"
           v-if="!item.hidden"
           :key="index"
           :style="{height: menuItemCss['height'], padding: menuItemCss['padding']}"
           :class="{disabled: item.disabled}"
           @mousedown.stop="handleMenuItemClick(item)"
           @mouseenter="handleMenuMouseEnter($event,item)"
           @mouseleave="handleMenuMouseLeave">
        <span class="__menu__item-icon"
              :style="{width: menuItemCss['iconSize'], height: menuItemCss['iconSize'], 'line-height': menuItemCss['iconSize']}"
              v-if="hasIcon"></span>
        <span class="__menu__item-label"
              :style="{color: menuItemCss['labelColor'], 'font-size': menuItemCss['labelFontSize']}">{{item.label}}</span>
        <span class="__menu__item-tips"
              :style="{color: menuItemCss['tipsColor'], 'font-size': menuItemCss['tipsFontSize']}">{{item.tips || ''}}</span>
        <span class="__menu__item-arrow"
              v-if="hasSubMenu"
              :class="{show: hasSubMenu && item.children}"
              :style="{width: menuItemCss['arrowSize'],height: menuItemCss['arrowSize']}">
          <span class="__menu__item-arrow-after"
                v-show="hasSubMenu && item.children"
                :style="`border-left: ${arrowRealSize}px solid ${menuItemCss['arrowColor']};border-top: ${arrowRealSize}px solid transparent;border-bottom: ${arrowRealSize}px solid transparent`"></span>
        </span>
        <div class="__menu__sub__wrapper"
             :style="{top: `${subTop}px`, left: `${subLeft}px`, ...menuWrapperCss}"
             v-show="hoverFlag"
             v-if="item.children && item.children.length > 0">
          <template v-for="(subItem,subIndex) in item.children">
            <div class="__menu__sub__item"
                 :key="subIndex"
                 v-if="!subItem.hidden"
                 :style="{height: menuItemCss['height'], padding: menuItemCss['padding']}"
                 :class="{disabled: subItem.disabled}"
                 @mousedown.stop="handleSubMenuItemClick(subItem)"
                 @mouseenter="handleSubMenuMouseEnter"
                 @mouseleave="handleSubMenuMouseLeave">
              <span class="__menu__sub__item-label"
                    :style="{color: menuItemCss['labelColor'], 'font-size': menuItemCss['labelFontSize']}">{{subItem.label}}</span>
              <span class="__menu__sub__item-label"
                    :style="{color: menuItemCss['tipsColor'], 'font-size': menuItemCss['tipsFontSize']}">{{subItem.tips || ''}}</span>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { clone } from './utils/helper'
export default {
  name: 'MouseMenuV',
  props: {
    menuHiddenFn: Function,
    menuWidth: Number,
    menuList: Array,
    hasIcon: Boolean,
    menuWrapperCss: Object,
    menuItemCss: Object
  },
  data () {
    return {
      subLeft: 0,
      subTop: 0,
      hoverFlag: false,
      menuTop: 0,
      menuLeft: 0,
      showMenu: true,
      calcMenuList: [],
      clickDomEl: null
    }
  },
  computed: {
    hasSubMenu () {
      let flag = false
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].children && this.menuList[i].children.length > 0) {
          flag = true
          break
        }
      }
      return flag
    },
    arrowRealSize () {
      let full = this.menuItemCss.arrowSize.match(/\d+/)
      if (full) full = ~~full[0] || 10
      return full / 2
    }
  },
  methods: {
    handleMenuItemClick (item) {
      if (item.fn && typeof item.fn === 'function' && !item.disabled) {
        item.fn(this.clickDomEl)
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
    },
    handleSubMenuItemClick (subItem) {
      if (subItem.fn && typeof subItem.fn === 'function' && !subItem.disabled) {
        subItem.fn(this.clickDomEl)
        this.hoverFlag = false
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
    },
    handleMenuMouseEnter ($event, item) {
      $event.currentTarget.style.background = this.menuItemCss['hoverBackground']
      if (item.children && !item.needDisabled) {
        this.hoverFlag = true
        const el = $event.currentTarget
        const subEl = el.querySelector('.__menu__sub__wrapper')
        const { offsetWidth } = el
        const { offsetWidth: subOffsetWidth, offsetHeight: subOffsetHeight } = subEl
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window
        const { top, left } = el.getBoundingClientRect()
        if (left + offsetWidth + subOffsetWidth > windowWidth - 5) {
          this.subLeft = left - subOffsetWidth + 5
        } else {
          this.subLeft = left + offsetWidth
        }
        if (top + subOffsetHeight > windowHeight - 5) {
          this.subTop = windowHeight - subOffsetHeight
        } else {
          this.subTop = top + 5
        }
      }
    },
    handleMenuMouseLeave (e) {
      e.currentTarget.style.background = this.menuWrapperCss['background']
    },
    handleSubMenuMouseEnter (e) {
      e.currentTarget.style.background = this.menuItemCss['hoverBackground']
    },
    handleSubMenuMouseLeave (e) {
      e.currentTarget.style.background = this.menuWrapperCss['background']
    },
    handleShowMenu (x, y) {
      this.clickDomEl = document.elementFromPoint(x - 1, y - 1)
      if (this.menuHiddenFn && typeof this.menuHiddenFn === 'function') {
        this.showMenu = !this.menuHiddenFn(this.clickDomEl)
      }
      if (this.showMenu) {
        this.calcMenuList = clone(this.menuList)
        this.setHiddenAndDisabled(this.calcMenuList, this.clickDomEl)
        this.$nextTick(() => {
          const { innerWidth: windowWidth, innerHeight: windowHeight } = window
          const menu = this.$refs.MenuWrapper
          const menuHeight = menu.offsetHeight
          const menuWidth = this.menuWidth
          this.menuLeft = x + menuWidth + 1 > windowWidth ? windowWidth - menuWidth - 5 : x + 1
          this.menuTop = y + menuHeight + 1 > windowHeight ? windowHeight - menuHeight - 5 : y + 1
          menu.style.visibility = 'visible'
        })
      }
    },
    setHiddenAndDisabled (list, clickDomEl) {
      list.map(item => {
        if (item.children) {
          this.setHiddenAndDisabled(item.children, clickDomEl)
        }
        if (item.hidden && typeof item.hidden === 'function') {
          item.hidden = item.hidden(clickDomEl)
        } else {
          item.hidden = false
        }
        if (item.disabled && typeof item.disabled === 'function') {
          item.disabled = item.disabled(clickDomEl)
        } else {
          item.disabled = false
        }
      })
    }
  }
}
</script>
<style>
.__menu__wrapper {
  position: fixed;
  width: 200px;
  background: #c8f2f0;
  box-shadow: 0 1px 5px #888;
  padding: 5px 0;
  border-radius: 4px;
  visibility: hidden;
}
.__menu__item,
.__menu__sub__item {
  display: flex;
  height: 30px;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
}
.__menu__item:hover,
.__menu__sub__item:hover {
  background: rgba(255, 255, 255, 0.8);
}
.__menu__item.disabled,
.__menu__sub__item.disabled {
  cursor: not-allowed;
}
.__menu__item-icon {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-label,
.__menu__sub__item-label {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: 14px;
  color: #484852;
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item-tips,
.__menu__sub__item-tips {
  font-size: 12px;
  color: #889;
}
.__menu__item-arrow {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item-arrow.show .__menu__item-arrow-after {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: 5px solid #484852;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.__menu__sub__wrapper {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: #c8f2f0;
  box-shadow: 0 1px 5px #888;
  padding: 5px 0;
  border-radius: 4px;
}
.__menu__item:hover .__menu__sub__wrapper {
  visibility: visible;
}
</style>
