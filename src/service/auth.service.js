const connections = require('../app/database')

class AuthService {
	async create(user) {
		const { name, password } = user
		const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
		const result = await connections.execute(statement, [name, password])
		// 将 user 存储到数据库中
		return result
	}

	async getUserByName(name) {
		const statement = `SELECT * FROM users WHERE name = ?;`
		const result = await connections.execute(statement, [name])
		return result[0]
	}
}

module.exports = new AuthService()
