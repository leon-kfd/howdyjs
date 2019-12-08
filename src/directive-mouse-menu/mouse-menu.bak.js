const initContextMenu = function (el, options, e) {
  const { x, y } = e
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window
  const {
    menuList,
    width: menuWidth,
    hasIcon,
    color,
    bgColor,
    hoverColor,
    hoverBgColor,
    boxShadow,
    borderRadius,
    itemHeight,
    itemFontSize,
    itemPaddingX
  } = options
  const cssText = `position: fixed;width: ${menuWidth}px;background: ${bgColor};box-shadow: ${boxShadow};padding: 5px 0;border-radius: ${borderRadius}px;`
  let menu = document.querySelector('.__menu__wrapper')
  if (!menu) {
    menu = document.createElement('div')
    menu.setAttribute('class', '__menu__wrapper')
    document.body.appendChild(menu)
  }
  menu.style.cssText = cssText
  let menuFragment = document.createDocumentFragment()
  let menuItemCss = `height:${itemHeight}px;line-height: ${itemHeight}px;cursor: pointer;font-size: ${typeof itemFontSize === 'number' ? (itemFontSize + 'px') : itemFontSize};color: ${color};`
  if (hasIcon) {
    menuItemCss += `padding: 0 10px 0 30px;`
  } else {
    menuItemCss += `padding: 0 ${itemPaddingX}px`
  }
  menuList.map(item => {
    let menuItem = document.createElement('div')
    menuItem.innerText = item.label
    menuItem.setAttribute('class', '__menu__item')
    menuItem.style.cssText = menuItemCss
    menuItem.onmousedown = function (e) {
      e.stopPropagation()
    }
    if (item.fn) {
      menuItem.clickEvent = function (e) {
        e.stopPropagation()
        item.fn(document.elementFromPoint(x, y))
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
      menuItem.addEventListener('click', menuItem.clickEvent, false)
    }
    if (item.hoverBgColor || hoverBgColor) {
      menuItem.onmouseenter = function (e) {
        menuItem.style.color = item.hoverColor || hoverColor || color
        menuItem.style.background = item.hoverBgColor || hoverBgColor
      }
      menuItem.onmouseleave = function (e) {
        menuItem.style.color = item.color || color
        menuItem.style.background = item.bgColor || bgColor
      }
    }
    menuFragment.appendChild(menuItem)
  })
  emptyElement(menu)
  menu.appendChild(menuFragment)
  let menuHeight = menu.offsetHeight
  let menuLeft = x + menuWidth + 1 > windowWidth ? windowWidth - menuWidth - 5 : x + 1
  let menuTop = y + menuHeight + 1 > windowHeight ? windowHeight - menuHeight - 5 : y + 1
  menu.style.top = `${menuTop}px`
  menu.style.left = `${menuLeft}px`
  menu.style.visibility = 'visible'
}
const emptyElement = function (el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    console.log(arg, value)
    const options = {
      width: 200,
      menuList: [],
      color: '#484852',
      bgColor: '#c8f2f0',
      boxShadow: '0 1px 5px #888',
      borderRadius: 4,
      itemHeight: 30,
      itemFontSize: '0.9rem',
      itemPaddingX: 10,
      ...value
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
      document.onmousedown = function () {
        document.removeEventListener('contextmenu', contextmenuEvent)
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
      const contextmenuEvent = function (e) {
        e.preventDefault()
        initContextMenu(el, options, e)
      }
    } else {
      throw new Error('At least set one menu list!')
    }
  }
}
