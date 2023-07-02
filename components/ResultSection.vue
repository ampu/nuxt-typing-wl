<template>
  <section class="ResultSection">
    <h1 class="text-h4">
      Ваши результаты
    </h1>

    <VTable>
      <tbody>
      <tr>
        <th>Скорость</th>
        <td><strong v-text="props.result.speed"/> символов в минуту</td>
      </tr>
      <tr>
        <th>Ошибок</th>
        <td><strong v-text="props.result.errors"/></td>
      </tr>
      </tbody>
    </VTable>

    <div class="buttons">
      <VBtn
        @click="emit(`back`)"
        color="primary"
        v-focus
      >
        Попробовать еще раз
      </VBtn>

      <VBtn
        @click="emit(`exit`)"
      >
        На главную
      </VBtn>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {TypeResult} from '~/utils/type-utils'

const props = defineProps<{
  result: TypeResult,
}>()

const emit = defineEmits<{
  (type: `back`): void,
  (type: `exit`): void,
}>()
</script>

<style lang="scss" scoped>
.ResultSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 50px;
}
</style>
