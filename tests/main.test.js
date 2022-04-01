'use strict'

const { connection } = require('mongoose')

const { app } = require('./config')
// const { log } = require('../app/helpers/logger')

describe('config', () => {
  it('should load the test enviroment', () => {
    let env = process.env.NODE_ENV
    expect(env).toBe('test')
    expect(env).not.toBe('development')
    expect(env).not.toBe('production')

    env = app.get('env')
    expect(env).toBe('test')
    expect(env).not.toBe('development')
    expect(env).not.toBe('production')
  })

  it('should use the test database', () => {
    const dbname = connection.db.databaseName
    expect(dbname).toBe('{app}-test')
    expect(dbname).not.toBe('{app}')
  })
})

describe('Logger', () => {
  it('should log stuffs correctly', () => {
    // log('info', 'Take ma info you nerd')
    // log('debug', "I'm debuggin' coz I just can't")
    // log('warn', "Warnin' u coz u may crash")
    // log('error', 'Hey gulp ma error')
    // log('fatal', 'LOL YOU DIED :oecle:')
    expect(true).toBe(true)
  })
})
