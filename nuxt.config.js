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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#E9E9FF' },
  /*
  ** Define global CSS
  */
  css: [
    'normalize.css',
    join(__dirname, 'css/fontello-embedded.css'),
    join(__dirname, 'css/typebase.css')
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
  }
}
