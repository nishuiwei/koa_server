const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const useRoutes = require('./../router')

const errorHandler = require('./error-handler')
const app = new Koa()

app.use(bodyParser())
useRoutes(app)
app.on('error', errorHandler)
module.exports = app
