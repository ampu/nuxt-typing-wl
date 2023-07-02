<template>
  <Html lang="ru" class="page">
  <Head>
    <Title>Измеритель скорости печати</Title>
    <Link rel="icon" :href="favicon" type="image/svg+xml"/>
  </Head>
  <Body class="page-body">
  <NuxtPage class="page-layout"/>
  </Body>
  </Html>
</template>

<script setup lang="ts">
import favicon from '~/assets/favicon.svg'
</script>
