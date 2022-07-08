const Router = require('koa-router')
const { create } = require('./../controller/user.controller')
// 使用路由
const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', create)

module.exports = userRouter
