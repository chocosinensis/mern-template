'use strict'

const cors = require('cors')

const { logger } = require('../helpers/logger')

/**
 * Local `morgan` middleware
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.morgan = (req, res, next) => {
  logger.log(`=:= ${req.originalUrl} =.= ~@[${req.method}] ~~> #{ ${req.hostname} } <| ${req.ip} |>`)
  next()
}
 
exports.cors = cors({
  credentials: true,
  origin: ['http://localhost:4000', /* urls */],
})

/**
 * Public middleware if running inside docker
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.pub = (req, res, next) => res.sendFile('./client/build/index.html', { root: `${__dirname}/../../` })
