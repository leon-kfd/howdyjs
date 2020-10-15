class CustomScrollBar {
  constructor({ el, options }) {
    if (el instanceof HTMLElement) {
      this.el = el
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el)
    }
    this.options = {
      direction: 'y',
      scrollBarWidth: 6,
      scrollBarOffsetX: 0,
      scrollBarOffsetY: 0,
      scrollBarThumbColor: '#aab',
      scrollBarThumbBorderRadius: true,
      scrollBarTrackColor: 'transparent',
      enableTrackClickScroll: true,
      scrollSpeed: 20,
      dragScroll: false,
      thumbShow: 'always',
      ...options
    }
    this.directionArr = this.options.direction === 'all' ? ['x', 'y'] : ['x', 'y'].includes(this.options.direction) ? [this.direction] : ['y']
    this.timer = null
    this.el.$scroll = this
  }

  init (defaultX = 0, defaultY = 0) {
    this.scrollWrapper = document.createElement('div')
    this.scrollWrapper.style.cssText = `position: absolute;top:0;left:0;bottom:0;right:0;transform:translate(${defaultX}px,${defaultY}px)`
    this.scrollWrapper.setAttribute('class', 'scroll__wrapper')
    this.el.appendChild(this.scrollWrapper)
    this.el.style.position = 'relative'
    this.el.style.overflow = 'hidden'
    this.directionArr.map(item => {
      this.createScrollBarTrack(item)
    })
    if (this.options.dragScroll) {
      this.setDragScroll(this.el, this.directionArr)
    }
    if (this.options.thumbShow === 'hover') {
      this.setDisplayForHover(this.el)
    }
  }

  createScrollBarTrack (direction) {
    const isY = direction === 'y'
    let {
      scrollBarWidth,
      scrollBarOffsetX,
      scrollBarOffsetY,
      scrollBarThumbColor,
      scrollBarThumbHoverColor,
      scrollBarThumbBorderRadius,
      scrollBarTrackColor,
      enableTrackClickScroll,
      scrollSpeed
    } = this.options
    let scrollBarThumbColorIsGradient = scrollBarThumbColor.includes('gradient')
    scrollBarThumbBorderRadius = scrollBarThumbBorderRadius ? scrollBarWidth / 2 : 0
    const track = document.createElement('div')
    track.setAttribute('direction', direction)
    let trackCssText = isY
      ? `position: absolute;right: 0;top: 0;height: 100%; width: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
      : `position: absolute;left: 0;bottom: 0;width: 100%; height: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
    track.style.cssText = trackCssText
    track.setAttribute('class', `scroll__track_${direction}`)
    this.scrollWrapper.appendChild(track)
    const thumb = document.createElement('div')
    let thumbCssText = isY
      ? `position: relative;top: 0;right: 0;width: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetY}px ${scrollBarOffsetX}px;box-sizing:border-box;cursor: pointer;`
      : `position: relative;bottom: 0;left: 0;height: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetX}px ${scrollBarOffsetY}px;box-sizing:border-box;cursor: pointer;`
    const thumbInner = document.createElement('div')
    let thumbInnerCssText = `width: 100%;height:100%;border-radius: ${scrollBarThumbBorderRadius}px;`
    if (scrollBarThumbColorIsGradient) {
      thumbInnerCssText += `background-image: ${scrollBarThumbColor};`
    } else {
      thumbInnerCssText += `background: ${scrollBarThumbColor};`
    }
    const { offsetHeight, scrollHeight, offsetWidth, scrollWidth, scrollTop, scrollLeft } = this.el
    const offsetSize = isY ? offsetHeight : offsetWidth
    const scrollSize = isY ? scrollHeight : scrollWidth
    if (scrollSize <= offsetSize) { // Don't need show overflow scroll
      return
    }
    let thumbSize = offsetSize / scrollSize * offsetSize
    thumbCssText += isY ? `height: ${thumbSize}px;` : `width: ${thumbSize}px`
    thumb.style.cssText = thumbCssText
    thumb.setAttribute('class', 'scroll__thumb')
    thumbInner.style.cssText = thumbInnerCssText
    thumbInner.setAttribute('class', 'scroll__thumb_inner')
    thumb.appendChild(thumbInner)
    track.appendChild(thumb)
    let elScrollTop = isY ? scrollTop : scrollLeft
    let thumbScrollTop = elScrollTop / scrollSize * offsetSize
    thumb.style.transform = isY ? `translateY(${thumbScrollTop}px)` : `translateX(${thumbScrollTop}px)`
    let isInThumbMouseMove = false
    const elScrollTopMax = scrollSize - offsetSize
    const thumbScrollTopMax = offsetSize - thumbSize
    if (isY) {
      this.el.onmousewheel = function (wheel) {
        let deltaY = -wheel.wheelDelta || wheel.deltaY
        if (!isInThumbMouseMove) {
          elScrollTop = deltaY < 0
            ? elScrollTop < -deltaY
              ? 0
              : elScrollTop + deltaY
            : elScrollTop >= elScrollTopMax - deltaY
              ? elScrollTopMax
              : elScrollTop + deltaY
          __scroll__(track, elScrollTop / scrollSize * offsetSize)
        }
        return false
      }
    }
    if (scrollBarThumbHoverColor) {
      thumb.onmouseenter = function () {
        thumbInner.style.background = scrollBarThumbHoverColor
      }
      thumb.onmouseleave = function () {
        thumbInner.style.background = scrollBarThumbColor
      }
    }
    thumb.onmousedown = function (downEvent) {
      downEvent.stopPropagation()
      const thumbEl = downEvent.target.parentNode
      const beforeClientY = isY ? downEvent.clientY : downEvent.clientX
      let [thumbBeforeOffset] = thumbEl.style.transform.match(/\d+(\.\d+)?/) || [0]
      thumbBeforeOffset = ~~thumbBeforeOffset
      isInThumbMouseMove = true
      document.onmousemove = function (moveEvent) {
        document.body.style.userSelect = 'none'
        let { clientY, clientX } = moveEvent
        let thumbMoveOffset = (isY ? clientY : clientX) - beforeClientY + thumbBeforeOffset
        elScrollTop = thumbMoveOffset / offsetSize * scrollSize
        if (elScrollTop < 0) {
          thumbMoveOffset = 0
          elScrollTop = 0
        } else if (elScrollTop > elScrollTopMax) {
          thumbMoveOffset = thumbScrollTopMax
          elScrollTop = elScrollTopMax
        }
        __scroll__(track, thumbMoveOffset)
      }
      document.onmouseup = function () {
        isInThumbMouseMove = false
        document.body.style.userSelect = 'auto'
        document.onmousemove = null
        document.onmouseup = null
      }
    }

    // 允许点击轨道进行滚动
    if (enableTrackClickScroll) {
      track.onmousedown = function (e) {
        const trackEl = e.target
        const clickPosition = isY ? (e.clientY - trackEl.getBoundingClientRect().top) : (e.clientX - trackEl.getBoundingClientRect().left)
        let thumbMoveOffset = clickPosition - thumbSize / 2
        if (thumbMoveOffset < 0) {
          thumbMoveOffset = 0
        } else if (thumbMoveOffset > thumbScrollTopMax) {
          thumbMoveOffset = thumbScrollTopMax
        }
        __scroll__(trackEl, thumbMoveOffset)
      }
    }

    // 滚动函数，使用requestAnimationFrame实现滚动动画
    let animateScroll
    const __scroll__ = (trackEl, thumbMoveOffset) => {
      if (animateScroll) {
        window.cancelAnimationFrame(animateScroll)
      }
      animateScroll = () => {
        let thumbScrollTop, breakAnimation
        let [thumbBeforeOffset] = trackEl.childNodes[0].style.transform.match(/\d+(\.\d+)?/) || [0]
        thumbBeforeOffset = ~~thumbBeforeOffset
        if (thumbMoveOffset > thumbBeforeOffset) {
          thumbBeforeOffset += scrollSpeed
          if (thumbBeforeOffset < thumbMoveOffset) {
            elScrollTop = thumbBeforeOffset / offsetSize * scrollSize
            thumbScrollTop = thumbBeforeOffset
            breakAnimation = false
          } else {
            elScrollTop = thumbBeforeOffset > thumbScrollTopMax ? elScrollTopMax : (thumbMoveOffset / offsetSize * scrollSize)
            thumbScrollTop = thumbBeforeOffset > thumbScrollTopMax ? thumbScrollTopMax : thumbMoveOffset
            breakAnimation = true
          }
        } else {
          thumbBeforeOffset -= scrollSpeed
          if (thumbBeforeOffset > thumbMoveOffset) {
            elScrollTop = thumbBeforeOffset / offsetSize * scrollSize
            thumbScrollTop = thumbBeforeOffset
            breakAnimation = false
          } else {
            elScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset / offsetSize * scrollSize
            thumbScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset
            breakAnimation = true
          }
        }
        this.setTranslate(direction, elScrollTop)
        thumb.style.transform = isY ? `translateY(${thumbScrollTop}px)` : `translateX(${thumbScrollTop}px)`
        if (isY) {
          this.el.scrollTop = elScrollTop
        } else {
          this.el.scrollLeft = elScrollTop
        }
        breakAnimation ? window.cancelAnimationFrame(animateScroll) : window.requestAnimationFrame(animateScroll)
      }
      window.requestAnimationFrame(animateScroll)
    }
  }

  update (wait = 200) {
    if (this.timer !== null) clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      let { transform } = window.getComputedStyle(this.scrollWrapper)
      let [, , , , x, y] = transform.match(/-?\d+\.?\d{0,}/g)
      this.destory()
      this.init(x, y)
    }, wait)
  }

  destroy () {
    if (this.scrollWrapper) {
      this.scrollWrapper.parentNode.removeChild(this.scrollWrapper)
      this.scrollWrapper = null
    }
  }

  setTranslate (direction, value) {
    let { transform } = window.getComputedStyle(this.scrollWrapper)
    let [a, b, c, d, x, y] = transform.match(/-?\d+\.?\d{0,}/g)
    if (direction === 'x') {
      this.scrollWrapper.style.transform = `matrix(${a},${b},${c},${d},${value},${y})`
    } else if (direction === 'y') {
      this.scrollWrapper.style.transform = `matrix(${a},${b},${c},${d},${x},${value})`
    }
  }

  setDisplayForHover (el) {
    const thumbAppendCss = `opacity: 0;transition: opacity .4s ease-in-out`
    const scrollThumb = [...el.querySelectorAll('.scroll__thumb')]
    scrollThumb.map(item => {
      item.style.cssText = item.style.cssText + thumbAppendCss
    })
    el.mouseenterEvent = function () {
      scrollThumb.map(item => {
        item.style.opacity = 1
      })
    }
    el.mouseleaveEvent = function () {
      scrollThumb.map(item => {
        item.style.opacity = 0
      })
    }
    el.addEventListener('mouseenter', el.mouseenterEvent)
    el.addEventListener('mouseleave', el.mouseleaveEvent)
  }

  setDragScroll (el, directionArr) {
    el.onmousedown = function (e) {
      // const { top: elClientRectTop, left: elClientRectLeft } = el.getBoundingClientRect()
      const { scrollTop, scrollLeft, scrollHeight, offsetHeight, scrollWidth, offsetWidth } = el
      const { clientX: beforeClientX, clientY: beforeClientY } = e
      const [elScrollLeftMax, elScrollTopMax] = [scrollWidth - offsetWidth, scrollHeight - offsetHeight]
      const [thumbScrollLeftMax, thumbScrollTopMax] = [offsetWidth - (offsetWidth / scrollWidth * offsetWidth), offsetHeight - (offsetHeight / scrollHeight * offsetHeight)]
      document.body.style.userSelect = 'none'
      document.body.style.cursor = 'pointer'
      document.onmousemove = function (moveEvent) {
        const { clientX, clientY } = moveEvent
        let [elScrollLeft, elScrollTop] = [beforeClientX - clientX + scrollLeft, beforeClientY - clientY + scrollTop]
        let [thumbMoveOffsetX, thumbMoveOffsetY] = [elScrollLeft / scrollWidth * offsetWidth, elScrollTop / scrollHeight * offsetHeight]
        if (elScrollLeft < 0) {
          thumbMoveOffsetX = 0
          elScrollLeft = 0
        } else if (elScrollLeft > elScrollLeftMax) {
          thumbMoveOffsetX = thumbScrollLeftMax
          elScrollLeft = elScrollLeftMax
        }
        if (elScrollTop < 0) {
          thumbMoveOffsetY = 0
          elScrollTop = 0
        } else if (elScrollTop > elScrollTopMax) {
          thumbMoveOffsetY = thumbScrollTopMax
          elScrollTop = elScrollTopMax
        }
        el.querySelector('.scroll__wrapper').style.transform = `translate(${elScrollLeft}px, ${elScrollTop}px)`
        if (directionArr.includes('x')) {
          el.querySelector('.scroll__track_x .scroll__thumb').style.transform = `translateX(${thumbMoveOffsetX}px)`
        }
        if (directionArr.includes('y')) {
          el.querySelector('.scroll__track_y .scroll__thumb').style.transform = `translateY(${thumbMoveOffsetY}px)`
        }
        el.scrollTop = elScrollTop
        el.scrollLeft = elScrollLeft
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        document.body.style.userSelect = 'default'
        document.body.style.cursor = 'default'
      }
    }
  }
}

const inserted = (el, binding, userOptions) => {
  const { arg, value } = binding
  const isMobile = /(Android|iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
  const customGlobalOptions = userOptions || {}
  if (!isMobile) {
    const options = {
      ...customGlobalOptions,
      ...value,
      direction: arg
    }
    const scroll = new CustomScrollBar({
      el,
      options
    })
    scroll.init()
  }
}

export default {
  install (Vue, userOptions) {
    Vue.directive('scroll', {
      inserted,
      mounted: inserted
    })
  },
  inserted,
  mounted: inserted,
  CustomScrollBar
}

export { CustomScrollBar }
