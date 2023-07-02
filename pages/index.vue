<template>
  <div class="page-layout">
    <main class="page-main">
      <AboutSection v-if="state.isAbout"/>
      <TestSection v-if="state.isTest"/>
      <ResultSection v-if="state.isResult"/>
    </main>
  </div>
</template>

<script lang="ts" setup>
type State = {
  name: string,
  isAbout?: boolean,
  isTest?: boolean,
  isResult?: boolean,
}

const States: Record<string, State> = {
  ABOUT: {name: `about`, isAbout: true},
  TEST: {name: `test`, isTest: true},
  RESULT: {name: `result`, isResult: true},
}

const state = ref<State>(States.ABOUT)
</script>
