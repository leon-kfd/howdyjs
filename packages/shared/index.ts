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