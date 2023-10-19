export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    '@nuxtjs/supabase',
  ],

  nitro: {
    prerender: {
      // https://github.com/nuxt-themes/docus/issues/944#issuecomment-1634580369
      concurrency: 1,
      // https://github.com/nuxt-themes/docus/issues/944#issuecomment-1634798275
      failOnError: false,
    },
  },

  // see https://supabase.nuxtjs.org/get-started#options
  supabase: {
    redirectOptions: {
      // no login required for those pages
      exclude: [
        // root page
        '/',
        '/introduction/*',
      ],
    },
  },
})
