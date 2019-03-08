const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

// Integraçao com banco de dados
mongoose.connect('mongodb://luccasoli:admin123@ds225375.mlab.com:25375/omni_lucas',
{
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
})