export const insertAfter = function (newEl, targetEl) {
  const parentEl = targetEl.parentNode
  if (parentEl.lastChild === targetEl) {
    parentEl.appendChild(newEl)
  } else {
    parentEl.insertBefore(newEl, targetEl.nextSibling)
  }
}
