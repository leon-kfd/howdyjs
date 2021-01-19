import { DirectiveHook, App } from 'vue';
import './img-zoom.scss';
import { createIdDom } from './utils';

const groupMap = {} as Record<string, GroupItem[]>;

export interface GroupItem {
  title?: string,
  imgSrc: string
}

export interface ImgZoomElement extends HTMLElement {
  $imgZoom?: ImgZoom
}

export interface ImgZoomOptions {
  imgSrc?: string,
  group?: string,
  title?: string,
  zoomCursor?: string
  preventDefault?: boolean,
  showCloseBtn?: boolean
}

class ImgZoom {
  private el: ImgZoomElement
  private imgSrc: string
  private group?: string
  private groupIndex?: number
  private clickHandler: EventListener
  constructor({ el, options }: {el: string | HTMLElement, options?: ImgZoomOptions }) {
    if (el instanceof HTMLElement) {
      this.el = el;
    } else {
      this.el = document.querySelector(el) as HTMLElement;
    }
    this.imgSrc = options?.imgSrc || this.el.getAttribute('src') as string;
    this.el.$imgZoom = this;
    if (options?.group) {
      this.group = options.group;
      if (groupMap[this.group]) {
        const index = groupMap[this.group].push({
          title: options.title,
          imgSrc: this.imgSrc
        });
        this.groupIndex = index - 1;
      } else {
        groupMap[this.group] = [{
          title: options.title,
          imgSrc: this.imgSrc
        }];
        this.groupIndex = 0;
      }
    }
    if (options?.zoomCursor) {
      this.el.style.cursor = 'zoom-in';
    }
    this.clickHandler = e => {
      if (options?.preventDefault) {
        e.preventDefault();
      }
      const mask = createIdDom('div', '__imgZoomMask');
      document.body.append(mask);
      const loader = createIdDom('div', '__imgZoomLoader');
      mask.appendChild(loader);
      const img = new Image();
      img.src = this.imgSrc;
      img.setAttribute('id', '__img');
      img.onload = () => {
        if (!mask.contains(img)) {
          mask.appendChild(img);
        }
        img.style.display = 'block';
        loader.style.display = 'none';
      };
      const closeEvent = () => {
        mask.style.opacity = '0';
        mask.style.transition = 'all 0.4s';
        setTimeout(() => {
          mask?.parentNode?.removeChild(mask);
        }, 400);
      };
      if (options?.showCloseBtn) {
        const closeBtn = createIdDom('div', '__closeBtn');
        closeBtn.addEventListener('click', closeEvent);
        mask.appendChild(closeBtn);
      } else {
        mask.addEventListener('click', closeEvent);
        if (options?.zoomCursor) {
          mask.style.cursor = 'zoom-out';
        }
      }
      let title: HTMLElement;
      if (options?.title) {
        title = createIdDom('div', '__imgZoomTitle', options.title);
        mask.appendChild(title);
      }
      if (this.group && groupMap[this.group]) {
        let index = this.groupIndex as number;
        const footer = createIdDom('div', '__imgZoomFooter', `${index + 1} / ${groupMap[this.group].length}`);
        mask.appendChild(footer);
        const leftBtn = createIdDom('div', '__leftBtn');
        leftBtn.addEventListener('click', e => {
          if (index > 0) {
            img.src = groupMap[this.group as string][--index].imgSrc;
            if (!img.complete) {
              img.style.display = 'none';
              loader.style.display = 'block';
            }
            footer.innerText = `${index + 1} / ${groupMap[this.group as string].length}`;
            if (title) {
              title.innerText = `${groupMap[this.group as string][index].title}`;
            }
          }
          
          e.stopPropagation();
        });
        mask.appendChild(leftBtn);
        const rightBtn = createIdDom('div', '__rightBtn');
        rightBtn.addEventListener('click', e => {
          if (index < groupMap[this.group as string].length - 1) {
            img.src = groupMap[this.group as string][++index].imgSrc;
            if (!img.complete) {
              img.style.display = 'none';
              loader.style.display = 'block';
            }
            footer.innerText = `${index + 1} / ${groupMap[this.group as string].length}`;
            if (title) {
              title.innerText = `${groupMap[this.group as string][index].title}`;
            }
          }
          e.stopPropagation();
        });
        mask.appendChild(rightBtn);
      }
      
    };
    this.el.addEventListener('click', this.clickHandler);
  }
  destory () {
    this.el.removeEventListener('click', this.clickHandler);
    if (this.group && this.groupIndex && this.groupIndex >= 0) {
      const index = groupMap[this.group].findIndex(item => item.imgSrc = this.imgSrc);
      if (~index) {
        groupMap[this.group].splice(index, 1);
      }
    }
  }
}

const mounted:DirectiveHook = (el, binding) => {
  const { arg, value } = binding;
  let options:ImgZoomOptions = {};
  if (!value) {
    options.imgSrc = el.getAttribute('src');
  } else if (typeof value === 'string') {
    options.imgSrc = value;
  } else {
    options = value;
  }
  if (arg) {
    options.group = arg;
  }
  new ImgZoom({
    el,
    options
  });
};

const unmounted:DirectiveHook = (el: ImgZoomElement) => {
  el.$imgZoom && el.$imgZoom.destory();
};

export const ImgZoomDirective = {
  install (Vue:App) {
    Vue.directive('img-zoom', {
      mounted,
      unmounted,
      // @ts-ignore
      inserted: mounted,
      unbind: unmounted
    });
  },
  mounted,
  unmounted,
  inserted: mounted,
  unbind: unmounted
};

export default ImgZoom;