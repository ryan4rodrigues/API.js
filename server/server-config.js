const express = require('express');
const server = express()
const routeAlunos = require('../routes/route-alunos.js')
const routeCursos = require('../routes/route-cursos.js')
const bodyParser = require('body-parser');

server.use('/alunos', routeAlunos)
server.use('/', routeCursos)
server.use(bodyParser.json())
server.use(express.json())

module.exports = server