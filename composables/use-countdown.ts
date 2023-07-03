import {Ref} from 'vue'

const noop = () => {
}

export const useCountdown = (
  isActive: Ref<boolean>,
  timeout: number,
  onDone: VoidFunction = noop,
) => {
  const currentTimestamp = ref<number>(0)
  const startTimestamp = ref<number>(currentTimestamp.value)

  const elapsedMs = computed(() => currentTimestamp.value - startTimestamp.value)
  const leftMs = computed(() => timeout - elapsedMs.value)
  const leftSeconds = computed(() => Math.ceil(leftMs.value / SECOND))

  watchEffect(() => {
    if (!isActive.value) {
      return
    }
    startTimestamp.value = currentTimestamp.value = Date.now()
  })

  useInterval(isActive, () => {
    currentTimestamp.value = Date.now()
  }, SECOND)

  watchEffect(() => {
    if (leftSeconds.value <= 0) {
      onDone()
    }
  })

  return [
    leftSeconds,
    leftMs,
    elapsedMs,
  ]
}
