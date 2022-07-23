const jwt = require('jsonwebtoken')
const errorType = require('../constants/error-types')
const { checkMoment } = require('../service/auth.service')
const { getUserByName } = require('../service/user.service')
const md5password = require('../utils/password-handle')
const { PUBLIC_KEY } = require('./../app/config')

const verifyLogin = async (ctx, next) => {
	// 1. 获取用户名和密码
	const { name, password } = ctx.request.body
	// 2. 判断用户名和密码是否为空
	if (!name.trim() || !password.trim()) {
		const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
		return ctx.app.emit('error', error, ctx)
	}
	// 3. 判断用户是否存在
	const result = await getUserByName(name)
	const user = result[0]
	if (!user) {
		const error = new Error(errorType.USER_DOES_NOT_EXISTS)
		return ctx.app.emit('error', error, ctx)
	}
	// 4. 判断密码是否和数据库中的密码是否一致
	if (md5password(password) !== user.password) {
		const error = new Error(errorType.PASSWORD_IS_INCORRENT)
		return ctx.app.emit('error', error, ctx)
	}

	ctx.user = user

	await next()
}

const verifyAuth = async (ctx, next) => {
	// const token = ctx.headers.
	console.log('验证授权的middleware')
	const authorization = ctx.headers.authorization
	const token = authorization.replace('Bearer ', '')
	if (!authorization) {
		const error = new Error(errorType.UNAUTHORIZATION)
		return ctx.app.emit('error', error, ctx)
	}
	try {
		const result = jwt.verify(token, PUBLIC_KEY, {
			algorithms: ['RS256'],
		})
		ctx.user = result
		await next()
	} catch (err) {
		console.log(err)
		const error = new Error(errorType.UNAUTHORIZATION)
		ctx.app.emit('error', error, ctx)
	}
}

const verifyPermission = async (ctx, next) => {
	console.log('验证权限的middleware')
	const { momentId } = ctx.params
	const { id } = ctx.user

	try {
		const isPermission = await checkMoment(momentId, id)
		if (!isPermission) throw new Error(errorType.UNPERMISSION)
		await next()
	} catch (err) {
		const error = new Error(errorType.UNPERMISSION)
		return ctx.app.emit('error', error, ctx)
	}
}

module.exports = { verifyLogin, verifyAuth, verifyPermission }
