const connections = require('./../app/database')

class AuthService {
	async checkResource(tableName, id, userId) {
		const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`

		const [result] = await connections.execute(statement, [id, userId])
		return result[0]
	}
}

module.exports = new AuthService()
