const getScrollbarWidth = () => {
  const el = document.createElement('div')
  el.style.cssText = 'width:100px;height:100px;overflow-y:scroll'
  document.body.appendChild(el)
  const scrollbarWidth = el.offsetWidth - el.clientWidth
  document.body.removeChild(el)
  return scrollbarWidth
}
class ToDrag {
  constructor({ el, options }) {
    this.el = el instanceof HTMLElement ? el : document.querySelector(el)
    this.scrollbarWidth = getScrollbarWidth()
    this.isTouch = 'ontouchstart' in document.documentElement
    this.isDrag = false
    this.left = 0
    this.top = 0
    this.startLeft = 0
    this.startTop = 0
    this.width = 0
    this.height = 0
    this.adsorb = options.adsorb
    this.adsorbOffset = options.adsorbOffset
    this.transitionDuration = options.transitionDuration / 1000
    this.transitionTimingFunction = options.transitionTimingFunction

    if (options.moveCursor) {
      this.el.style.cursor = 'move'
    }

    // init
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleMousedown = this.handleMousedown.bind(this)
    this.moveEvent = this.moveEvent.bind(this)
    this.endEvent = this.endEvent.bind(this)
    this.init()
  }

  init () {
    const { left, top, width, height } = this.el.getBoundingClientRect()
    this.left = left
    this.top = top
    this.width = width
    this.height = height
    this.maxX = document.body.scrollWidth > window.innerWidth ? window.innerWidth - this.width - this.scrollbarWidth : window.innerWidth - this.width
    this.maxY = document.body.scrollHeight > window.innerHeight ? window.innerHeight - this.height - this.scrollbarWidth : window.innerHeight - this.height
    if (this.isTouch) {
      this.el.addEventListener('touchstart', this.handleTouchStart)
    } else {
      this.el.addEventListener('mousedown', this.handleMousedown)
    }
    this.handleAdsorb()
  }

  handleMousedown (e) {
    const { x, y } = e
    this.setStartInfo(x, y)
    document.addEventListener('mousemove', this.moveEvent)
    document.addEventListener('mouseup', this.endEvent)
  }

  handleTouchStart (e) {
    const x = this.isTouch ? e.changedTouches[0].clientX : e.x
    const y = this.isTouch ? e.changedTouches[0].clientY : e.y
    this.setStartInfo(x, y)
    document.addEventListener('touchmove', this.moveEvent, { passive: false })
    document.addEventListener('touchend', this.endEvent)
  }

  setStartInfo (x, y) {
    const { top, left, width, height } = this.el.getBoundingClientRect()
    this.width = width
    this.height = height
    this.startX = x - left
    this.startY = y - top
    this.isDrag = true
    this.el.style.transition = ''
    this.maxX = document.body.scrollWidth > window.innerWidth ? window.innerWidth - this.width - this.scrollbarWidth : window.innerWidth - this.width
    this.maxY = document.body.scrollHeight > window.innerHeight ? window.innerHeight - this.height - this.scrollbarWidth : window.innerHeight - this.height
  }

  moveEvent (e) {
    if (!this.isDrag) {
      return
    }
    e.preventDefault()
    const x = this.isTouch ? e.changedTouches[0].clientX : e.x
    const y = this.isTouch ? e.changedTouches[0].clientY : e.y
    const moveX = x - this.startX
    const moveY = y - this.startY
    this.left = Math.min(this.maxX, moveX)
    this.top = Math.min(this.maxY, moveY)
    if (this.left < 0) this.left = 0
    if (this.top < 0) this.top = 0
    this.el.style.left = this.left + 'px'
    this.el.style.top = this.top + 'px'
  }

  endEvent () {
    this.isDrag = false
    document.removeEventListener('mousemove', this.moveEvent)
    document.removeEventListener('mouseup', this.endEvent)
    document.removeEventListener('touchmove', this.moveEvent)
    document.removeEventListener('touchend', this.endEvent)
    this.handleAdsorb()
    const toDragEnd = document.createEvent('HTMLEvents')
    toDragEnd.initEvent('toDragEnd', false, false)
    const { left, top, width, height, maxX, maxY } = this
    toDragEnd['left'] = left
    toDragEnd['top'] = top
    toDragEnd['width'] = width
    toDragEnd['height'] = height
    toDragEnd['maxX'] = maxX
    toDragEnd['maxY'] = maxY
    this.el.dispatchEvent(toDragEnd)
  }

  handleAdsorb () {
    const endPoint = [this.left + this.width / 2, this.top + this.height / 2]
    const maxPoint = [window.innerWidth, window.innerHeight]
    this.el.style.transition = `left ${this.transitionDuration}s ${this.transitionTimingFunction}, 
                                top ${this.transitionDuration}s ${this.transitionTimingFunction}`
    if (this.adsorb === 1) {
      // 左右吸附
      if (endPoint[0] <= window.innerWidth / 2) {
        // left
        this.left = this.adsorbOffset
      } else {
        // right
        this.left = this.maxX - this.adsorbOffset
      }
    } else if (this.adsorb === 2) {
      // 四方向吸附
      const k1 = maxPoint[1] / maxPoint[0]
      const k2 = maxPoint[1] / -maxPoint[0]
      const k3 = endPoint[1] / endPoint[0]
      const k4 = endPoint[1] / (endPoint[0] - maxPoint[0])
      if (k1 >= k3 && k2 < k4) {
        // top
        this.top = this.adsorbOffset
      } else if (k1 >= k3 && k2 >= k4) {
        // right
        this.left = this.maxX - this.adsorbOffset
      } else if (k1 < k3 && k2 >= k4) {
        // bottom
        this.top = this.maxY - this.adsorbOffset
      } else {
        // left
        this.left = this.adsorbOffset
      }
      if (this.adsorbOffset) {
        if (this.top === 0) this.top = this.adsorbOffset
        if (this.top === this.maxY) this.top = this.maxY - this.adsorbOffset
        if (this.left === 0) this.left = this.adsorbOffset
        if (this.left === this.maxX) this.left = this.maxX - this.adsorbOffset
      }
    }
    this.el.style.left = this.left + 'px'
    this.el.style.top = this.top + 'px'
  }

  destroy () {
    if (this.isTouch) {
      this.el.removeEventListener('touchstart', this.handleTouchStart)
    } else {
      this.el.removeEventListener('mousedown', this.handleMousedown)
    }
  }
}

const inserted = (el, binding) => {
  const { value } = binding
  const options = {
    moveCursor: true,
    adsorb: 0,
    adsorbOffset: 0,
    transitionDuration: 400,
    transitionTimingFunction: 'ease-in-out',
    ...value
  }
  el.$toDarg = new ToDrag({
    el,
    options
  })
}

const unbind = (el) => {
  el.$toDarg && el.$toDarg.destroy()
}

export { ToDrag }

export default {
  install (Vue, userOptions) {
    Vue.directive('to-drag', {
      inserted,
      unbind
    })
  },
  inserted,
  unbind,
  ToDrag
}
