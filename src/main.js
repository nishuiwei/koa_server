const app = require('./app/index')
require('./app/database')
const { APP_PORT } = require('./app/config')

app.listen(APP_PORT, () => {
	console.log(`server start: http://localhost:${APP_PORT}`)
})
