<script setup>
const themeConfig = useRuntimeConfig().theme
</script>

<template>
  <NuxtExampleLayout example="config-extends!!!">
    theme runtimeConfig
    <pre>{{ JSON.stringify(themeConfig, null, 2) }}</pre>
    <ExamplesBaseButton>Base Button</ExamplesBaseButton>
    <ExamplesFancyButton>Fancy Button</ExamplesFancyButton>
  </NuxtExampleLayout>
</template>

<style scoped>
pre {
  text-align: left;
}
</style>
