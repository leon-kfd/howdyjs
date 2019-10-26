const createLineEl = (direction, element, options) => {
  let { scrollElSelector, lineColor, lineWidth, lineHoverColor, lineHoverWidth, zIndex } = options
  let line = document.createElement('div')
  let cssText = `position: absolute;background: ${lineColor};z-index: ${zIndex}`
  let isX = direction === 'left' || direction === 'right'
  let isBefore = direction === 'right' || direction === 'bottom'
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
    let { offsetTop, offsetLeft } = elParent
    let move, dashedLine
    let elSize = isX ? el.offsetWidth : el.offsetHeight
    let elParentSize = isX ? elParent.offsetWidth : elParent.offsetHeight
    let scrollSize
    if (scrollElSelector) {
      let scrollEl = document.querySelector(scrollElSelector)
      scrollSize = isX ? scrollEl.scrollLeft : scrollEl.scrollTop
    } else {
      scrollSize = isX ? document.documentElement.scrollLeft : document.documentElement.scrollTop
    }
    document.onmousemove = function (e) {
      event.preventDefault()
      move = isX ? e.clientX - offsetLeft + scrollSize : e.clientY - offsetTop + scrollSize
      dashedLine = el.querySelector('.resize__dashed-line')
      if (move >= 0 && move <= elParentSize) {
        dashedLine.style.visibility = 'visible'
        dashedLine.style[direction] = isBefore ? `${elSize - move}px` : `${move - elParentSize + elSize}px`
      }
    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
      dashedLine.style.visibility = 'hidden'
      if (move >= 0 && move <= elParentSize) {
        let resize = document.createEvent('HTMLEvents')
        resize.initEvent('resize')
        resize[isX ? 'resizeWidth' : 'resizeHeight'] = isBefore ? move : elParentSize - move
        resize[isX ? 'resizeWidthPercent' : 'resizeHeightPercent'] = (isBefore ? move / elParentSize : (elParentSize - move) / elParentSize) * 100
        dashedLine.style[direction] = 0
        el.dispatchEvent(resize)
      }
    }
  }
  line.setAttribute('class', 'resize__line')
  return line
}
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
      let line = createLineEl(direction, el, options)
      let dashedLine = createDashedLineEl(direction, options)
      el.appendChild(line)
      el.appendChild(dashedLine)
    })
    // let scrollElSelector = options.scrollElSelector
    // let direction = arg || 'right'
    // let line = createLineEl(direction, el, scrollElSelector)
    // let dashedLine = createDashedLineEl(direction)
    // el.appendChild(line)
    // el.appendChild(dashedLine)
  }
}
