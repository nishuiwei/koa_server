const Koa = require('koa')
const app = new Koa()

app.listen(8888, () => {
	console.log(`server start: http://localhost:8888`)
})
