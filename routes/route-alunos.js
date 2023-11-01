const Alunos = require('../database/models/table-alunos')
const express = require('express');
const router = express.Router()


// Lista todos os cursos
router.get('/', (req, res) => {
    Alunos.findAll().then((lista) => { res.json(lista); }).catch(() => {
 
         return res.json({ mensagem : "erro ao listar cursos!"})
     })

    })

// Mostra um curso específico
router.get('/:id', (req, res) => {
    const { id } = req.params
    Alunos.findAll({
        where: {id: id}

    }).then((lista) => { res.json(lista); }).catch(() => {
 
        return res.json({ mensagem : "erro ao listar o curso!"})
    })

   })

// Adiciona um curso
router.post('/add', (req, res) => {
    Alunos.create(req.body).then(() => {
        return res.json({ mensagem : "Aluno adicionado!"})

    }).catch(() => {

        return res.json({ mensagem : "Aluno não adicionado!"})
    });    
})

// Atualiza um curso
router.put('/att', (req, res) => {
    const { id, name, description, duration } = req.body;
    
    Alunos.update({
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

router.delete('/del/:id', (req, res) => {
    const { id } = req.params;

    Alunos.destroy({
        where: {
          id: id
        }
      }).then(() => {
        return res.json({ mensagem : "Curso deletado!"})
      })
    })

module.exports = router