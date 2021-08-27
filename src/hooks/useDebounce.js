const useDebounce = (fn, delay) => {
  let timer

  const next = (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return next
}

export default useDebounce