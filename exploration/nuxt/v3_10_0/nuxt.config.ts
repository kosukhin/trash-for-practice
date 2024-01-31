// https://nuxt.com/docs/api/configuration/nuxt-config
import {createResolver} from "@nuxt/kit";

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    sharedPrerenderData: true
  },
  hooks: {
    // Доп настройки на роутер
    'pages:routerOptions' ({ files }) {
      const resolver = createResolver(import.meta.url)
      // add a route
      files.push({
        path: resolver.resolve('./runtime/app/router-options'),
        optional: true
      })
    }
  }
})
