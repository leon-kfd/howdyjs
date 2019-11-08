export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    console.log(arg, value)
  }
}
