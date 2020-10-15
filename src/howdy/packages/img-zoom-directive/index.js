import './img-zoom.scss'
import { createIdDom } from '../../utils/helper'
let groupMap = {}
class ImgZoom {
  constructor({ el, options }) {
    this.imgSrc = options.imgSrc || el.getAttribute('src')
    if (el instanceof HTMLElement) {
      this.el = el
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el)
    }
    this.el.$imgZoom = this
    if (options.group) {
      this.group = options.group
      if (groupMap[this.group]) {
        let index = groupMap[this.group].push({
          title: options.title,
          imgSrc: this.imgSrc
        })
        this.groupIndex = index - 1
      } else {
        groupMap[this.group] = [{
          title: options.title,
          imgSrc: this.imgSrc
        }]
        this.groupIndex = 0
      }
    }
    if (options.zoomCursor) el.style.cursor = 'zoom-in'
    this.clickHandler = e => {
      if (options.preventDefault) e.preventDefault()
      const mask = createIdDom('div', '__imgZoomMask')
      document.body.append(mask)
      const loader = createIdDom('div', '__imgZoomLoader')
      mask.appendChild(loader)
      const img = new Image()
      img.src = this.imgSrc
      img.setAttribute('id', '__img')
      img.onload = () => {
        if (!mask.contains(img)) mask.appendChild(img)
        img.style.display = 'block'
        loader.style.display = 'none'
      }
      const closeEvent = e => {
        mask.style.opacity = 0
        mask.style.transition = `all 0.4s`
        setTimeout(() => {
          mask.parentNode.removeChild(mask)
        }, 400)
      }
      if (options.showCloseBtn) {
        const closeBtn = createIdDom('div', '__closeBtn')
        closeBtn.addEventListener('click', closeEvent)
        mask.appendChild(closeBtn)
      } else {
        mask.addEventListener('click', closeEvent)
        if (options.zoomCursor) mask.style.cursor = 'zoom-out'
      }
      let title
      if (options.title) {
        title = createIdDom('div', '__imgZoomTitle', options.title)
        mask.appendChild(title)
      }
      if (groupMap[this.group]) {
        let index = this.groupIndex
        const footer = createIdDom('div', '__imgZoomFooter', `${index + 1} / ${groupMap[this.group].length}`)
        mask.appendChild(footer)
        const leftBtn = createIdDom('div', '__leftBtn')
        leftBtn.addEventListener('click', e => {
          if (index > 0) {
            img.src = groupMap[this.group][--index].imgSrc
            if (!img.complete) {
              img.style.display = 'none'
              loader.style.display = 'block'
            }
            footer.innerText = `${index + 1} / ${groupMap[this.group].length}`
            if (title) title.innerText = `${groupMap[this.group][index].title}`
          }
          e.stopPropagation()
        })
        mask.appendChild(leftBtn)
        const rightBtn = createIdDom('div', '__rightBtn')
        rightBtn.addEventListener('click', e => {
          if (index < groupMap[this.group].length - 1) {
            img.src = groupMap[this.group][++index].imgSrc
            if (!img.complete) {
              img.style.display = 'none'
              loader.style.display = 'block'
            }
            footer.innerText = `${index + 1} / ${groupMap[this.group].length}`
            if (title) title.innerText = `${groupMap[this.group][index].title}`
          }
          e.stopPropagation()
        })
        mask.appendChild(rightBtn)
      }
    }
    this.el.addEventListener('click', this.clickHandler)
  }
  destory () {
    this.el.removeEventListener('click', this.clickHandler)
    if (this.group && this.groupIndex >= 0) {
      let index = groupMap[this.group].findIndex(item => item.imgSrc = this.imgSrc)
      if (~index) {
        groupMap[this.group].splice(index, 1)
      }
    }
  }
}

const inserted = (el, binding) => {
  const { arg, value } = binding
  let options = {}
  if (!value) {
    options.imgSrc = el.getAttribute('src')
  } else if (typeof value === 'string') {
    options.imgSrc = value
  } else {
    options = value
  }
  if (arg) options.group = arg
  new ImgZoom({
    el,
    options
  })
}

const unbind = (el) => {
  el.$imgZoom && el.$imgZoom.destory()
}

export default {
  install (Vue, userOptions) {
    Vue.directive('img-zoom', {
      inserted,
      unbind,
      mounted: inserted,
      unmounted: unbind
    })
  },
  inserted,
  unbind,
  ImgZoom
}

export { ImgZoom }