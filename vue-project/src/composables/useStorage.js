import { ref, watch } from 'vue'

export function useStorage(key, externalValue = null) {
  let storedValue = read()

  let visibleValue
  if (storedValue) {
    visibleValue = ref(storedValue)
  } else {
    visibleValue = ref(externalValue)
    write()
  }

  // { deep: true } - watch for changes inside an objects
  watch(visibleValue, write, { deep: true })

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (visibleValue.value === null || visibleValue.value === '') {
      localStorage.removeItem(key)
    } else {
      // JSON.stringify to handle arrays
      localStorage.setItem(key, JSON.stringify(visibleValue.value))
    }
  }

  return visibleValue
}
