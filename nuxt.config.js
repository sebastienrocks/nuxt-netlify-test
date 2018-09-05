
module.exports = {
  head: {
    title: 'Sebastien Rocks - A front-end Engineer specializing in Vue.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio of Sebastien Crapoulet' },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:title", content: "Sebastien.rocks - Portfolio" },
      { prroperty: "og:type", content: "website" },
      { property: "og:description", content: "Sebastien Crapoulet, a Front-end Engineer specializing in Vue.js and UI enthusiast" },
      { property: "og:url", content: "https://sebastien.rocks" },
      { property: "og:image", content: "/static/opengraph.jpg" }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,400i,600,600i' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'maniffest', content: "/manifest.json" },
      { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
    ]
  },
  css: [
    '~/scss/main.scss'
  ],
  loading: { color: '#5bbad5' },
  build: {
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

