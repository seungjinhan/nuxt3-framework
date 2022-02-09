import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    theme: {
      primaryColor: 'base_primary_extends',
      secondaryColor: 'base_secondary_extends'
    }
  }
})
