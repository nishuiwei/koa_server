const app = require('./app/index')

const { APP_PORT } = require('./app/config')

app.listen(APP_PORT, () => {
	console.log(`server start: http://localhost:${APP_PORT}`)
})
