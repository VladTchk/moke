export default function throttle(func, ms) {
  let isThrottle = false
  let saveArgs
  let saveThis

  function wrapper() {
    if (isThrottle) {
      saveArgs = arguments
      saveThis = this
      return
    }
    func.apply(this, arguments)

    isThrottle = true

    setTimeout(() => {
      isThrottle = false
      if (saveArgs) {
        wrapper.apply(saveThis, saveArgs)
        saveArgs = saveThis = null
      }
    }, ms)
  }

  return wrapper
}
