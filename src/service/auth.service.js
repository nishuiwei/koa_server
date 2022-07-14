const connections = require('./../app/database')

class AuthService {
	async checkMoment(momentId, userId) {
		const statement = `SELECT * FROM moments WHERE id = ? AND user_id = ?;`

		const [result] = await connections.execute(statement, [momentId, userId])
		return result[0]
	}
}

module.exports = new AuthService()
