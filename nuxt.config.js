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
      {
        hid: 'description',
        name: 'description',
        content: "Martin's peronal page"
      },
      { name: 'ROBOTS', content: 'INDEX,FOLLOW' },
      {
        name: 'description',
        content: 'Software engineer happily coding full-stack js'
      },
      {
        itemprop: 'name',
        content: 'Martin Eigenmann (@eigenmannmartin) on BetaList'
      },
      {
        name: 'keywords',
        content: 'software,engineer,website,commercial,freelancer'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      }
    ]
  },
  /*
  ** Plugins
  */
  plugins: [
    {
      src: '~plugins/vue-typer',
      injectAs: 'vue-typer',
      ssr: false
    }
  ],
  /*
  ** Disable the progress-bar
  */
  loading: false,
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
    vendor: ['~/plugins/vue-typer'],
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%', 'last 10 versions']
      })
    ]
  }
}