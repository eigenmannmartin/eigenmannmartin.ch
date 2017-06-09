const Nuxt = require('nuxt')
const enforce = require('express-sslify')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

const app = require('express')()

const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ ...require('./nuxt.config.js'), dev: !isProd })
const PORT = process.env.PORT || 3000

if (isProd) {
  // Always user HTTPS
  app.use(enforce.HTTPS({ trustProtoHeader: true }))

  // Always wear a helmet
  app.use(helmet())

  // Compression
  app.use(compression())

  // Logging
  app.use(morgan('tiny'))
}

// The magig happens here
app.use(nuxt.render)

Promise.resolve()
.then(() => !isProd && nuxt.build())
.then(() => app.listen(PORT, function () {
  console.log(`Server is listening on http://0.0.0.0:${PORT}`)
}))
.catch((error) => {
  console.error(error)
  process.exit(1)
})
