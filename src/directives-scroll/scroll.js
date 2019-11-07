const createScrollBarTrack = (el, direction, options) => {
  el.style.position = 'relative'
  let { scrollBarWidth, scrollBarOffsetX, scrollBarOffsetY, scrollBarThumbColor, scrollBarThumbHoverColor, scrollBarThumbBorderRadius, scrollBarTrackColor, speedOfClickToScroll } = options
  scrollBarThumbBorderRadius = scrollBarThumbBorderRadius ? scrollBarWidth / 2 : 0
  const track = document.createElement('div')
  let trackCssText = `position: absolute;right: 0;top: 0;height: 100%; width: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
  track.style.cssText = trackCssText
  track.setAttribute('class', 'scroll__track')
  el.appendChild(track)
  const thumb = document.createElement('div')
  let thumbCssText = `position: relative;top: 0;right: 0;width: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetY}px ${scrollBarOffsetX}px;box-sizing:border-box;cursor: pointer;`
  const thumbInner = document.createElement('div')
  let thumbInnerCssText = `width: 100%;height:100%;background: ${scrollBarThumbColor};border-radius: ${scrollBarThumbBorderRadius}px;`
  let { offsetHeight, scrollHeight } = el
  let thumbHeight = (offsetHeight / scrollHeight) * offsetHeight
  thumbCssText += `height: ${thumbHeight}px;`
  thumb.style.cssText = thumbCssText
  thumb.setAttribute('class', 'scroll__thumb')
  thumbInner.style.cssText = thumbInnerCssText
  thumbInner.setAttribute('class', 'scroll__thumb_inner')
  thumb.appendChild(thumbInner)
  track.appendChild(thumb)
  let elScrollTop = 0
  let isInThumbMouseMove = false
  const elScrollTopMax = scrollHeight - offsetHeight
  const thumbScrollTopMax = offsetHeight - thumbHeight
  el.addEventListener('mousewheel', function (wheel) {
    if (!isInThumbMouseMove) {
      elScrollTop = wheel.deltaY < 0
        ? elScrollTop < -wheel.deltaY
          ? 0
          : elScrollTop + wheel.deltaY
        : elScrollTop >= elScrollTopMax - wheel.deltaY
          ? elScrollTopMax
          : elScrollTop + wheel.deltaY
      track.style.transform = `translateY(${elScrollTop}px)`
      thumb.style.transform = `translateY(${elScrollTop / scrollHeight * offsetHeight}px)`
      el.scrollTop = elScrollTop
    }
  })
  thumb.onmouseenter = function () {
    thumbInner.style.background = scrollBarThumbHoverColor
  }
  thumb.onmouseleave = function () {
    thumbInner.style.background = scrollBarThumbColor
  }
  thumb.onmousedown = function (downEvent) {
    downEvent.stopPropagation()
    const thumbEl = downEvent.target.parentNode
    const beforeClientY = downEvent.clientY
    let [thumbBeforeOffset] = thumbEl.style.transform.match(/\d+(\.\d+)?/) || [0]
    thumbBeforeOffset = ~~thumbBeforeOffset
    isInThumbMouseMove = true
    document.onmousemove = function (moveEvent) {
      document.body.style.userSelect = 'none'
      let { clientY } = moveEvent
      let thumbMoveOffset = clientY - beforeClientY + thumbBeforeOffset
      elScrollTop = thumbMoveOffset / offsetHeight * scrollHeight
      if (elScrollTop < 0) {
        thumbMoveOffset = 0
        elScrollTop = 0
      } else if (elScrollTop > elScrollTopMax) {
        thumbMoveOffset = thumbScrollTopMax
        elScrollTop = elScrollTopMax
      }
      track.style.transform = `translateY(${elScrollTop}px)`
      thumb.style.transform = `translateY(${thumbMoveOffset}px)`
      el.scrollTop = elScrollTop
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
    let [thumbBeforeOffset] = trackEl.childNodes[0].style.transform.match(/\d+(\.\d+)?/) || [0]
    thumbBeforeOffset = ~~thumbBeforeOffset
    const clickPosition = e.clientY - trackEl.getBoundingClientRect().top
    const thumbMoveOffset = clickPosition - thumbHeight / 2
    const animateScroll = function () {
      let thumbScrollTop, breakAnimation
      if (thumbMoveOffset > thumbBeforeOffset) {
        thumbBeforeOffset += speedOfClickToScroll
        if (thumbBeforeOffset < thumbMoveOffset) {
          elScrollTop = thumbBeforeOffset / offsetHeight * scrollHeight
          thumbScrollTop = thumbBeforeOffset
          breakAnimation = false
        } else {
          elScrollTop = thumbBeforeOffset > thumbScrollTopMax ? elScrollTopMax : (thumbMoveOffset / offsetHeight * scrollHeight)
          thumbScrollTop = thumbBeforeOffset > thumbScrollTopMax ? thumbScrollTopMax : thumbMoveOffset
          breakAnimation = true
        }
      } else {
        thumbBeforeOffset -= speedOfClickToScroll
        if (thumbBeforeOffset > thumbMoveOffset) {
          elScrollTop = thumbBeforeOffset / offsetHeight * scrollHeight
          thumbScrollTop = thumbBeforeOffset
          breakAnimation = false
        } else {
          elScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset / offsetHeight * scrollHeight
          thumbScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset
          breakAnimation = true
        }
      }
      track.style.transform = `translateY(${elScrollTop}px)`
      thumb.style.transform = `translateY(${thumbScrollTop}px)`
      el.scrollTop = elScrollTop
      breakAnimation ? window.cancelAnimationFrame(animateScroll) : window.requestAnimationFrame(animateScroll)
    }
    window.requestAnimationFrame(animateScroll)
  }
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
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
    directionArr.map(item => {
      createScrollBarTrack(el, item, options)
    })
  }
}
