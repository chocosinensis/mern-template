'use strict'

const { resolve } = require('path')
const { config } = require('dotenv')

/**
 * Configures `process.env` with the corresponding `.env` file
 *
 * @param {String} env
 */
exports.dotenv = (env = '.env') => config({ path: resolve(__dirname, `../../config/.env/${env}`) })
