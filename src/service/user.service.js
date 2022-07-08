class UserService {
	async create(user) {
		// 将 user 存储到数据库中
		console.log(user)
		return '创建成功'
	}
}

module.exports = new UserService()
