const mysql = require('mysql2')
const config = require('./config')

const connections = mysql.createPool({
	host: config.MY_SQL_HOST,
	pool: config.MY_SQL_PORT,
	database: config.MY_SQL_DATABASE,
	user: config.MY_SQL_USER,
	password: config.MY_SQL_PASSWORD,
})

connections.getConnection((err, conn) => {
	// console.log(err)
	conn.connect((err) => {
		if (err) {
			console.log('链接失败', err)
		} else {
			console.log('数据库链接成功')
		}
	})
})

module.exports = connections.promise()
