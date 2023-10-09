const express = require('express');
const server = express()
const cursos = ['Fullstack Master', 'NodeJS', 'Javascript', 'Desevolvimento WEB']

server.listen(3000, () => {
    console.log("ta funfando")
})


// Lista todos os cursos
server.get('/cursos', (req, res) => {
    res.json(cursos)
})

// Mostra um curso específico
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(cursos[index])
})

// Adiciona um curso
server.post('/cursos/add/:name', (req, res) => {
    const { name } = req.params;
    cursos.push(name)

    return res.json({ mensagem : "Curso adicionado!"})
})

// Atualiza um curso
server.put('/cursos/att/:index/:name', (req, res) => {
    const { index } = req.params;
    const { name } = req.params;

    cursos[index] = name

    return res.json({ mensagem : "Curso atualizado!"})
})

// Deleta um curso da lista

server.delete('/cursos/del/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1)

    return res.json({ mensagem : "Curso deletado!"})
})




