<template>
  <div>
    Manual control <br/>
    <NuxtLayout :name="layout">
      Default slot <br/>
      <button @click="layout ? layout = null : layout = 'examples/custom'">
        Switch layout
      </button>
      <br/>
      <template #header>
        Header slot<br/>
      </template>
    </NuxtLayout>
    <NuxtLink to="/">
      Back to home<br/>
    </NuxtLink>
  </div>
</template>

<script>
definePageMeta({
  layout: false
})
export default {
  data: () => ({
    layout: 'examples/custom'
  })
}
</script>
