const createScrollBarTrack = (el, direction, options, scrollWrapper) => {
  el.style.position = 'relative'
  let isY = direction === 'y'
  let { scrollBarWidth, scrollBarOffsetX, scrollBarOffsetY, scrollBarThumbColor, scrollBarThumbHoverColor, scrollBarThumbBorderRadius, scrollBarTrackColor, speedOfClickToScroll } = options
  scrollBarThumbBorderRadius = scrollBarThumbBorderRadius ? scrollBarWidth / 2 : 0
  const track = document.createElement('div')
  let trackCssText = isY
    ? `position: absolute;right: 0;top: 0;height: 100%; width: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
    : `position: absolute;left: 0;bottom: 0;width: 100%; height: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
  track.style.cssText = trackCssText
  track.setAttribute('class', `scroll__track_${direction}`)
  scrollWrapper.appendChild(track)
  const thumb = document.createElement('div')
  let thumbCssText = isY
    ? `position: relative;top: 0;right: 0;width: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetY}px ${scrollBarOffsetX}px;box-sizing:border-box;cursor: pointer;`
    : `position: relative;bottom: 0;left: 0;height: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetX}px ${scrollBarOffsetY}px;box-sizing:border-box;cursor: pointer;`
  const thumbInner = document.createElement('div')
  let thumbInnerCssText = `width: 100%;height:100%;background: ${scrollBarThumbColor};border-radius: ${scrollBarThumbBorderRadius}px;`
  let { offsetHeight, scrollHeight, offsetWidth, scrollWidth } = el
  let offsetSize = isY ? offsetHeight : offsetWidth
  let scrollSize = isY ? scrollHeight : scrollWidth
  let thumbSize = offsetSize / scrollSize * offsetSize
  thumbCssText += isY ? `height: ${thumbSize}px;` : `width: ${thumbSize}px`
  thumb.style.cssText = thumbCssText
  thumb.setAttribute('class', 'scroll__thumb')
  thumbInner.style.cssText = thumbInnerCssText
  thumbInner.setAttribute('class', 'scroll__thumb_inner')
  thumb.appendChild(thumbInner)
  track.appendChild(thumb)
  let elScrollTop = 0
  let isInThumbMouseMove = false
  const elScrollTopMax = scrollSize - offsetSize
  const thumbScrollTopMax = offsetSize - thumbSize
  if (isY) {
    el.onmousewheel = function (wheel) {
      let deltaY = wheel.deltaY
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
  thumb.onmouseenter = function () {
    thumbInner.style.background = scrollBarThumbHoverColor
  }
  thumb.onmouseleave = function () {
    thumbInner.style.background = scrollBarThumbColor
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
  const __scroll__ = function (trackEl, thumbMoveOffset) {
    const animateScroll = function () {
      let thumbScrollTop, breakAnimation
      let [thumbBeforeOffset] = trackEl.childNodes[0].style.transform.match(/\d+(\.\d+)?/) || [0]
      thumbBeforeOffset = ~~thumbBeforeOffset
      if (thumbMoveOffset > thumbBeforeOffset) {
        thumbBeforeOffset += speedOfClickToScroll
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
        thumbBeforeOffset -= speedOfClickToScroll
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
      // scrollWrapper.style.transform = isY ? `translateY(${elScrollTop}px)` : `translateX(${elScrollTop}px)`
      setTranslate(scrollWrapper, direction, elScrollTop)
      thumb.style.transform = isY ? `translateY(${thumbScrollTop}px)` : `translateX(${thumbScrollTop}px)`
      if (isY) {
        el.scrollTop = elScrollTop
      } else {
        el.scrollLeft = elScrollTop
      }
      breakAnimation ? window.cancelAnimationFrame(animateScroll) : window.requestAnimationFrame(animateScroll)
    }
    window.requestAnimationFrame(animateScroll)
  }
}

const setTranslate = function (el, direction, value) {
  let { transform } = window.getComputedStyle(el)
  // let [a, b, c, d, x, y] = transform.match(/-?\d+\.?\d{0,}/g)
  let [a, b, c, d, x, y] = transform.slice(7, -1).split(',')
  if (direction === 'x') {
    el.style.transform = `matrix(${a},${b},${c},${d},${value},${y})`
  } else if (direction === 'y') {
    el.style.transform = `matrix(${a},${b},${c},${d},${x},${value})`
  }
}

// Set thumb show for hover
const setDisplayForHover = function (el) {
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

// Drag scroll
const addDragScroll = function (el, directionArr) {
  el.onmousedown = function (e) {
    // const { top: elClientRectTop, left: elClientRectLeft } = el.getBoundingClientRect()
    const { scrollTop, scrollLeft, scrollHeight, offsetHeight, scrollWidth, offsetWidth } = el
    const { clientX: beforeClientX, clientY: beforeClientY } = e
    const [elScrollLeftMax, elScrollTopMax] = [scrollWidth - offsetWidth, scrollHeight - offsetHeight]
    const [thumbScrollLeftMax, thumbScrollTopMax] = [offsetWidth - (offsetWidth / scrollWidth * offsetWidth), offsetHeight - (offsetHeight / scrollHeight * offsetHeight)]
    document.body.style.userSelect = 'none'
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
    }
  }
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    const isMobile = /(Android|iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    if (!isMobile) {
      el.style.overflow = 'hidden'
      const options = {
        direction: ['y'],
        scrollBarWidth: 6,
        scrollBarOffsetX: 0,
        scrollBarOffsetY: 0,
        scrollBarThumbColor: '#aab',
        scrollBarThumbBorderRadius: true,
        scrollBarTrackColor: 'transparent',
        scrollBarThumbHoverColor: '#889',
        speedOfClickToScroll: 20,
        dragScroll: false,
        thumbShow: 'always',
        ...value
      }
      let directionArr = []
      if (arg) {
        if (arg === 'all') {
          directionArr = ['x', 'y']
        } else {
          directionArr = [arg]
        }
      } else {
        directionArr = options.direction
      }
      const scrollWrapper = document.createElement('div')
      scrollWrapper.style.cssText = `position: absolute;top:0;left:0;bottom:0;right:0;transform:translate(0,0)`
      scrollWrapper.setAttribute('class', 'scroll__wrapper')
      el.appendChild(scrollWrapper)
      directionArr.map(item => {
        createScrollBarTrack(el, item, options, scrollWrapper)
      })
      if (options.dragScroll) {
        addDragScroll(el, directionArr)
      }
      if (options.thumbShow === 'hover') {
        setDisplayForHover(el)
      }
    } else {
      el.style.overflow = 'auto'
    }
  }
}
