const { create } = require('../service/moment.service')

class MonentController {
	async create(ctx, next) {
		// 1. 获取数据（user_id, content）

		const user_id = ctx.user.id
		const { content } = ctx.request.body
		const result = await create(user_id, content)
		ctx.body = result
	}
}

module.exports = new MonentController()
