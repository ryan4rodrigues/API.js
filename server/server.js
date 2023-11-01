const express = require('express');
const server = express()
const routeAlunos = require('../routes/route-alunos.js')
const routeCursos = require('../routes/route-cursos.js')
const bodyParser = require('body-parser');

server.use('/alunos', routeAlunos)
server.use('/cursos', routeCursos)
server.use(bodyParser.json())
server.use(express.json())


server.listen(3000, () => {
    console.log("ta funfando")
})
