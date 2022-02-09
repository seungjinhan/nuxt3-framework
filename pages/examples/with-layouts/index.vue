<template>
  <div>
    Welcome to Nuxt Layouts 👋
    <br />
    <NuxtLink to="/examples/with-layouts/manual">
      Manual layout
    </NuxtLink>
    <br/>
    <NuxtLink to="/examples/with-layouts/same">
      Same layout
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'examples/custom'
})
</script>
