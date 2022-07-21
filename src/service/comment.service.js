const connections = require('./../app/database')

class CommentService {
	async create(content, momentId, userId) {
		const statement = `INSERT INTO comments ( content, moment_id, user_id) VALUES (?, ?, ?)`

		const [result] = await connections.execute(statement, [
			content,
			momentId,
			userId,
		])
		return result
	}
}

module.exports = new CommentService()
