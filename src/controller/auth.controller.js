// const service = require('../service/auth.service')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./../app/config')

class AuthController {
	async login(ctx, next) {
		// console.log()
		const { id, name } = ctx.user
		// console.log(id, name)
		// console.log(PRIVATE_KEY)
		const token = jwt.sign({ id, name }, PRIVATE_KEY, {
			expiresIn: 60 * 60 * 24,
			algorithm: 'RS256',
		})

		ctx.body = {
			id,
			name,
			token,
		}
	}
}

module.exports = new AuthController()
