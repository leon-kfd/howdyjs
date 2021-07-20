import ToDrag from '@howdyjs/to-drag';
// import ToDrag  from '../to-drag';
export type ControlOptions = {
  moveCursor?: boolean,
  forbidBodyScroll?: boolean,
  parentSelector?: string,
  disabled?: () => boolean,
  arrowOptions?: ArrowOptions,
  absoluteLimitMode?: 0 | 1 | 2
}

export type ArrowOptions = {
  size?: number,
  lineWidth?: number,
  lineColor?: string,
  padding?: number;
}

class Control extends ToDrag {
  arrowCtx: HTMLElement | null = null
  private controlOptions: ControlOptions
  constructor ({ el, options } : {el: string | HTMLElement, options?: ControlOptions}) {
    super({
      el,
      options: {
        adsorb: 0,
        adsorbOffset: 0,
        isAbsolute: true,
        positionMode: 1,
        ...options
      }
    });
    this.controlOptions = options || {};
    this.initControl();
  }

  initControl() {
    const { position } = getComputedStyle(this.el);
    if (!['fixed', 'absolute'].includes(position)) {
      throw new Error('Control just work in the element which position is fixed or absolute.');
    }
    this.arrowCtx = this.createResizeArrow(this.controlOptions?.arrowOptions);
    this.el.appendChild(this.arrowCtx);
  }

  arrowStartX = 0
  arrowStartY = 0
  elWidth = 0
  elHeight = 0
  resizeFlag = false
  arrowMouseDownEvent = (e: MouseEvent) => {
    const { x, y } = e;
    const { width, height, left, top } = this.el.getBoundingClientRect();
    const { width: parentWidth, height: parentHeight } = this.parent.getBoundingClientRect();
    this.arrowStartX = x;
    this.arrowStartY = y;
    this.elWidth = width;
    this.elHeight = height;
    this.resizeFlag = true;
    const maxX = parentWidth - left;
    const maxY = parentHeight - top;
    setTimeout(() => {
      this.isDrag = false;
    });
    document.onmousemove = (e: MouseEvent) => {
      if (!this.resizeFlag) return;
      const { x, y } = e;
      // todo: valid the max and min size.
      this.el.style.width = `${Math.min(this.elWidth + x - this.arrowStartX, maxX)}px`;
      this.el.style.height = `${Math.min(this.elHeight + y - this.arrowStartY, maxY)}px`;
    };
    document.onmouseup = () => {
      this.resizeFlag = false;
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  private createResizeArrow (arrowOptions?: ArrowOptions) {
    const options = {
      size: 8,
      lineWidth: 2,
      lineColor: '#9a9a9a',
      padding: 2,
      ...arrowOptions
    };
    const arrow = document.createElement('div') as HTMLElement;
    const cssText = `
      position: absolute;
      right: ${options.padding}px; 
      bottom: ${options.padding}px;
      width: ${options.size}px;
      height: ${options.size}px;
      border-bottom: ${options.lineWidth}px solid ${options.lineColor};
      border-right: ${options.lineWidth}px solid ${options.lineColor};
      cursor: se-resize;
    `;
    arrow.style.cssText = cssText;
    arrow.addEventListener('mousedown', this.arrowMouseDownEvent);
    return arrow;
  }

  destroyControl () {
    this.destroy();
    this.arrowCtx?.removeEventListener('mousedown', this.arrowMouseDownEvent);
  }
}

export { 
  Control
};