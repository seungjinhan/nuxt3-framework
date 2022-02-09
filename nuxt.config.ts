import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  extends: './base',
  publicRuntimeConfig: {
    theme: {
      primaryColor: 'user_primary_color'
    }
  },
  nitro: {
    experiments: {
      wasm: true
    }
  },
  modules: [
    '~/modules/examples',
    '@nuxt/ui'
  ],
  components: {
    dirs: [
      '~/components',
      {
        path: '~/other-components-folder',
        extensions: ['vue'],
        prefix: 'nuxt'
      }
    ]
  }

  
})
