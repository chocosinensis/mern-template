'use strict'

const supertest = require('supertest')

require('../../app/helpers/functions').dotenv('.env.test')
const app = require('../../app')
const { error } = require('../../app/helpers/logger')

exports.app = app
exports.agent = supertest.agent(app)
exports.log = error.log
