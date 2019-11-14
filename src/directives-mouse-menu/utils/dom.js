export const createDom = function (tag, className, innerText) {
  let el = document.createElement(tag)
  el.setAttribute('class', className)
  if (innerText) el.innerText = innerText
  return el
}
