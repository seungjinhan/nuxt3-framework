<template>
  <div>
    Same layout as home
    <NuxtLink to="/examples/with-layouts">
      Back to home
    </NuxtLink>
  </div>
</template>

<script>
definePageMeta({
  layout: 'examples/custom'
})
</script>
