import { ObjectDirective } from 'vue';

export interface CompatibleDirective extends ObjectDirective {
  install?: any
  inserted?: any,
  unbind?: any
}

export const createIdDom = function (tag: string, id: string, innerText?: string) {
  const el = document.createElement(tag);
  el.setAttribute('id', id);
  if (innerText) {
    el.innerText = innerText;
  }
  return el;
};

export const createClassDom = function (tag: string, className: string, innerText?: string) {
  let el = document.createElement(tag);
  el.setAttribute('class', className);
  if (innerText) el.innerText = innerText;
  return el;
};

export const insertAfter = function (newEl: HTMLElement, targetEl: HTMLElement) {
  const parentEl = targetEl.parentNode as HTMLElement;
  if (parentEl.lastChild === targetEl) {
    parentEl.appendChild(newEl);
  } else {
    parentEl.insertBefore(newEl, targetEl.nextSibling);
  }
};

export const clone = function (obj: any) {
  let newObj: any = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          newObj[key] = clone(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  return newObj;
};
