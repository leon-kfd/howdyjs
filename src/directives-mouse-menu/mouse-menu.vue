<template>
  <div class="__menu__wrapper"
       :style="{...menuWrapperCss}">
    <div class="__menu__item"
         :style="{height: menuItemCss['height'], padding: menuItemCss['padding']}"
         v-for="(item,index) in menuList"
         :key="index"
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
        <div class="__menu__sub__item"
             :style="{height: menuItemCss['height'], padding: menuItemCss['padding']}"
             v-for="(subItem,subIndex) in item.children"
             :key="subIndex"
             @mousedown.stop="handleSubMenuItemClick(subItem)"
             @mouseenter="handleSubMenuMouseEnter"
             @mouseleave="handleSubMenuMouseLeave">
          <span class="__menu__sub__item-label"
                :style="{color: menuItemCss['labelColor'], 'font-size': menuItemCss['labelFontSize']}">{{subItem.label}}</span>
          <span class="__menu__sub__item-label"
                :style="{color: menuItemCss['tipsColor'], 'font-size': menuItemCss['tipsFontSize']}">{{subItem.tips || ''}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MouseMenuV',
  props: {
    menuList: Array,
    hasIcon: Boolean,
    clickDomEl: HTMLElement,
    menuWrapperCss: Object,
    menuItemCss: Object
  },
  data () {
    return {
      subLeft: 0,
      subTop: 0,
      hoverFlag: false
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
      if (item.fn && typeof item.fn === 'function') {
        item.fn(this.clickDomEl)
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
    },
    handleSubMenuItemClick (subItem) {
      if (subItem.fn && typeof subItem.fn === 'function') {
        subItem.fn(this.clickDomEl)
        this.hoverFlag = false
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
    },
    handleMenuMouseEnter ($event, item) {
      $event.currentTarget.style.background = this.menuItemCss['hoverBackground']
      if (item.children) {
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
