const createDashedLineEl = (direction, options) => {
  const { tipLineColor, tipLineWidth, tipLineStyle, zIndex } = options
  let dashedLine = document.createElement('div')
  const cssText = `position:absolute;z-index: ${zIndex};visibility: hidden;`
  const isX = direction === 'left' || direction === 'right'
  dashedLine.style.cssText = isX
    ? `${cssText};top:0;bottom: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`
    : `${cssText};left:0;right: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`
  dashedLine.setAttribute('class', 'resize__dashed-line')
  return dashedLine
}

const createLineEl = (direction, element, options, dashedLine) => {
  const { immediate, scrollElSelector, lineColor, lineWidth, lineHoverColor, lineHoverWidth, zIndex } = options
  let line = document.createElement('div')
  let cssText = `position: absolute;background: ${lineColor};z-index: ${zIndex}`
  const isX = direction === 'left' || direction === 'right'
  const isBefore = direction === 'right' || direction === 'bottom'
  const isFlex = getComputedStyle(element.parentNode).display === 'flex'
  line.style.cssText = isX
    ? `${cssText};width: ${lineWidth}px;top:0;bottom: 0;${direction}: -${lineWidth / 2}px;cursor: col-resize;`
    : `${cssText};height: ${lineWidth}px;left:0;right: 0;${direction}: -${lineWidth / 2}px;cursor: row-resize;`
  line.mouseoverEvent = function () {
    line.style.background = lineHoverColor
    line.style[isX ? 'width' : 'height'] = `${lineHoverWidth}px`
    line.style[direction] = `-${lineHoverWidth / 2}px`
  }
  line.mouseoutEvent = function () {
    line.style.background = lineColor
    line.style[isX ? 'width' : 'height'] = `${lineWidth}px`
    line.style[direction] = `-${lineWidth / 2}px`
  }
  line.mousedownEvent = function (e) {
    const el = element || e.target.parentNode
    const elParent = el.parentNode
    let moveOffset
    const elSize = isX ? el.offsetWidth : el.offsetHeight
    const elParentSize = isX ? elParent.offsetWidth : elParent.offsetHeight
    const elOffset = isX ? el.offsetLeft : el.offsetTop
    const elParentOffset = isX ? elParent.offsetLeft : elParent.offsetTop
    const scrollEl = scrollElSelector ? document.querySelector(scrollElSelector) : document.documentElement
    const scrollSize = isX ? scrollEl.scrollLeft : scrollEl.scrollTop
    let moveValidFlag = true
    const resizeFn = () => {
      let resize = document.createEvent('HTMLEvents')
      resize.initEvent('resize')
      resize['direction'] = direction
      resize['moveOffset'] = moveOffset
      resize['moveOffsetPercent'] = moveOffset / elParentSize * 100
      if (isFlex) {
        resize[isX ? 'resizeWidth' : 'resizeHeight'] = isBefore ? moveOffset - elOffset + elParentOffset : elSize + elOffset - moveOffset - elParentOffset
        resize[isX ? 'resizeWidthPercent' : 'resizeHeightPercent'] = (isBefore ? (moveOffset - elOffset + elParentOffset) / elParentSize : (elSize + elOffset - moveOffset - elParentOffset) / elParentSize) * 100
      } else {
        resize[isX ? 'resizeWidth' : 'resizeHeight'] = isBefore ? moveOffset - elOffset : elSize + elOffset - moveOffset
        resize[isX ? 'resizeWidthPercent' : 'resizeHeightPercent'] = (isBefore ? (moveOffset - elOffset) / elParentSize : (elSize + elOffset - moveOffset) / elParentSize) * 100
      }
      el.dispatchEvent(resize)
    }
    document.onmousemove = function (e) {
      event.preventDefault()
      moveOffset = isX ? e.clientX - elParent.offsetLeft + scrollSize : e.clientY - elParent.offsetTop + scrollSize
      moveValidFlag = isBefore
        ? isFlex
          ? moveOffset >= (elOffset - elParentOffset) && moveOffset <= elParentSize
          : moveValidFlag = moveOffset >= elOffset && moveOffset <= elParentSize
        : isFlex
          ? moveValidFlag = moveOffset >= 0 && moveOffset <= elOffset - elParentOffset + elSize
          : moveValidFlag = moveOffset >= 0 && moveOffset <= (elOffset + elSize)
      if (moveValidFlag) {
        if (immediate) {
          resizeFn()
        } else {
          dashedLine.style.visibility = 'visible'
          if (isFlex) {
            dashedLine.style[direction] = isBefore ? `${elSize - moveOffset + elOffset - elParentOffset}px` : `${moveOffset + elParentOffset - elOffset}px`
          } else {
            dashedLine.style[direction] = isBefore ? `${elOffset + elSize - moveOffset}px` : `${moveOffset - elOffset}px`
          }
        }
      }
    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
      if (!immediate) {
        dashedLine.style.visibility = 'hidden'
        if (moveValidFlag) {
          resizeFn()
          dashedLine.style[direction] = 0
        }
      }
    }
  }
  line.setAttribute('class', 'resize__line')

  line.addEventListener('mousemove', line.mouseoverEvent)
  line.addEventListener('mouseout', line.mouseoutEvent)
  line.addEventListener('mousedown', line.mousedownEvent)
  return line
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    let options = {
      immediate: false,
      direction: ['right'],
      scrollElSelector: null,
      lineColor: '#aab',
      lineWidth: 2,
      lineHoverColor: '#88f',
      lineHoverWidth: 4,
      tipLineColor: '#262626',
      tipLineWidth: 1,
      tipLineStyle: 'dashed',
      zIndex: 999,
      ...value
    }
    const { position } = getComputedStyle(el)
    if (position === 'static') el.style.position = 'relative'
    let directionArr = []
    if (arg) {
      if (arg === 'all') {
        directionArr = ['top', 'left', 'bottom', 'right']
      } else {
        directionArr = [arg]
      }
    } else {
      directionArr = options.direction
    }
    directionArr.map(direction => {
      let dashedLine
      if (options.immediate) {
        let line = createLineEl(direction, el, options, dashedLine)
        el.appendChild(line)
      } else {
        dashedLine = createDashedLineEl(direction, options)
        el.appendChild(dashedLine)
        let line = createLineEl(direction, el, options, dashedLine)
        el.appendChild(line)
      }
    })
  },
  unbind: function (el) {
    [...el.querySelectorAll('.resize__line')].map(line => {
      line.removeEventListener('mousemove', line.mouseoverEvent)
      line.removeEventListener('mouseout', line.mouseoutEvent)
      line.removeEventListener('mousedown', line.mousedownEvent)
    })
  }
}
