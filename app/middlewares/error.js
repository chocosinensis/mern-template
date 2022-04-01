'use strict'

const { error } = require('../helpers/logger')

/**
 * Returns an error middleware
 *
 * @param {Number | String} status
 * @param {String} detail
 * @param {Error | null} err
 * @return {function(import('express').Request, import('express').Response, import('express').NextFunction)}
 */
exports.error = (status, detail, err = null) => (req, res, next) => {
  error.log(`=:= ${req.originalUrl} ~@[${status}] ~~> ${detail}: ${err?.stack ?? '<! no_error !>'}`)
  if (res.headersSent) next(err)
  res
    .status(status)
    .json({ success: false, message: detail, error: process.env.NODE_ENV === 'production' ? undefined : err })
}

/** 404 middleware */
exports.err404 = exports.error(404, 'This page does not exist')

/**
 * Error handler middleware
 *
 * @param {Error} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.errorHandler = (err, req, res, next) => this.error(500, 'Internal Server Error', err)(req, res, next)
