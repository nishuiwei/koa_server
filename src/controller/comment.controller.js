const { create } = require('./../service/comment.service.js')

class CommentController {
	async create(ctx, next) {
		const { momentId, content } = ctx.request.body
		const { id } = ctx.user
		const result = await create(content, momentId, id)
		ctx.body = result
	}
}

module.exports = new CommentController()
