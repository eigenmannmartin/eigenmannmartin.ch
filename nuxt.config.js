const { join } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Martin Eigenmann',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Martin\'s peronal page' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }
    ]
  },
  /*
  ** Plugins
  */
  plugins: [{
    src: '~plugins/vue-typer',
    injectAs: 'vue-typer',
    ssr: false
  }],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#E9E9FF' },
  /*
  ** Define global CSS
  */
  css: [
    'normalize.css',
    join(__dirname, 'css/fontello.css'),
    join(__dirname, 'css/typebase.css')
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
  }
}
