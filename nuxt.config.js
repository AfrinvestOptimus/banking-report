export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // ssr: false,
  //mode: 'spa',
  target: 'static',
  router: {
    base: '/banking-report/',
  },
  head: {
    title: 'Afrinvest 2023 Banking Report',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Find out how the Nigerian banking sector has remained resilient amidst constraints from the pandemic, weak domestic macroeconomic conditions, and stringent regulations.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'banking report 2023, 2023 banking report',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  /*router: {
    base: '/banking-report/',
  },*/

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scrollTo.js' },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/vue-observe.js' },
    { src: '~/plugins/vue-alert.js', mode: 'client' }
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
  modules: [
    'vue-scrollto/nuxt',
    'nuxt-paystack',
    'vue-social-sharing/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ['vee-validate'] },
}
