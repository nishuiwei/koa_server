const connections = require('./../app/database')
const sqlFragment = `
	SELECT 
	m.id id, m.content content, m.createAt create_time, m.updateAt update_time,
	JSON_OBJECT('id', u.id, 'name', u.name) user
	FROM moments m
	LEFT JOIN users u 
	ON m.user_id = u.id `
class MomentService {
	async create(userId, content) {
		const statement = `INSERT INTO moments (user_id, content) VALUES (?, ?);`
		const [result] = await connections.execute(statement, [userId, content])
		return result
	}
	async getMomentById(momentId) {
		const statement = `
			${sqlFragment} 
			WHERE m.id = ?;`
		const [result] = await connections.execute(statement, [momentId])
		return result[0]
	}
	async getMomentList(offset = 1, size = 10) {
		const statement = `
			${sqlFragment} 
			LIMIT ?, ?;`
		const [result] = await connections.execute(statement, [offset, size])
		return result
	}
}

module.exports = new MomentService()
