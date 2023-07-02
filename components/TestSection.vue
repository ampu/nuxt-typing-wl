<template>
  <section class="TestSection">
    <template v-if="apiText.pending.value">
      <h1 class="text-h4">
        Подождите...
      </h1>
    </template>

    <template v-if="!apiText.pending.value">
      <h1 class="text-h4">
        Наберите текст
        <small>(без кавычек)</small>
      </h1>

      <p>{{ apiText.data }}</p>

      <VTable>
        <col style="width:40%">
        <col>
        <tbody>
        <tr>
          <th>Осталось</th>
          <td><strong v-text="leftSeconds"/> {{ leftSecondsSuffix }}</td>
        </tr>
        <tr>
          <th>Ошибок</th>
          <td><strong v-text="errors"/></td>
        </tr>
        </tbody>
      </VTable>

      <VTextarea
        ref="textarea"
        :rows="5"
        variant="solo"
        counter
        no-resize
        v-model="userText"
      />
    </template>

    <div class="buttons">
      <VBtn
        @click="emit(`exit`)"
      >
        Назад
      </VBtn>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {ComponentPublicInstance} from 'vue'

import {TypeResult} from '~/utils/type-utils'

const emit = defineEmits<{
  (type: `next`, value: TypeResult): void,
  (type: `exit`): void,
  (type: `error`): void,
}>()

const textarea = ref<ComponentPublicInstance>()
const apiText = await useFetch<string>(`/api/text`, {
  lazy: true,
  server: false,
})
const userText = ref<string>(``)
const errors = ref<number>(0)

const [leftSeconds, leftMs, elapsedMs] = useCountdown(ref(true), MINUTE)
const leftSecondsSuffix = computed(() => formatSuffix(leftSeconds.value, [`секунда`, `секунды`, `секунд`]))

const getMatchingChars = (localUserText: string, isOk: boolean) => {
  const apiChars = Array.from(apiText.data.value ?? ``)
  const userChars = Array.from(localUserText).filter(Boolean)
  return userChars.filter((_, i) => !isOk ^ userChars[i] === apiChars[i]).length
}

const getOkChars = (localUserText = userText.value) => getMatchingChars(localUserText, true)
const getErrorChars = (localUserText = userText.value) => getMatchingChars(localUserText, false)

const getResult = () => {
  return {
    speed: Math.round(getOkChars() / (elapsedMs.value / MINUTE)),
    errors: errors.value,
  }
}

watchEffect(() => {
  if (textarea.value) {
    textarea.value!.$el.querySelector(`textarea`).focus()
  }
})

watchEffect(() => {
  if (apiText.error.value) {
    emit(`error`)
  }
})

watchEffect(() => {
  if (leftMs.value <= 0 || apiText.data.value === userText.value) {
    emit(`next`, getResult())
  }
})

watch(userText, (newUserText, oldUserText) => {
  const newErrors = getErrorChars(newUserText)
  const oldErrors = getErrorChars(oldUserText)
  if (newErrors > oldErrors) {
    errors.value += 1
  }
})
</script>

<style lang="scss" scoped>
.TestSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 50px;
}
</style>
