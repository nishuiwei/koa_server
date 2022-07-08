const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	APP_PORT,
	MY_SQL_HOST,
	MY_SQL_POST,
	MY_SQL_DATABASE,
	MY_SQL_USER,
	MY_SQL_PASSWORD,
} = process.env
