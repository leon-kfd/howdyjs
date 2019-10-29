const createDashedLineEl = (direction, options) => {
  let { tipLineColor, tipLineWidth, tipLineStyle, zIndex } = options
  let dashedLine = document.createElement('div')
  let cssText = `position:absolute;z-index: ${zIndex};visibility: hidden;`
  let isX = direction === 'left' || direction === 'right'
  dashedLine.style.cssText = isX
    ? `${cssText};top:0;bottom: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`
    : `${cssText};left:0;right: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`
  dashedLine.setAttribute('class', 'resize__dashed-line')
  return dashedLine
}

const createLineEl = (direction, element, options, dashedLine) => {
  let { scrollElSelector, lineColor, lineWidth, lineHoverColor, lineHoverWidth, zIndex } = options
  let line = document.createElement('div')
  let cssText = `position: absolute;background: ${lineColor};z-index: ${zIndex}`
  let isX = direction === 'left' || direction === 'right'
  let isBefore = direction === 'right' || direction === 'bottom'
  let isFlex = getComputedStyle(element.parentNode).display === 'flex'
  line.style.cssText = isX
    ? `${cssText};width: ${lineWidth}px;top:0;bottom: 0;${direction}: -${lineWidth / 2}px;cursor: col-resize;`
    : `${cssText};height: ${lineWidth}px;left:0;right: 0;${direction}: -${lineWidth / 2}px;cursor: row-resize;`
  line.onmouseover = function (e) {
    line.style.background = lineHoverColor
    line.style[isX ? 'width' : 'height'] = `${lineHoverWidth}px`
    line.style[direction] = `-${lineHoverWidth / 2}px`
  }
  line.onmouseout = function () {
    line.style.background = lineColor
    line.style[isX ? 'width' : 'height'] = `${lineWidth}px`
    line.style[direction] = `-${lineWidth / 2}px`
  }
  line.onmousedown = function (e) {
    let el = element || e.target.parentNode
    let elParent = el.parentNode
    let moveOffset
    let elSize = isX ? el.offsetWidth : el.offsetHeight
    let elParentSize = isX ? elParent.offsetWidth : elParent.offsetHeight
    let elOffset = isX ? el.offsetLeft : el.offsetTop
    let elParentOffset = isX ? elParent.offsetLeft : elParent.offsetTop
    let scrollEl = scrollElSelector ? document.querySelector(scrollElSelector) : document.documentElement
    let scrollSize = isX ? scrollEl.scrollLeft : scrollEl.scrollTop
    let moveValidFlag = true
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
        dashedLine.style.visibility = 'visible'
        if (isFlex) {
          dashedLine.style[direction] = isBefore ? `${elSize - moveOffset + elOffset - elParentOffset}px` : `${moveOffset + elParentOffset - elOffset}px`
        } else {
          dashedLine.style[direction] = isBefore ? `${elOffset + elSize - moveOffset}px` : `${moveOffset - elOffset}px`
        }
      }
    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
      dashedLine.style.visibility = 'hidden'
      if (moveValidFlag) {
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
        dashedLine.style[direction] = 0
        el.dispatchEvent(resize)
      }
    }
  }
  line.setAttribute('class', 'resize__line')
  return line
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    let options = {
      direction: [],
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
      let dashedLine = createDashedLineEl(direction, options)
      el.appendChild(dashedLine)
      let line = createLineEl(direction, el, options, dashedLine)
      el.appendChild(line)
    })
  }
}
