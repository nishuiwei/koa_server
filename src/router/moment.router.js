const Router = require('koa-router')
const {
	verifyAuth,
	verifyPermission,
} = require('../middleware/auth.middleware')

const {
	create,
	detail,
	list,
	update,
	remove,
} = require('../controller/moment.controller')

const monentRouter = new Router({ prefix: '/moment' })

monentRouter.post('/', verifyAuth, create)
monentRouter.get('/', list)
monentRouter.get('/:momentId', detail)
monentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
monentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

module.exports = monentRouter
