const { create, reply } = require('./../service/comment.service.js')

class CommentController {
	async create(ctx, next) {
		const { momentId, content } = ctx.request.body
		const { id } = ctx.user
		const result = await create(content, momentId, id)
		ctx.body = result
	}

	async reply(ctx, next) {
		const { content, momentId } = ctx.request.body
		const { commentId } = ctx.params
		const { id } = ctx.user
		const result = await reply(content, momentId, id, commentId)
		ctx.body = result
	}
}

module.exports = new CommentController()
