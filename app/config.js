'use strict'

const { urlencoded, json } = require('express')
const cookie = require('cookie-parser')

require('./helpers/functions').dotenv()
const rootRouter = require('./routes')
const { cors, morgan } = require('./middlewares')
const { logger, error } = require('./helpers/logger')

/**
 * Starts the server if not in test environment
 *
 * @param {import('express').Application} app
 */
const listen = (app) => {
  logger.log('Application Started')

  const { PORT, NODE_ENV } = process.env

  if (NODE_ENV === 'test') return app

  app.listen(PORT)
  logger.log(`Application Listening - URL: http://localhost:${PORT}`)

  return app
}


/**
 * Configures the application
 *
 * @param {import('express').Application} app
 */
// prettier-ignore
module.exports = (app) => listen(app)
  // settings
  .set('env', process.env.NODE_ENV)
  .set('json spaces', 2)
  .disable('x-powered-by')

  // middlewares
  .use(
    urlencoded({ extended: true }), json(),
    cookie(process.env.COOKIE_SECRET),
    cors, morgan, rootRouter
  )
