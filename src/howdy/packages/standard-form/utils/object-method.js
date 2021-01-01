const clone = function (obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj.constructor === Date) return new Date(obj)
  if (obj.constructor === RegExp) return new RegExp(obj)
  // eslint-disable-next-line
  let constructor = obj.constructor()
  var newObj = new obj.constructor() // 保持继承链
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 不遍历其原型链上的属性
      var val = obj[key]
      newObj[key] = typeof val === 'object' ? clone(val) : val
    }
  }
  return newObj
}

const addPropertyFromObj = function (obj, addObj) {
  if (typeof addObj === 'object') {
    Object.keys(addObj).map(key => {
      obj[key] = addObj[key]
    })
  } else {
    throw new Error('Argument must be an object')
  }
}

export { clone, addPropertyFromObj }
