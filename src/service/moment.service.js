const connections = require('./../app/database')

class MomentService {
	async create(userId, content) {
		const statement = `INSERT INTO moments (user_id, content) VALUES (?, ?);`
		const [result] = await connections.execute(statement, [userId, content])
		return result
	}
}

module.exports = new MomentService()
