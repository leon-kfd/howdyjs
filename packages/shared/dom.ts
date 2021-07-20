// fast create dom with id
export function createIdDom (tag: string, id: string, innerText?: string) {
  const el = document.createElement(tag);
  el.setAttribute('id', id);
  if (innerText) {
    el.innerText = innerText;
  }
  return el;
}

// fast create dom with class
export function createClassDom (tag: string, className: string, innerText?: string) {
  let el = document.createElement(tag);
  el.setAttribute('class', className);
  if (innerText) el.innerText = innerText;
  return el;
}

// insert an element after target element
export function insertAfter (newEl: HTMLElement, targetEl: HTMLElement) {
  const parentEl = targetEl.parentNode as HTMLElement;
  if (parentEl.lastChild === targetEl) {
    parentEl.appendChild(newEl);
  } else {
    parentEl.insertBefore(newEl, targetEl.nextSibling);
  }
}

export function getComputedStyle (el: HTMLElement, name: string, formatToNumber = false) {
  let result: string | number = window.getComputedStyle(el)[name as any];
  if (!result) return;
  if (formatToNumber) {
    const match = result.match(/\d+/);
    if (match) result = ~~result[0];
  }
  return result;
}

export function getComputedStyleList (el: HTMLElement, names: string[], formatToNumber = false) {
  const results: Record<string, string | number> = {};
  const styles = window.getComputedStyle(el);
  names.map(name => {
    let result: string | number = styles[name as any];
    if (formatToNumber) {
      const match = result.match(/\d+/);
      if (match) result = ~~match[0];
    }
    results[name] = result;
  });
  return results;
}