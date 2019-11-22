<template>
  <div class="__menu__wrapper"
       v-show="showMenu"
       ref="MenuWrapper"
       :style="{width: `${menuWidth}px`, top: `${menuTop}px`, left: `${menuLeft}px`}">
    <template v-for="(item,index) in calcMenuList">
      <div class="__menu__item"
           v-if="!item.hidden"
           :key="index"
           :class="{disabled: item.disabled}"
           @mousedown.stop="handleMenuItemClick(item)"
           @mouseenter="handleMenuMouseEnter($event,item)">
        <span class="__menu__item-icon"
              v-if="hasIcon">
          <i v-if="IconType==='font-icon'"
             v-show="item.icon"
             :class="item.icon"></i>
        </span>
        <span class="__menu__item-label">{{item.label}}</span>
        <span class="__menu__item-tips">{{item.tips || ''}}</span>
        <span class="__menu__item-arrow"
              v-if="hasSubMenu"
              :class="{show: hasSubMenu && item.children}"
              :style="{width: menuItemCss['arrowSize'],height: menuItemCss['arrowSize']}">
          <span class="__menu__item-arrow-after"
                v-show="hasSubMenu && item.children"></span>
        </span>
        <div class="__menu__sub__wrapper"
             :style="{top: `${subTop}px`, left: `${subLeft}px`}"
             v-show="hoverFlag"
             v-if="item.children && item.children.length > 0">
          <template v-for="(subItem,subIndex) in item.children">
            <div class="__menu__sub__item"
                 :key="subIndex"
                 v-if="!subItem.hidden"
                 :class="{disabled: subItem.disabled}"
                 @mousedown.stop="handleSubMenuItemClick(subItem)">
              <span class="__menu__sub__item-label">{{subItem.label}}</span>
              <span class="__menu__sub__item-tips">{{subItem.tips || ''}}</span>
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
    IconType: String,
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
  mounted () {
    this.$nextTick(() => {
      let el = this.$refs.MenuWrapper
      Object.keys(this.menuWrapperCss).map(item => {
        el.style.setProperty(`--menu-${item}`, this.menuWrapperCss[item])
      })
      Object.keys(this.menuItemCss).map(item => {
        el.style.setProperty(`--menu-item-${item}`, this.menuItemCss[item])
      })
      let arrowSize = this.menuItemCss.arrowSize.match(/\d+/)
      if (arrowSize) arrowSize = ~~arrowSize[0] || 10
      el.style.setProperty(`--menu-item-arrowRealSize`, arrowSize / 2 + 'px')
    })
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
      if (item.children && !item.disabled) {
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
        }
        if (item.disabled && typeof item.disabled === 'function') {
          item.disabled = item.disabled(clickDomEl)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.__menu__wrapper {
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
}
.__menu__wrapper {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  visibility: hidden;
}
.__menu__item,
.__menu__sub__item {
  display: flex;
  height: var(--menu-item-height);
  line-height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  .__menu__item-icon {
    color: var(--menu-item-iconColor);
    width: var(--menu-item-iconSize);
    height: var(--menu-item-iconSize);
    line-height: var(--menu-item-iconSize);
    i {
      font-size: var(--menu-item-iconFontSize);
    }
  }
  .__menu__item-label,
  .__menu__sub__item-label {
    width: 100%;
    max-height: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    font-size: var(--menu-item-labelFontSize);
    color: var(--menu-item-labelColor);
    margin-right: 5px;
    overflow: hidden;
  }
  .__menu__item-tips,
  .__menu__sub__item-tips {
    font-size: var(--menu-item-tipsFontSize);
    color: var(--menu-item-tipsColor);
  }
  .__menu__item-arrow {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    position: relative;
  }
  &.disabled {
    cursor: not-allowed;
    .__menu__item-icon,
    .__menu__item-label,
    .__menu__sub__item-label,
    .__menu__item-tips,
    .__menu__sub__item-tips {
      color: var(--menu-item-disabledColor);
    }
    .__menu__item-arrow {
      .__menu__item-arrow-after {
        border-left: var(--menu-item-arrowRealSize) solid
          var(--menu-item-disabledColor);
      }
    }
  }
}
.__menu__item {
  &:not(.disabled):hover {
    background: var(--menu-item-hoverBackground);
    .__menu__item-icon {
      color: var(--menu-item-hoverIconColor);
    }
    .__menu__item-label {
      color: var(--menu-item-hoverLabelColor);
    }
    .__menu__item-tips {
      color: var(--menu-item-hoverTipsColor);
    }
    .__menu__item-arrow {
      color: var(--menu-item-hoverArrowColor);
    }
  }
}
.__menu__sub__item {
  &:not(.disabled):hover {
    background: var(--menu-item-hoverBackground);
    .__menu__sub__item-label {
      color: var(--menu-item-hoverLabelColor);
    }
    .__menu__sub__item-tips {
      color: var(--menu-item-hoverTipsColor);
    }
  }
}
.__menu__item-icon {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
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
