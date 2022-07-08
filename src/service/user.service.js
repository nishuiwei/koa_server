const connections = require('../app/database')

class UserService {
	async create(user) {
		const { name, password } = user
		const statement = `INSERT INTO users (name, password) VALUES (?, ?);`
		const result = await connections.execute(statement, [name, password])
		// 将 user 存储到数据库中
		return result
	}
}

module.exports = new UserService()
