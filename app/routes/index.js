'use strict'

const { Router, ['static']: stat } = require('express')

const { pub } = require('../middlewares')
const { err404, errorHandler } = require('../middlewares/error')

const root = Router()
  .get('', async (req, res) => {
    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    //await prisma.$connect()
    try {
      return res.json({
        success: true,
        data: await prisma.sus.findMany()
      })
    } finally {
      //prisma.$disconnect()
    }
  })
  .get('/make', async (req, res) => {
    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    //await prisma.$connect()
    try {
      await prisma.sus.create({
        data: { type: 'SUS AMOGUS' }
      })
      await prisma.sus.create({
        data: { type: 'AMOGUS SUSSS' }
      })
      return res.json({
        success: true,
        data: await prisma.sus.findMany()
      })
    } finally {
      //prisma.$disconnect()
    }
  })

module.exports = process.env.ROOT == 'same'
  ? Router()
      .use('/api', root)
      .use(stat(`${__dirname}/../../client/build`))
      .get('*', pub)
      .use(errorHandler)
  : Router().use(root, err404, errorHandler)
