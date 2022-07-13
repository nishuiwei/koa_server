const connections = require('./../app/database')

class MomentService {
	async create(userId, content) {
		const statement = `INSERT INTO moments (user_id, content) VALUES (?, ?);`
		const [result] = await connections.execute(statement, [userId, content])
		return result
	}
	async getMomentById(momentId) {
		const statement = `
		SELECT 
			m.id id, m.content content, m.createAt create_time, m.updateAt update_time,
			JSON_OBJECT('id', u.id, 'name', u.name) user
			FROM moments m
			LEFT JOIN users u 
			ON m.user_id = u.id 
			WHERE m.id = ?;`
		const [result] = await connections.execute(statement, [momentId])
		return result[0]
	}
}

module.exports = new MomentService()
