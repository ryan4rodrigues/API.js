const express = require('express');
const server = express()
const bodyParser = require('body-parser')
const consign = require('consign')

consign({ cwd: '../' }).include('index.js').into(server)

server.listen(3000, () => {
    console.log("ta funfando")
})
