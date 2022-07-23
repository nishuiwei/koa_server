const Router = require('koa-router')
const commentRouter = new Router({ prefix: '/comment' })
const { create, reply, update } = require('../controller/comment.controller')
const {
	verifyAuth,
	verifyPermission,
} = require('../middleware/auth.middleware')

commentRouter.post('/', verifyAuth, create)
commentRouter.post('/:commentId/reply', verifyAuth, reply)
commentRouter.patch('/:commentId', verifyAuth, verifyPermission, update)

module.exports = commentRouter
