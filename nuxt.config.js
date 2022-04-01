import extendedAllRoutes from "./router/index";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {

    // extendRoutes(routes, resolve) {

    //   for (let i = 0; i < extendedAllRoutes.length; i++) {

    //     routes.push({
    //       name: extendedAllRoutes[i]['name'],
    //       path: extendedAllRoutes[i]['path'],
    //       component: resolve(__dirname, extendedAllRoutes[i]['component'])
    //     })

    //   }
    // },

  },

  middleware: [],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  components: true,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  'mq': {
    defaultBreakpoint: 'sm',
    breakpoints: {
      mobile: 576,
      tablet: 768,
      ipad: 992,
      laptop: 1200,
      desktop: 1600,
      xlscreen: Infinity
    }

  },

  axios: {
    baseURL: "API url",
  },

  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          darkBlue: '#003574',
          pinkLight: '#d8b1ff',
        },
        dark: {
          blackGray: '#4a4e69',
          darkPurple: '#272640',
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-i18n'],
  },
  server: {
    host: "0.0.0.0"
  }
}
