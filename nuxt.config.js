export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  //mode: 'spa',
  target: 'static',
  router: {
    base: '/banking-report/',
  },
  head: {
    title: 'banking-report',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scrollTo.js' },
    { src: '~/plugins/vee-validate.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    //'nuxt-vite',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Oswald: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['vue-scrollto/nuxt', 'nuxt-paystack'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ['vee-validate'] },
}
