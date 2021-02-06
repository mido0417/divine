import getRoutes from "./utils/getRoutes";
const webpack = require('webpack')

let now = new Date();

export default {

  target:'static',
  // router: {
  //   base: '/divine/'
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'zh-TW'
    },
    title: '生命之歌 | 探索自我，發現內心的光芒',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '探索自我，發現內心的光芒' },
      { hid: 'og:locale', property: 'og:locale', content: 'zh-TW' },
      { hid: 'og:title', property: 'og:title', content: '生命之歌 | 探索自我，發現內心的光芒' },
      { hid: 'og:description', property: 'og:description', content: '探索自我，發現內心的光芒' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.life-song.space' },
      { hid: 'og:image', property: 'og:image', content: 'https://images.unsplash.com/photo-1494797262163-102fae527c62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&family=Noto+Sans:wght@400;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
      },
      {
        rel: "canonical",
        href: 'http://www.life-song.space',
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      }, {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
      },
      // {
      //   hid:"tawk.to",
      //   src:"https://embed.tawk.to/6009825ea9a34e36b96ed6ca/1esiiagv5",
      //   defer: true
      // },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],


  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  loading: '~/components/Loading.vue',

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',

  ],
  styleResources: {
    scss: [
      './assets/scss/_style.scss',
    ]
  },

  'google-gtag': {
    id: 'G-EWL6N33DVQ', // required
    config: {
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      // linker: {
      //   domains: ['domain.com', 'domain.org']
      // }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
    // additionalAccounts: [{
    //   id: 'AW-XXXX-XX', // required if you are adding additional IDs
    //   config: {
    //     send_page_view: false // optional configurations
    //   }
    // }]
  },

  sitemap: {
    hostname: 'https://www.life-song.space/',
    exclude: [
      '/script',
      '/blog'
    ],

    routes:[
      {
        url: '/',
        changefreq: 'daily', // 可能變更的頻率
        priority: 1, // 網頁的重要程度，0.1 - 1
        lastmodISO: now.toISOString()
      },
      {
        url: '/blog/page/1',
        changefreq: 'daily', // 可能變更的頻率
        priority: 0.6, // 網頁的重要程度，0.1 - 1
        lastmodISO: now.toISOString()
      },
      {
        url: '/blog/page/2',
        changefreq: 'daily', // 可能變更的頻率
        priority: 0.6, // 網頁的重要程度，0.1 - 1
        lastmodISO: now.toISOString()
      }
    ]
    // routes() {
    //   return getRoutes();
    // },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  // },

}
