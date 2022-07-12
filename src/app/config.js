const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
dotenv.config()

const PRIVATE_KEY = fs.readFileSync(
	path.resolve(__dirname, './keys/private.key')
)

const PUBLIC_KEY = fs.readFileSync(
	path.resolve(__dirname, './/keys/public.key')
)

module.exports = {
	APP_PORT,
	MY_SQL_HOST,
	MY_SQL_POST,
	MY_SQL_DATABASE,
	MY_SQL_USER,
	MY_SQL_PASSWORD,
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
