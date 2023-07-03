<template>
  <VCard
    class="container"
    :class="{[`display-mobile`]: display.mobile.value}"
  >
    <VWindow
      class="window"
      :modelValue="state"
    >
      <VWindowItem :value="States.ABOUT">
        <AboutSection
          v-if="state.isAbout"
          :error="error"
          @next="onTest"
          @exit="onExit"
        />
      </VWindowItem>

      <VWindowItem :value="States.TEST">
        <TestSection
          v-if="state.isTest"
          @next="onResult"
          @exit="onExit"
          @error="onError"
        />
      </VWindowItem>

      <VWindowItem :value="States.RESULT">
        <ResultSection
          v-if="state.isResult"
          :result="result!"
          @back="onTest"
          @exit="onExit"
        />
      </VWindowItem>
    </VWindow>
  </VCard>
</template>

<script lang="ts" setup>
import {useDisplay} from 'vuetify'

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
const display = useDisplay()

const onExit = () => {
  error.value = false
  state.value = States.ABOUT
}

const onError = () => {
  error.value = true
  state.value = States.ABOUT
}

const onTest = () => {
  error.value = false
  state.value = States.TEST
}

const onResult = (newResult: TypeResult) => {
  result.value = newResult
  state.value = States.RESULT
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-flow: column;
  box-shadow: none;
}

.window {
  padding: 12px;
}
</style>
