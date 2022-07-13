const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')

const { create, detail, list } = require('./../controller/monent.controller')

const monentRouter = new Router({ prefix: '/moment' })

monentRouter.post('/', verifyAuth, create)
monentRouter.get('/', list)
monentRouter.get('/:momentId', detail)

module.exports = monentRouter
