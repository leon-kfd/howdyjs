export const createDom = function (tag, className, innerText) {
  let el = document.createElement(tag)
  el.setAttribute('class', className)
  if (innerText) el.innerText = innerText
  return el
}

export const clone = function (obj) {
  var newObj = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          newObj[key] = clone(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
  }
  return newObj
}
