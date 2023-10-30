
const Cursos = require('./database/db.js');
const express = require('express');
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(express.json());


// Lista todos os cursos
server.get('/cursos', (req, res) => {
    Cursos.findAll().then((lista) => { res.json(lista); }).catch(() => {
 
         return res.json({ mensagem : "erro ao listar cursos!"})
     })

    })

// Mostra um curso específico
server.get('/cursos/:id', (req, res) => {
    const { id } = req.params
    Cursos.findAll({
        where: {id: id}

    }).then((lista) => { res.json(lista); }).catch(() => {
 
        return res.json({ mensagem : "erro ao listar o curso!"})
    })

   })

// Adiciona um curso
server.post('/cursos/add', (req, res) => {
    Cursos.create(req.body).then(() => {
        return res.json({ mensagem : "Curso adicionado!"})

    }).catch(() => {

        return res.json({ mensagem : "Curso não adicionado!"})
    });    
})

// Atualiza um curso
server.put('/cursos/att', (req, res) => {
    const { id, name, description, duration } = req.body;
    
    Cursos.update({
        name: name,
        description: description,
        duration: duration
    }, {

        where: {id: id}

    }).then(() => {
        return res.json({ mensagem : "Curso atualizado!"})

    }).catch(() => {

        return res.json({ mensagem : "Curso não atualizado!"})
    });    
})
// Deleta um curso do banco

server.delete('/cursos/del/:id', (req, res) => {
    const { id } = req.params;

    Cursos.destroy({
        where: {
          id: id
        }
      }).then(() => {
        return res.json({ mensagem : "Curso deletado!"})
      })
    })