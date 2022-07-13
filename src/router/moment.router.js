const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')

const { create } = require('./../controller/monent.controller')

const monentRouter = new Router({ prefix: '/moment' })

monentRouter.post('/', verifyAuth, create)

module.exports = monentRouter
