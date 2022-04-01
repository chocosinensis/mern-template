/**
 * App
 *
 * The Application Programming Interface Entrypoint
 *
 * web client url: <>
 * api url: <>
 */

'use strict'

const express = require('express')

const config = require('./config')

module.exports = config(express())
