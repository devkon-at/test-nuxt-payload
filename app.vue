<script setup lang="ts">
const { data } = await useFetch('/test')
</script>

<template>
  <div>
    <div>
      Payload Data: {{ data }}
    </div>
    <NuxtWelcome />
  </div>
</template>
