'use strict'

const { Router, ['static']: stat } = require('express')

const { pub } = require('../middlewares')
const { err404, errorHandler } = require('../middlewares/error')

const root = Router()

module.exports = process.env.ROOT == 'same'
  ? Router()
      .use('/api', root)
      .use(stat(`${__dirname}/../../client/build`))
      .get('*', pub)
      .use(errorHandler)
  : Router().use(root, err404, errorHandler)
