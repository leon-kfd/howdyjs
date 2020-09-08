const getScrollbarWidth = () => {
  const el = document.createElement('div')
  el.style.cssText = 'width:100px;height:100px;overflow-y:scroll'
  document.body.appendChild(el)
  const scrollbarWidth = el.offsetWidth - el.clientWidth
  document.body.removeChild(el)
  return scrollbarWidth
}

const defaultOptions = {
  moveCursor: true,
  adsorb: 0,
  adsorbOffset: 0,
  transitionDuration: 400,
  transitionTimingFunction: 'ease-in-out',
  forbidBodyScroll: true
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
    this.options = {
      ...defaultOptions,
      ...options
    }
    this.options.transitionDuration = this.options.transitionDuration / 1000

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
    if (this.options.moveCursor) {
      this.el.style.cursor = 'move'
    }
    if (this.options.adsorb) {
      this.handleAdsorb()
    }
    setTimeout(() => {
      this.emitEvent('toDragInit')
    })
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
    document.body.style.userSelect = 'none'
    if (this.options.forbidBodyScroll) document.body.style.overflow = 'hidden'
    this.emitEvent('toDragStart')
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
    this.emitEvent('toDragMove')
  }

  endEvent () {
    this.isDrag = false
    document.removeEventListener('mousemove', this.moveEvent)
    document.removeEventListener('mouseup', this.endEvent)
    document.removeEventListener('touchmove', this.moveEvent)
    document.removeEventListener('touchend', this.endEvent)
    document.body.style.userSelect = 'auto'
    if (this.options.forbidBodyScroll) document.body.style.overflow = 'visible'
    this.handleAdsorb()
    this.emitEvent('toDragEnd')
  }


  handleAdsorb () {
    const endPoint = [this.left + this.width / 2, this.top + this.height / 2]
    const maxPoint = [window.innerWidth, window.innerHeight]
    this.el.style.transition = `left ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}, 
                                top ${this.options.transitionDuration}s ${this.options.transitionTimingFunction}`
    if (this.options.adsorb === 1) {
      // 左右吸附
      if (endPoint[0] <= window.innerWidth / 2) {
        // left
        this.left = this.options.adsorbOffset
      } else {
        // right
        this.left = this.maxX - this.options.adsorbOffset
      }
    } else if (this.options.adsorb === 2) {
      // 四方向吸附
      const k1 = maxPoint[1] / maxPoint[0]
      const k2 = maxPoint[1] / -maxPoint[0]
      const k3 = endPoint[1] / endPoint[0]
      const k4 = endPoint[1] / (endPoint[0] - maxPoint[0])
      if (k1 >= k3 && k2 < k4) {
        // top
        this.top = this.options.adsorbOffset
      } else if (k1 >= k3 && k2 >= k4) {
        // right
        this.left = this.maxX - this.options.adsorbOffset
      } else if (k1 < k3 && k2 >= k4) {
        // bottom
        this.top = this.maxY - this.options.adsorbOffset
      } else {
        // left
        this.left = this.options.adsorbOffset
      }
      if (this.options.adsorbOffset) {
        if (this.top === 0) this.top = this.options.adsorbOffset
        if (this.top === this.maxY) this.top = this.maxY - this.options.adsorbOffset
        if (this.left === 0) this.left = this.options.adsorbOffset
        if (this.left === this.maxX) this.left = this.maxX - this.options.adsorbOffset
      }
    }
    this.el.style.left = this.left + 'px'
    this.el.style.top = this.top + 'px'
  }

  emitEvent (type) {
    const evnet = document.createEvent('HTMLEvents')
    evnet.initEvent(type, false, false)
    const { left, top, width, height, maxX, maxY } = this
    evnet['left'] = left
    evnet['top'] = top
    evnet['width'] = width
    evnet['height'] = height
    evnet['maxX'] = maxX
    evnet['maxY'] = maxY
    this.el.dispatchEvent(evnet)
  }

  destroy () {
    if (this.isTouch) {
      this.el.removeEventListener('touchstart', this.handleTouchStart)
    } else {
      this.el.removeEventListener('mousedown', this.handleMousedown)
    }
  }
}

const inserted = (el, binding, userOptions) => {
  const { value } = binding
  const customGlobalOptions = userOptions || {}
  const options = {
    ...customGlobalOptions,
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
