const Nuxt = require('nuxt')
const enforce = require('express-sslify')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const api = require('./api')

const app = require('express')()

const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt(require('../nuxt.config.js'))

if (isProd) {
  // Always user HTTPS
  app.use(enforce.HTTPS({ trustProtoHeader: true }))

  // Always wear a helmet
  app.use(helmet())

  // Compression
  app.use(compression())
} else {
  // Execute build in development
  nuxt.build()
}

// Logging
app.use(morgan('tiny'))

// The magig happens here
app.use('/api', api)
app.use(nuxt.render)

app.listen(process.env.PORT)
