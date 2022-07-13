const { create, getMomentById } = require('../service/moment.service')

class MonentController {
	async create(ctx, next) {
		const user_id = ctx.user.id
		const { content } = ctx.request.body
		const result = await create(user_id, content)
		ctx.body = result
	}
	async detail(ctx, next) {
		// 1. 获取某一条动态的详情
		const { momentId } = ctx.params
		// 2. 根据 id 去查询数据
		const result = await getMomentById(momentId)

		ctx.body = result
	}
}

module.exports = new MonentController()
