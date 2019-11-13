const initContextMenu = function (el, options, e) {
  const { x, y } = e
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window
  const { menuList, width: menuWidth, hasIcon, color, bgColor, hoverColor, hoverBgColor } = options
  const cssText = `position: fixed;width: ${menuWidth}px;background: #c8f2f0;box-shadow: 0 1px 5px #888;padding: 5px 0`
  let menu = el.querySelector('.__menu__wrapper')
  if (!menu) {
    menu = document.createElement('div')
    menu.setAttribute('class', '__menu__wrapper')
    menu.style.cssText = cssText
    el.appendChild(menu)
  }
  let menuFragment = document.createDocumentFragment()
  let menuItemCss = `height:30px;line-height: 30px;cursor: pointer;font-size: .9rem;color: #484852;`
  if (hasIcon) {
    menuItemCss += `padding: 0 8px 0 30px;`
  } else {
    menuItemCss += `padding: 0 8px`
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
        item.fn()
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
  let menuLeft = x + menuWidth > windowWidth ? windowWidth - menuWidth - 5 : x
  let menuTop = y + menuHeight > windowHeight ? windowHeight - menuHeight - 5 : y
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
      ...value
    }
    if (options.menuList.length > 0) {
      el.onmousedown = function (e) {
        e.stopPropagation()
        if (e.button === 2) {
          document.addEventListener('contextmenu', contextmenuEvent)
        } else {
          el.querySelector('.__menu__wrapper') && (el.querySelector('.__menu__wrapper').style.visibility = 'hidden')
        }
      }
      document.onmousedown = function () {
        document.removeEventListener('contextmenu', contextmenuEvent)
        el.querySelector('.__menu__wrapper') && (el.querySelector('.__menu__wrapper').style.visibility = 'hidden')
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
