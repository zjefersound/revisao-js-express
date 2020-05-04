const express = require('express')
const app = express()
const routes = require('./routes')

//serve pra executar qualquer metodo HTTP

app.use(routes)

module.exports = app;