<template>
  <div class="Index">
    <AboutSection
      v-if="state.isAbout"
      :error="error"
      @next="onTest"
      @exit="onExit"
    />

    <TestSection
      v-if="state.isTest"
      @next="onResult"
      @exit="onExit"
      @error="onError"
    />

    <ResultSection
      v-if="state.isResult"
      :result="result!"
      @back="onTest"
      @exit="onExit"
    />
  </div>
</template>

<script lang="ts" setup>
import {TypeResult} from '~/utils/type-utils'

type State = {
  id: number,
  name: string,
  isAbout?: boolean,
  isTest?: boolean,
  isResult?: boolean,
}

const States: Record<string, State> = {
  ABOUT: {id: 1, name: `about`, isAbout: true},
  TEST: {id: 2, name: `test`, isTest: true},
  RESULT: {id: 3, name: `result`, isResult: true},
}

const state = ref<State>(States.ABOUT)
const error = ref<boolean>(false)
const result = ref<TypeResult>()
const dir = ref(1)

const onExit = () => {
  error.value = false
  state.value = States.ABOUT
  dir.value = -1
}

const onError = () => {
  error.value = true
  state.value = States.ABOUT
  dir.value = -1
}

const onTest = () => {
  error.value = false
  state.value = States.TEST
  dir.value = 1
}

const onResult = (newResult: TypeResult) => {
  result.value = newResult
  state.value = States.RESULT
  dir.value = 1
}
</script>

<style lang="scss" scoped>
.Index {
  position: relative;
  display: flex;
  flex-flow: column;
}
</style>
