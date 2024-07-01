// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon', "shadcn-nuxt", '@nuxtjs/supabase'],
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/profile',
      include: ['/user/profile'],
      exclude: []
    }
    },
    app: {
      head: {
        title: 'Blogger'
      }
    }
})