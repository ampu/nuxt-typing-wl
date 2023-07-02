export const useProp = <T = string>(
  props: any,
  emit: (type: string, value: T) => void,
  name: string,
) => {
  return computed({
    get() {
      return props[name] as T
    },
    set(value: T) {
      emit(`update:${name}`, value)
    }
  })
}

export const usePropDeep = <T = string>(
  props: any,
  emit: (type: string, value: T) => void,
  name: string,
  key: string,
) => {
  return computed({
    get() {
      return props[name][key] as T
    },
    set(value: T) {
      const newValue = {...props[name], [key]: value}
      emit(`update:${name}`, newValue)
    }
  })
}
