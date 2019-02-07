const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Agora usando rotas')
})


module.exports = routes